
/**
 * Exports resume PDF using frontend html2canvas + jsPDF.
 * The Netlify function (backend Puppeteer) is no longer used.
 */

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (elementId: string, filename: string = 'resume.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error(`Element with ID "${elementId}" not found. Make sure the resume preview is visible.`);
    }

    // Wait a bit to allow any rendering to complete
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Starting PDF export for element:', elementId);

    const canvas = await html2canvas(element, {
      scale: 1.5,
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      logging: true,
      height: element.scrollHeight,
      width: element.scrollWidth
    });

    console.log('Canvas created:', canvas.width, 'x', canvas.height);

    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const hasContent = imageData.data.some((channel, index) =>
      index % 4 !== 3 && channel !== 255
    );
    console.log('Canvas has content:', hasContent);

    if (!hasContent) {
      throw new Error('Canvas appears to be blank. Please try again.');
    }

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF('portrait', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(filename);
    console.log('PDF saved successfully');
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    throw error;
  }
};
