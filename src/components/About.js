import React from 'react';

const About = () => {
  const techStack = [
    { name: 'Terraform', category: 'Infrastructure' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'GitHub Actions', category: 'CI/CD' },
    { name: 'Prometheus', category: 'Monitoring' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'AWS', category: 'Cloud' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-navy/50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-purple/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative">
                <img 
                  src="/1751289408771.jpg" 
                  alt="Stanley (Odera) Aghara" 
                  className="w-80 h-80 object-cover rounded-2xl border-2 border-cyan/30 group-hover:border-cyan/60 transition-all duration-300 shadow-lg hover:shadow-cyan/25"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title mb-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold text-cyan mb-6">Stanley (Odera) Aghara</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan to-purple mb-8"></div>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                As a software engineering graduate with 3+ years of hands-on experience in cloud 
                infrastructure, I bring a comprehensive understanding of both modern cloud environments 
                and traditional on-premises systems. My background spans across cloud platforms, 
                networking fundamentals, and infrastructure automation using tools like Terraform and CI/CD.
              </p>
              
              <p>
                Currently expanding my expertise toward DevOps, Platform Engineering and Site Reliability 
                Engineering roles. I'm passionate about creating robust, scalable infrastructure solutions 
                that enable teams to deliver software efficiently and reliably.
              </p>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-8 gradient-text">Core Technologies</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="group relative"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="card group-hover:scale-105 transition-all duration-300 text-center">
                    <div className="mb-2">
                      <span className="text-sm text-cyan/70 uppercase tracking-wide font-medium">
                        {tech.category}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold text-lg">
                      {tech.name}
                    </h4>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </div>
              ))}
            </div>
            
            {/* Experience & Certifications */}
            <div className="mt-12 space-y-6">
              <h4 className="text-xl font-semibold text-cyan mb-4">Experience</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-gray-300">Cloud Service Desk Engineer - Westcoast Cloud (Feb 2025 - Present)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span className="text-gray-300">DevOps Engineer - Nimbus Compute (Aug 2025 - Present)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-gray-300">IT Support Engineer - Awareness Software Limited (Jul 2024 - Jan 2025)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span className="text-gray-300">First Class Honours - Computer Science, University of Salford</span>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-cyan mb-4 mt-8">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-gray-300">HashiCorp Terraform Associate (003) - Sep 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple rounded-full"></div>
                  <span className="text-gray-300">Microsoft Azure Solutions Architect Expert - Jul 2025</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-gray-300">9 Azure & Cloud Certifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
