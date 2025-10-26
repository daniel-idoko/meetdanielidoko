import React, { useEffect } from "react";
import { Typography, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { Code, Server, ShieldCheck } from "lucide-react";

const useStyles = makeStyles((theme) => ({
  section: {
    background: "#2a2a2a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderLeft: "5px solid #bac964",
    borderRadius: "12px",
    padding: "3rem 2rem",
    marginBottom: "3rem",
    transition: "all 0.3s ease",
    position: "relative",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 0 20px rgba(186, 201, 100, 0.3)",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      borderLeft: "none",
      borderTop: "5px solid #bac964",
      padding: "2rem 1rem",
    },
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    background: "#bac964",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#222",
    marginBottom: "1.5rem",
    fontSize: "2rem",
    boxShadow: "0 0 10px rgba(186, 201, 100, 0.4)",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 1.5rem auto", // centers icon on small screens
    },
  },
  heading: {
    color: "#fff",
    fontSize: "1.8rem !important",
    fontWeight: 600,
    marginBottom: "1rem",
  },
  text: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "1rem",
    lineHeight: 1.7,
    marginBottom: "1rem",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  chip: {
    background: "#333 !important",
    color: "#bac964 !important",
    fontWeight: 500,
    border: "1px solid rgba(255,255,255,0.1)",
  },
}));

export default function ServiceDetails() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      {/* Web Development */}
      <div className={classes.section} data-aos="fade-up">
        <div className={classes.iconCircle}>
          <Code size={30} />
        </div>
        <Typography className={classes.heading}>Web Development</Typography>
        <Typography className={classes.text}>
          I design and build fast, secure, and scalable full-stack web
          applications. My workflow emphasizes performance, SEO, and clean,
          maintainable code, combining frontend beauty with backend power.
        </Typography>
        <Typography className={classes.text}>
          I specialize in building modern web apps using these technologies:
        </Typography>
        <div className={classes.chips}>
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js (Express)",
            "Golang (Gorilla Mux)",
            "MySQL",
            "MongoDB",
            "Firebase",
            "Docker",
          ].map((tool) => (
            <Chip key={tool} label={tool} className={classes.chip} />
          ))}
        </div>
      </div>

      {/* System & Network Administration */}
      <div className={classes.section} data-aos="fade-up">
        <div className={classes.iconCircle}>
          <Server size={30} />
        </div>
        <Typography className={classes.heading}>
          System & Network Administration
        </Typography>
        <Typography className={classes.text}>
          I manage and optimize systems to ensure high uptime, reliability, and
          network security. My work focuses on automation, monitoring, and
          preventive maintenance for smooth operations.
        </Typography>
        <Typography className={classes.text}>
          Key tools and technologies I work with include:
        </Typography>
        <div className={classes.chips}>
          {[
            "Linux (Ubuntu, Mint)",
            "Bash Scripting",
            "Docker",
            "Nginx / Apache",
            "SSH & Remote Management",
            "Firewall Configuration",
            "VPN Setup",
            "Network Troubleshooting",
            "Monitoring Tools (htop, netstat, ping, traceroute)",
          ].map((tool) => (
            <Chip key={tool} label={tool} className={classes.chip} />
          ))}
        </div>
      </div>

      {/* Ethical Hacking */}
      <div className={classes.section} data-aos="fade-up" style={{marginBottom: '0'}}>
        <div className={classes.iconCircle}>
          <ShieldCheck size={30} />
        </div>
        <Typography className={classes.heading}>Ethical Hacking</Typography>
        <Typography className={classes.text}>
          I perform penetration testing and vulnerability assessments to
          identify and mitigate potential security risks. My approach focuses on
          protecting systems through ethical, structured, and responsible
          hacking practices.
        </Typography>
        <Typography className={classes.text}>
          Tools and frameworks I use include:
        </Typography>
        <div className={classes.chips}>
          {[
            "Kali Linux",
            "Wireshark",
            "Metasploit",
            "Burp Suite",
            "Nmap",
            "Hydra",
            "OWASP Testing Guide",
            "Social Engineering Awareness",
          ].map((tool) => (
            <Chip key={tool} label={tool} className={classes.chip} />
          ))}
        </div>
      </div>
    </div>
  );
}
