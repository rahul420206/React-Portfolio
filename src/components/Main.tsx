import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatar from '../assets/images/circle.png'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rahul420206" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rahul-matta-a42585200/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rahul Matta</h1>
          <p>Passionate Full Stack Developer</p>

          {/* --- Action Buttons Added Below --- */}
<div className="action-buttons">
  <button
    className="btn btn-primary"
    onClick={() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Contact section not found");
      }
    }}
  >
    Contact Info
  </button>

  <a
    href="https://drive.google.com/file/d/1ytg8Qm2kMZ2_iNlhw0-3m_Po19yupGB5/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-secondary"
    onClick={(e) => {
      e.preventDefault();
      // Open in new tab
      window.open(
        "https://drive.google.com/file/d/1ytg8Qm2kMZ2_iNlhw0-3m_Po19yupGB5/view?usp=sharing",
        "_blank"
      );

      // Trigger download in background
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=1ytg8Qm2kMZ2_iNlhw0-3m_Po19yupGB5";
      link.download = "Rahul_Matta_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
  >
    Download Resume
  </a>
</div>



<div className="mobile_social_icons">
  <a href="https://github.com/rahul420206" target="_blank" rel="noreferrer">
    <GitHubIcon style={{ fontSize: "2.2rem" }} />
  </a>
  <a href="https://www.linkedin.com/in/rahul-matta-a42585200/" target="_blank" rel="noreferrer">
    <LinkedInIcon style={{ fontSize: "2.2rem" }} />
  </a>
</div>

        </div>
      </div>
    </div>
  );
}

export default Main;