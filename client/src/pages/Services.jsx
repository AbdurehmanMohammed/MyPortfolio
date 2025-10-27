// pages/Services.jsx
import React from "react";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      icon: "🌐",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Custom website development using modern technologies and best practices. From simple landing pages to complex web applications.",
      features: [
        "Responsive Design",
        "Cross-browser Compatibility", 
        "Modern HTML5 & CSS3",
        "Performance Optimization",
        "SEO-friendly Structure",
        "Mobile-first Approach"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Java", "Python", "MySQL", "MongoDB"]
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: "⚛️",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Interactive user interfaces and engaging user experiences using modern JavaScript frameworks and libraries.",
      features: [
        "React.js Applications",
        "Interactive UI Components",
        "State Management",
        "API Integration",
        "Modern JavaScript (ES6+)",
        "Component-based Architecture"
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5"]
    },
    {
      id: 3,
      title: "Windows GUI Design",
      icon: "🖥️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Modern Windows desktop application interfaces using advanced CSS styling and design principles for professional-looking GUI applications.",
      features: [
        
        "Modern GUI Components",
        "Responsive Layouts",
        "Professional Look & Feel",
        "User-friendly Interface Design"
      ],
      technologies: [ "Windows GUI Design", "C#", "Windows Forms", ".NET Framework"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery",
      description: "We discuss your project requirements, goals, and vision to understand exactly what you need."
    },
    {
      step: 2,
      title: "Planning",
      description: "I create a detailed project plan, timeline, and technical specifications for your approval."
    },
    {
      step: 3,
      title: "Development",
      description: "Your project comes to life with regular updates and opportunities for feedback along the way."
    },
    {
      step: 4,
      title: "Testing",
      description: "Thorough testing ensures everything works perfectly across all devices and browsers."
    },
    {
      step: 5,
      title: "Launch",
      description: "Your project goes live with full documentation and ongoing support options."
    }
  ];

  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <div className="container">
          <h1 className="services-title">My Services</h1>
          <p className="services-subtitle">
            Professional web development solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card">
                <div 
                  className="service-gradient-header"
                  style={{ background: service.gradient }}
                >
                  <div className="service-icon-large">{service.icon}</div>
                  <div className="service-pattern"></div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <h4>What's Included:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="service-action">
                    <a href="/contact" className="btn btn-primary">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">My Work Process</h2>
          <p className="process-intro">
            A proven approach that ensures quality results and client satisfaction
          </p>
          
          <div className="process-steps">
            {processSteps.map((step) => (
              <div key={step.step} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose My Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h4>Quality Focused</h4>
              <p>Every project is built with attention to detail and adherence to best practices</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h4>Fast Delivery</h4>
              <p>Efficient development process with regular updates and timely project completion</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💬</div>
              <h4>Clear Communication</h4>
              <p>Regular updates, transparent progress tracking, and responsive communication</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h4>Ongoing Support</h4>
              <p>Post-launch support and maintenance to keep your project running smoothly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how I can help bring your vision to life with professional web development services.</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get Started
            </a>
            <a href="/projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
