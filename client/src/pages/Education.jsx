// pages/Education.jsx
import React from "react";

function Education() {
  const educationData = [
    {
      id: 1,
      institution: "Centennial College",
      degree: "Software Engineering Technology - Co-op",
      dates: "2024 - Present",
      year: "Current",
      status: "In Progress",
      location: "Toronto, Ontario, Canada",
      description: "Comprehensive program focusing on software development, web technologies, and system design. Currently developing skills in full-stack development, database management, and software engineering principles.",
      relevantCourses: [
        "COMP229 - Web Application Development",
        "Database Design and Implementation",
        "Object-Oriented Programming",
        "Software Testing and Quality Assurance",
        
      ],
      achievements: [
        "Active participant in coding workshops",
        "Completed multiple web development projects",
        "Building strong foundation in software engineering"
      ]
    },
    {
      id: 2,
      institution: "Monsignor Fraser College",
      degree: "Ontario Secondary School Diploma (OSSD)",
      dates: "2023 - 2024",
      year: "2024",
      status: "Completed",
      location: "Toronto, Ontario, Canada",
      description: "Completed final year of secondary education in Canada, focusing on English and Mathematics to meet university entrance requirements and strengthen academic foundation.",
      relevantCourses: [
        "English Grade 11",
        "English Grade 12", 
        "Ontario Literacy Course (OLC)",
        "Mathematics Grade 11",
        "Mathematics Grade 12"
      ],
      achievements: [
        "Successfully completed OSSD requirements",
        "Strengthened English language proficiency",
        "Developed strong mathematical foundation",
        "Smooth transition to Canadian education system"
      ]
    },
    {
      id: 3,
      institution: "Ethiopian International School",
      degree: "International Secondary Education",
      dates: "2005 - 2021",
      year: "2021",
      status: "Completed",
      location: "Saudi Arabia",
      description: "Completed 14 years of comprehensive international education providing strong academic foundation in multiple subjects. Developed critical thinking skills and global perspective through diverse curriculum.",
      relevantCourses: [
        "Mathematics",
        "Science and Physics",
        "English Language",
        "Computer Studies",
        "Social Studies",
        "International Curriculum"
      ],
      achievements: [
        "14 years of consistent academic progress",
        "Strong foundation in mathematics and sciences",
        "Multilingual communication skills",
        "International educational perspective",
        "Leadership roles in school activities"
      ]
    }
  ];

  const certifications = [
    
    {
      name: "JavaScript ",
      issuer: "Coursera",
      date: "2025",
      status: "Completed"
    },
    {
      name: "HTML & CSS for Beginners",
      issuer: "Ethiopian International School",
      date: "2021",
      status: "Completed"
    }
  ];

  const skills = {
    technical: [
      "HTML5 & CSS",
      "JavaScript)",
      "React.js",
      "MySQL & MongoDB",
      "Express.js",
      "Python",  
      "Java",
      "Linux",
      "Node.js",
      "C# Programming",
      "Windows GUI",
      "Database Design",
      "Responsive Design"
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Time Management",
      "Critical Thinking",
      "Cross-Cultural Communication",
      "Continuous Learning",
      "Adaptability",
      "Multilingual Skills"
    ]
  };

  return (
    <div className="education-page">
      {/* Header Section */}
      <section className="education-header">
        <div className="container">
          <h1 className="education-title">Educational Background</h1>
          <p className="education-subtitle">
            My diverse academic journey from international education to Canadian technology studies
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="education-timeline">
        <div className="container">
          <h2 className="section-title">Academic Qualifications</h2>
          <div className="timeline">
            {educationData.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker">
                  <span className="year">{edu.year}</span>
                </div>
                <div className="timeline-content">
                  <div className="education-card">
                    <div className="card-header">
                      <h3 className="degree-title">{edu.degree}</h3>
                      <div className="institution-info">
                        <h4 className="institution">{edu.institution}</h4>
                        <span className="location">{edu.location}</span>
                      </div>
                      <div className="dates-status">
                        <span className="dates">{edu.dates}</span>
                        <span className={`status ${edu.status.toLowerCase().replace(' ', '-')}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-content">
                      <p className="description">{edu.description}</p>
                      
                      <div className="courses-section">
                        <h5>Relevant Coursework:</h5>
                        <ul className="courses-list">
                          {edu.relevantCourses.map((course, index) => (
                            <li key={index}>{course}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="achievements-section">
                        <h5>Key Achievements:</h5>
                        <ul className="achievements-list">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Journey Highlights */}
      <section className="journey-highlights">
        <div className="container">
          <h2 className="section-title">Educational Journey Highlights</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🌍</div>
              <h4>International Foundation</h4>
              <p>14 years of comprehensive international education providing global perspective and strong academic fundamentals</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">🇨🇦</div>
              <h4>Canadian Transition</h4>
              <p>Successfully completed OSSD requirements at Monsignor Fraser College, mastering English and Mathematics</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">💻</div>
              <h4>Technology Focus</h4>
              <p>Currently pursuing Software Engineering Technology at Centennial College with hands-on development experience</p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">🗣️</div>
              <h4>Multilingual</h4>
              <p>Strong communication skills across multiple languages and cultures, enhancing collaboration abilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications & Additional Learning</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-details">
                  <span className="cert-date">{cert.date}</span>
                  <span className={`cert-status ${cert.status.toLowerCase().replace(' ', '-')}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="skills-overview">
        <div className="container">
          <h2 className="section-title">Skills Developed Through Education</h2>
          <div className="skills-grid">
            <div className="skills-category">
              <h3>Technical Skills</h3>
              <div className="skills-tags">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="skill-tag technical">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-category">
              <h3>Soft Skills</h3>
              <div className="skills-tags">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="skill-tag soft">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="education-cta">
        <div className="container">
          <h2>Ready to Apply My Knowledge</h2>
          <p>My diverse educational background and multicultural experience make me well-equipped for collaborative development projects.</p>
          <a href="/contact" className="btn btn-primary">
            Let's Discuss Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}

export default Education;
