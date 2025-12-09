import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; // Cool icon for the button
import '../assets/styles/Main.scss';
import avatar from '../assets/images/circle.png'

function Main() {

  return (
    <>
      {/* ================= MEGA PORTFOLIO BANNER START ================= */}
      <style>
        {`
          /* Animation for the "NEW" Badge */
          @keyframes pulse-red {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 82, 82, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 82, 82, 0); }
          }

          .mega-banner {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d); /* Eye-catching gradient */
            background-size: 200% 200%;
            animation: gradient-move 5s ease infinite;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999;
            padding: 20px 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }

          /* Content Layout */
          .banner-content {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          /* The "NEW" Badge */
          .new-badge {
            background: #ff5252;
            color: white;
            font-weight: 800;
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 14px;
            letter-spacing: 1px;
            animation: pulse-red 2s infinite;
            white-space: nowrap;
          }

          /* Text Section */
          .banner-text-group {
            display: flex;
            flex-direction: column;
            text-align: left;
          }

          .banner-headline {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.2;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          
          .banner-subtext {
            font-size: 15px;
            opacity: 0.9;
            margin-top: 4px;
            font-weight: 300;
          }

          /* The Big CTA Button */
          .banner-cta {
            background: white;
            color: #1a2a6c;
            padding: 12px 35px;
            border-radius: 50px;
            font-weight: 800;
            font-size: 16px;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            white-space: nowrap;
          }

          .banner-cta:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(255,255,255,0.3);
            background: #f8f9fa;
          }

          /* Responsive Design for Mobile */
          @media (max-width: 768px) {
            .mega-banner {
              flex-direction: column;
              text-align: center;
              padding: 25px 15px;
              gap: 15px;
            }
            .banner-content {
              flex-direction: column;
              gap: 10px;
            }
            .banner-text-group {
              text-align: center;
              align-items: center;
            }
            .banner-headline { font-size: 20px; }
            .new-badge { display: inline-block; }
          }

          /* Push the rest of the site down so banner doesn't cover it */
          .container {
            margin-top: 140px !important; /* Adjusted for bigger banner */
            transition: margin-top 0.3s ease;
          }
          @media (max-width: 768px) {
            .container { margin-top: 220px !important; }
          }
        `}
      </style>

      <div className="mega-banner">
        <div className="banner-content">
          <span className="new-badge">NEW LAUNCH</span>
          <div className="banner-text-group">
            <span className="banner-headline">Visit my new 3D Immersive Portfolio!</span>
            <span className="banner-subtext">Experience warp speed, interactive asteroids & more.</span>
          </div>
        </div>
        
        <a 
          href="https://rahul-nitap-portfolio.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="banner-cta"
        >
          VISIT NOW <RocketLaunchIcon />
        </a>
      </div>
      {/* ================= MEGA PORTFOLIO BANNER END ================= */}

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

            {/* --- Action Buttons --- */}
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
    </>
  );
}

export default Main;