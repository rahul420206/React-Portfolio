import React, { useEffect, useRef } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const elements = timelineRef.current.querySelectorAll('.vertical-timeline-element');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // Apply highlight animation when element is in view
            element.classList.add('highlight');
          } else {
            // Remove highlight animation when element is out of view
            element.classList.remove('highlight');
          }
        });
      },
      {
        threshold: [0.5], // Trigger when 50% of the element is visible
        rootMargin: '250px', // Extend observation area for earlier triggering
      }
    );

    elements.forEach((element: Element) => observer.observe(element));

    return () => {
      elements.forEach((element: Element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div id="history" ref={timelineRef}>
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          {/* Codetru Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2025 – Present"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Codetru, Hyderabad</h4>
            <p>
              Contributing to front-end development and production support for enterprise platforms 
              using React, TypeScript, Redux, and MUI. Worked on Surf (US Payroll) and Japfu (Workforce Management),
              improving UI responsiveness, API integrations, and debugging performance issues in an Agile setup.
            </p>
          </VerticalTimelineElement>

          {/* Adiquity Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 – Nov 2024"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Adiquity Technologies</h4>
            <p>
              Developed and optimized backend APIs using Flask and Laravel, reducing response time by 25%.
              Conducted automation and regression testing, identified critical bugs, and collaborated on feature
              scalability, code reviews, and security improvements.
            </p>
          </VerticalTimelineElement>

          {/* Education Section */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2020 – May 2024"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science & Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Institute of Technology (NIT), Andhra Pradesh
            </h4>
            <p>
              Completed B.Tech. in Computer Science Engineering with strong foundations in Data Structures, Algorithms,
              Machine Learning, and Full Stack Development. Involved in multiple projects integrating modern web and AI technologies.
            </p>
          </VerticalTimelineElement>

          {/* RGUKT Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 – 2020"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Pre-University Course (PUC) in MPC</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rajiv Gandhi University of Knowledge Technologies (RGUKT)
            </h4>
            <p>
              Completed PUC focusing on Mathematics, Physics, and Chemistry. 
              Built strong analytical and logical reasoning foundations that supported further technical learning.
            </p>
          </VerticalTimelineElement>

          {/* St. Johns High School */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 – 2018"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Class X</h3>
            <h4 className="vertical-timeline-element-subtitle">St. Johns High School</h4>
            <p>
              Achieved a GPA of 10/10. Demonstrated consistent academic excellence and strong aptitude for problem-solving and logical thinking.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;