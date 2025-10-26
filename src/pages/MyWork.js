import { Typography, Box, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function WorkIntro({ portfolioRef }) {
    const projectWebsite = process.env.REACT_APP_PROJECT_WEBSITE;

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
      }}
      className="section mywork-responsive-tb-margin"
      id="portfolio"
      ref={portfolioRef}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "#ff5533",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        Explore My Work
      </Typography>

      <Typography
        variant="h1"
        sx={{
          color: "#ff5533",
          fontWeight: 900,
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
          lineHeight: 1.05,
          textAlign: "left"
        }}
      >
        Every Project
      </Typography>

      <Typography
        variant="h1"
        sx={{
          color: "#ff5533",
          fontWeight: 900,
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
          mb: 4,
          textAlign: "left"
        }}
      >
        Blends Functionality & Security
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "rgba(255,255,255,0.85)",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          maxWidth: 750,
          lineHeight: 1.8,
          mb: 4,
        }}
      >
        My projects, blogs, and documentation explore how modern web development,
        system administration, and cybersecurity intersect, showcasing creativity,
        reliability, and precision in every build.
      </Typography>

      {/* Arrow + Button Row */}
<Box
  sx={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  }}
>
  {/* Arrow pointing toward button */}
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: 0,
      width: "75%", // slightly shorter
      transform: "translateY(-50%)",
      zIndex: 1,
      "@media (max-width:780px)": {
        display: "none", // hide on small screens
      },
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="24"
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="12"
        x2="97"
        y2="12"
        stroke="#ff5533"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <polygon points="97,6 100,12 97,18" fill="#ff5533" />
    </svg>
  </Box>

  {/* Button aligned to the right until arrow disappears */}
  <Box
    sx={{
      ml: "auto",
      zIndex: 2,
      width: { xs: "80%", sm: "60%", md: "25%" },
      display: "flex",
      justifyContent: "flex-end",
      "@media (max-width:780px)": {
        justifyContent: "flex-start",
        ml: 0,
      },
    }}
  >
    <Button
      variant="contained"
      href={projectWebsite}
      sx={{
        backgroundColor: "#bac964",
        color: "#000",
        fontWeight: 700,
        borderRadius: "50px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        textDecoration: "underline !important",
        mb: "0.3rem",
        "&:hover": { backgroundColor: "#ff0" },
      }}
    >
      View My Projects
    </Button>
  </Box>
</Box>








      {/* Animations */}
      <style>{`
        @keyframes arrowMove {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        @keyframes slideLine {
          0%, 100% { width: 60px; opacity: 0.7; }
          50% { width: 75px; opacity: 1; }
        }
      `}</style>

    </section>
  );
}
