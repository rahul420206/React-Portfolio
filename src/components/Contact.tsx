import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import '../assets/styles/Contact.scss'; // Assuming you still want your base styles

// Styled Card for hover effects
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10], // Stronger shadow on hover
  },
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  padding: theme.spacing(3),
  height: '100%', // Ensure cards in a row have equal height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// Background image for the section
const contactBg = 'https://images.unsplash.com/photo-1488998427799-e3362cec8fce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // A clean desk/workspace image

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        position: 'relative',
      
        px: 2, // Padding left and right
        textAlign: 'center',
        color: 'white', // Ensure text is readable on the background
        overflow: 'hidden', // Hide any overflow from background
        '&::before': { // Overlay for the background image
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
          filter: 'brightness(0.4) grayscale(0.2)', // Darken and slightly desaturate for text readability
          zIndex: -1, // Behind content
        },
      }}
    >
      <Box className="items-container" sx={{ maxWidth: 1200, mx: 'auto', zIndex: 1, position: 'relative' }}>
        <Typography variant="h6" component="p" sx={{ opacity: 0.8, mb: 1 }}>
          Get in Touch
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
          Let's Connect and Build Together
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Email Card */}
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard raised sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', color: 'text.primary' }}>
              <CardContent>
                <EmailOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                  Email Me
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Send me a direct message for inquiries or collaborations.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EmailOutlinedIcon />}
                  href="mailto:420206@student.nitandhra.ac.in"
                  sx={{ mt: 'auto' }} // Push button to bottom if card content varies
                >
                  Say Hello
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* LinkedIn Card */}
          <Grid item xs={12} sm={6} md={4}>
            <StyledCard raised sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', color: 'text.primary' }}>
              <CardContent>
                <LinkedInIcon sx={{ fontSize: 60, color: '#0A66C2', mb: 2 }} /> {/* LinkedIn blue */}
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                  Connect on LinkedIn
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Let's expand our professional network and share insights.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 'auto',
                    bgcolor: '#0A66C2', // LinkedIn blue
                    '&:hover': {
                      bgcolor: '#084C9C', // Darker LinkedIn blue on hover
                    },
                  }}
                  startIcon={<LinkedInIcon />}
                  href="https://www.linkedin.com/in/rahul-matta-a42585200/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
          
          {/* Optional: Add a third card if you have another contact method, e.g., GitHub, Portfolio link */}
           <Grid item xs={12} sm={6} md={4}>
            <StyledCard raised sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', color: 'text.primary' }}>
              <CardContent>
                <img src="https://img.icons8.com/ios-filled/60/000000/github.png" alt="GitHub" style={{ marginBottom: '16px' }} />
                <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 600 }}>
                  Explore My Projects
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Check out my latest code and contributions on GitHub.
                </Typography>
                <Button
                  variant="outlined"
                  color="secondary" // Or any color from your theme
                  startIcon={<img src="https://img.icons8.com/sf-ultralight/24/000000/github.png" alt="GitHub icon"  />}
                  href="https://github.com/rahul420206" // Replace with your GitHub link
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 'auto' }}
                >
                  GitHub
                </Button>
              </CardContent>
            </StyledCard>
          </Grid> 

        </Grid>
      </Box>
    </Box>
  );
}

export default Contact;