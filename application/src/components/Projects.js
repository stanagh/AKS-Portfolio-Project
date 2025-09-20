import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Check-In: Attendance Tracking Web Application',
      description: 'Developed and provisioned a comprehensive 3-tier web application for attendance management, fully migrated to Microsoft Azure cloud infrastructure. This enterprise-grade solution leverages multiple Azure services to deliver a scalable, secure, and highly available CRM system.',
      stack: ['.NET Framework', 'ASP.NET MVC', 'Azure App Service', 'Azure SQL Database', 'Azure Storage', 'Azure Application Insights'],
      outcomes: [
        'User roles (admin, teacher, and student) with defined functionalities',
        'Teacher-led attendance tracking and student self-marking',
        'Comprehensive attendance history and reporting',
        'Cloud deployment on AWS and Microsoft Azure platforms'
      ],
      link: 'https://attendanceappservice.azurewebsites.net/',
      github: 'https://github.com/stanagh/AttendanceCRM',
      gradient: 'from-cyan/20 to-blue-600/20'
    },
    {
      title: 'Azure Virtual Desktop (AVD)',
      description: 'Designed and provisioned an Azure Virtual Desktop environment for a small-to-medium-sized business (SMB), enabling secure remote access to virtualized Windows desktops with complete AVD architecture.',
      stack: ['Azure Virtual Desktop', 'Azure Virtual Machines', 'Windows 10 Enterprise', 'FSLogix', 'RBAC', 'Conditional Access'],
      outcomes: [
        'Complete AVD architecture with host pools and application groups',
        'Security best practices with role-based access control',
        'Performance optimization and user profile management',
        'FSLogix configuration for seamless user experience'
      ],
      github: 'https://github.com/stanagh/AVD-Home-Lab',
      gradient: 'from-purple/20 to-pink-600/20'
    },
    {
      title: 'Cloud Infrastructure & DevOps Portfolio',
      description: 'Comprehensive collection of cloud infrastructure projects showcasing expertise in Azure, DevOps practices, and modern development workflows with production-grade implementations.',
      stack: ['Terraform', 'Azure', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Infrastructure as Code'],
      outcomes: [
        'Automated infrastructure provisioning',
        'Security-first cloud architecture',
        'Scalable and maintainable solutions',
        'Best practices in DevOps and Platform Engineering'
      ],
      gradient: 'from-cyan/20 to-purple/20'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-navy/50 to-transparent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan to-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my latest infrastructure and DevOps implementations that power 
            mission-critical applications at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Card */}
              <div className="relative card group-hover:scale-[1.02] transition-all duration-300 h-full">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="card-title text-white mb-3 group-hover:text-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-cyan text-sm font-semibold mb-3 uppercase tracking-wide">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="flex-grow">
                    <h4 className="text-purple text-sm font-semibold mb-3 uppercase tracking-wide">
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan to-purple rounded-full mt-2 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-cyan/20">
                    <div className="flex gap-4">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan hover:text-purple transition-colors duration-300 font-medium flex items-center space-x-2 group"
                        >
                          <span>Live Demo</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple hover:text-cyan transition-colors duration-300 font-medium flex items-center space-x-2 group"
                        >
                          <span>GitHub</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      {!project.link && !project.github && (
                        <button className="text-cyan hover:text-purple transition-colors duration-300 font-medium flex items-center space-x-2 group">
                          <span>View Details</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <button className="btn-primary">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
