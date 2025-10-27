// pages/About.jsx
import React from "react";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-image-container">
              <img 
                src="/images/me.jpg" 
                alt="Abdurehman Mohammed" 
                className="profile-image"
              />
            </div>
            <div className="about-text">
              <h1 className="about-title">Abdurehman Mohammed</h1>
              <h2 className="about-subtitle">Web Developer & Student</h2>
              
              <div className="about-description">
                <p>
                  I am a passionate beginner web developer with a strong enthusiasm for 
                  creating interactive and user-friendly websites. My journey in web 
                  development started with a curiosity about how digital experiences 
                  are crafted, and it has grown into a dedicated pursuit of excellence 
                  in modern web technologies.
                </p>
                
                <p>
                  I enjoy learning new technologies and building projects that solve 
                  real-world problems. Every project is an opportunity to push my 
                  boundaries and create meaningful solutions that make a difference 
                  in users' lives.
                </p>
                
                <p>
                  Currently focused on mastering React, JavaScript, and modern web 
                  development practices while pursuing my studies in Web Application 
                  Development.
                </p>
              </div>
              
              {/* Resume Download Section */}
              <div className="resume-section">
                <h3>Professional Documents</h3>
                <a 
                  href="/Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-link btn btn-primary"
                  download
                >
                  📄 Download My Resume
                </a>
                <p className="resume-note">
                  View my complete professional background, skills, and experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Interests Section */}
      <section className="skills-section">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Learning & Growing</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Database Management</li>
                <li>Version Control (Git)</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Team Collaboration</li>
                <li>Continuous Learning</li>
                <li>Attention to Detail</li>
                <li>Creative Thinking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="interests-section">
        <div className="container">
          <h2>Beyond Coding</h2>
          <p className="interests-intro">
            When I'm not coding, I enjoy exploring new technologies, reading about 
            web development trends, and working on personal projects that challenge 
            my creativity and technical skills.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
