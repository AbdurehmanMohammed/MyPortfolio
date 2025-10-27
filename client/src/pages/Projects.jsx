// pages/Projects.jsx
import React from "react";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "World Gallery Museum Website",
      image: "/images/Musem2.jpg", // Fixed path with forward slash
      link: "http://studentweb.cencol.ca/amoha808/Web%20Project/Project.html",
      technologies: ["HTML5", "CSS3", "Responsive Design"],
      description: "A dynamic museum website showcasing global cultures through artistic expression. Features an inclusive design that serves as a bridge between past and present, offering visitors an engaging platform to explore diverse art forms and cultural narratives.",
      role: "Full-Stack Developer",
      outcome: "Successfully created an accessible, responsive museum website that promotes cultural dialogue and artistic appreciation. Implemented sustainable design principles and ensured cross-browser compatibility.",
      features: [
        "Responsive gallery layout",
        "Cultural exhibition showcase", 
        "Accessibility-focused design",
        "Cross-platform compatibility"
      ]
    },
    {
      id: 2,
      title: "Modern Barber Shop Website",
      image: "/images/GracefulLogo.jpg", 
      link: "http://studentweb.cencol.ca/amoha808/BarberWeb01/index.html",
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      description: "A contemporary barber shop website featuring interactive elements and smooth user experience. Built with vanilla JavaScript to handle dynamic content and user interactions.",
      role: "Frontend Developer",
      outcome: "Delivered a fully functional business website with interactive features, improving user engagement and providing an intuitive booking interface.",
      features: [
        "Interactive service menu",
        "Dynamic content loading",
        "Mobile-responsive design", 
        "Smooth animations and transitions"
      ]
    },
    {
      id: 3,
      title: "Student Performance Tracker - Windows GUI",
      image: "/images/GUI3.png", // Fixed path
      link: null, // No web link since it's a desktop app
      technologies: ["C#", "Windows Forms", ".NET Framework", "SQL Server", "Visual Studio"],
      description: "A comprehensive Windows desktop application for tracking student performance and managing educational data. Features a modern GUI with data entry forms, performance tracking dashboard, and comprehensive reporting capabilities.",
      role: "Desktop Application Developer", 
      outcome: "Successfully developed a fully functional desktop application with intuitive user interface, efficient data management, and robust performance tracking features for educational institutions.",
      features: [
        "Student Information Management",
        "Performance Data Tracking",
        "Interactive Dashboard Interface",
        "Grade Management System",
        "Course Performance Analytics",
        "Data Grid with CRUD Operations",
        "Professional Windows GUI Design",
        "Database Integration"
      ],
      fallbackIcon: "🖥️"
    }
  ];

  return (
    <div className="projects-page">
      {/* Header Section */}
      <section className="projects-header">
        <div className="container">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my development journey and technical achievements
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                {/* Project Image */}
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback for missing images */}
                  <div className="project-fallback" style={{ display: 'none' }}>
                    <span className="fallback-icon">{project.fallbackIcon || "💻"}</span>
                    <span className="fallback-text">{project.title}</span>
                  </div>
                  
                  <div className="project-overlay">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        🌐 View Live Project
                      </a>
                    ) : (
                      <span className="project-status desktop-app">
                        🖥️ Desktop Application
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  
                  {/* Technologies Used */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Description */}
                  <p className="project-description">
                    {project.description}
                  </p>

                  {/* Role and Outcome */}
                  <div className="project-details">
                    <div className="detail-item">
                      <strong>My Role:</strong> {project.role}
                    </div>
                    <div className="detail-item">
                      <strong>Outcome:</strong> {project.outcome}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Link or Status */}
                  <div className="project-actions">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit Project
                      </a>
                    ) : (
                      <div className="desktop-app-info">
                        <span className="btn btn-secondary disabled">
                          🖥️ Windows Desktop Application
                        </span>
                        <small className="app-note">
                          This application runs locally on Windows systems
                        </small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="projects-cta">
        <div className="container">
          <h2>Interested in Working Together?</h2>
          <p>I'm always excited to take on new challenges and create innovative solutions.</p>
          <a href="/contact" className="btn btn-secondary">
            Let's Connect
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
