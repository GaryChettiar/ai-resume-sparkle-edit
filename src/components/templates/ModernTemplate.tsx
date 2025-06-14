import React from 'react';
import { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface ModernTemplateProps {
  data: ResumeData;
}

export const ModernTemplate: React.FC<ModernTemplateProps> = ({ data }) => {
  return (
    <div
      className="w-full max-w-4xl mx-auto bg-white p-10 text-sm leading-relaxed"
      style={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#232323', minHeight: '297mm' }}
    >
      {/* Header */}
      <div className="pb-6 mb-7 border-b-4" style={{ borderColor: '#243e36' }}>
        <h1
          className="text-3xl font-bold mb-2"
          style={{
            color: '#243e36',
            lineHeight: 1.1,
            letterSpacing: '-0.5px',
          }}
        >
          {data.personalInfo.fullName}
        </h1>
        <div
          className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700 text-sm items-center"
        >
          {data.personalInfo.email && (
            <div className="flex items-center gap-2 min-w-[180px]">
              <Mail className="w-4 h-4 text-[#42697a] flex-shrink-0" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-2 min-w-[140px]">
              <Phone className="w-4 h-4 text-[#42697a] flex-shrink-0" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-2 min-w-[120px]">
              <MapPin className="w-4 h-4 text-[#42697a] flex-shrink-0" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo.linkedin && (
            <div className="flex items-center gap-2 min-w-[130px]">
              <Linkedin className="w-4 h-4 text-[#42697a] flex-shrink-0" />
              <span>{data.personalInfo.linkedin}</span>
            </div>
          )}
          {data.personalInfo.website && (
            <div className="flex items-center gap-2 min-w-[130px]">
              <Globe className="w-4 h-4 text-[#42697a] flex-shrink-0" />
              <span>{data.personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-7">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: '#243e36', letterSpacing: '-1px' }}
          >
            Professional Summary
          </h2>
          <p className="text-gray-800">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-7">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: '#243e36', letterSpacing: '-1px' }}
          >
            Work Experience
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id} className="pl-4 border-l-2" style={{ borderColor: '#f1f7ed' }}>
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <div
                  className="flex flex-wrap gap-6 text-base font-medium items-center"
                  style={{ color: '#243e36' }}
                >
                  <span>{exp.company}</span>
                  <span className="text-gray-400">•</span>
                  <span>{exp.location}</span>
                </div>
                <div className="text-gray-500 mb-1 text-xs">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</div>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  {exp.description.map((desc, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 leading-relaxed"
                      style={{ minHeight: '1.4em' }}
                    >
                      <span
                        className="inline-block"
                        style={{
                          marginTop: '0.5em',
                          width: '0.45em',
                          minWidth: '0.45em',
                          height: '0.45em',
                          background: '#243e36',
                          borderRadius: '9999px',
                          marginRight: '0.6em',
                          display: 'inline-block',
                        }}
                      ></span>
                      <span className="pt-[1px]">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-7">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: '#243e36', letterSpacing: '-1px' }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <div className="flex flex-wrap gap-6 items-center" style={{ color: '#243e36' }}>
                  <span>{edu.school}</span>
                  <span className="text-gray-400">•</span>
                  <span>{edu.location}</span>
                </div>
                <div className="text-gray-500 text-xs">
                  {edu.graduationDate} {edu.gpa && <span>• GPA: {edu.gpa}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div className="mb-7">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: '#243e36', letterSpacing: '-1px' }}
          >
            Skills
          </h2>
          <div
            className="flex flex-wrap gap-3 items-center"
            style={{
              rowGap: '10px',
              columnGap: '12px',
              marginTop: '-6px',
            }}
          >
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="flex items-center px-3 py-[0.35em] rounded-full text-sm"
                style={{
                  backgroundColor: '#f1f7ed',
                  color: '#243e36',
                  boxShadow: '0 1px 2px #eee',
                  letterSpacing: '0.1em',
                  lineHeight: '1.8',
                  minHeight: '2.1em',
                  fontFamily: 'inherit',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <div className="mb-4">
          <h2
            className="text-xl font-semibold mb-3"
            style={{ color: '#243e36', letterSpacing: '-1px' }}
          >
            Projects
          </h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-bold text-gray-900">{project.name}</h3>
                {project.url && (
                  <p className="text-sm" style={{ color: '#243e36', wordBreak: 'break-all' }}>
                    {project.url}
                  </p>
                )}
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      style={{
                        fontFamily: 'inherit',
                        lineHeight: '1.8',
                        minHeight: '1.8em',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
