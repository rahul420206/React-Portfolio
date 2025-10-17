import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFrontend = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Redux",
  "MUI",
  "Bootstrap",
  "Responsive UI"
];

const labelsBackend = [
  "Flask",
  "Django",
  "Spring Boot",
  "Laravel",
  "Node.js",
  "Express.js",
  "REST APIs",
  "OAuth 2.0",
  "MySQL",
  "MongoDB"
];

const labelsTools = [
  "AWS",
  "Git",
  "GitHub",
  "JIRA",
  "Selenium",
  "UiPath",
  "Automation Testing",
  "Agile",
  "Photoshop",
  "MS Office"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>My Skills</h1>

        <div className="skills-grid">

          {/* Full Stack Web Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              Experienced in building scalable full-stack applications using React, TypeScript,
              Flask, and Laravel. Worked on enterprise platforms for payroll and workforce
              management, focusing on UI optimization, API integration, and authentication
              (OAuth 2.0) with Google and Microsoft.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFrontend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Backend & Automation */}
          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Backend & Automation</h3>
            <p>
              Skilled in developing and optimizing RESTful APIs with Flask, Django, and Spring Boot.
              Experienced in automation testing using Selenium and UiPath, and familiar with
              CI/CD, Agile methodologies, and deployment on AWS Cloud.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsBackend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Tools, Cloud & Collaboration */}
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Tools, Cloud & Collaboration</h3>
            <p>
              Proficient with cloud platforms, version control, and productivity tools.
              Experienced working in cross-functional Agile teams, contributing to production
              support, debugging, and performance optimization.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsTools.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
