import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import PorfolioComponent from "../pages/Porfolio";
import ResumeComponent from "../pages/Resume";
import AboutComponent from "../pages/About";
import ServiceComponent from "../pages/Services";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import NavBar from "./NavBar";
import Home from "@mui/icons-material/Home";

import Aos from "aos";
import "aos/dist/aos.css"
import WorkShowcase from "../pages/MyWork";

// Material Ui
const useStyles = makeStyles((theme) => {
  return {
    // Real Work
    h1Span: {
      letterSpacing: "0.2rem",
      fontWeight: "200 !important",
      color: "#fff",
      fontSize: "70px !important",
      marginBottom: "20px !important",
      display: "block",
      [theme.breakpoints.down("md")]: {
        fontWeight: "200 !important",
        color: "#fff !important",
        marginBottom: "20px !important",
        fontSize: "2.5rem !important",
      },
    },
    pprofession: {
      letterSpacing: "0.2rem",
      color: "#bac964 !important",
      display: "block",
      fontWeight: "900 !important",
      lineHeight: 1.7,
      fontSize: '1.23rem !important',
      [theme.breakpoints.down("md")]: {
        fontSize: '1.1rem !important',
        fontWeight: "200",
      },
    },
    footer: {
      width: "100%",
      margin: "0 auto !important",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    socialIcons: {
      width: '100%',
      display: "flex",
      justifyContent: 'space-evenly',
      flexWrap: "wrap",
      margin: "2rem auto",
      position: "absolute",
      bottom: '1rem',
    },
    socialIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "60px",
      height: "60px",
      // background: "#333",
      position: "relative",
      borderRadius: "50%",
      fontSize: "26px",
      margin: "5px 10px",
      color: "#bac964 !important",
      cursor: "pointer",

      [theme.breakpoints.down("sm")]: {
        margin: "0px 5px",
      },
    },
    a: {
      color: "#bac964 !important",
    },
    home: {
      color: "#bac964 !important",
      // background: "#333",
      // padding: "0.5rem !important",
      display: (isFixed) => {
        if (isFixed) {
          return "inline-block";
        } else {
          return "none";
        }
      },
      // borderRadius: "2rem !important",
      position: "fixed",
      bottom: "2rem !important",
      right: "2rem !important",
      cursor: "pointer",
      zIndex: "999999999",

      [theme.breakpoints.down("sm")]: {
        bottom: "1rem !important",
        right: "1rem !important",
      },
    },
  };
});

export default function Layout({ children }) {
  const [isFixed, setIsFixed] = useState(false);
  const [isActive, setIsActive] = useState(1);


  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setIsFixed(scroll > 300);

      const homeTop = homeRef.current?.offsetTop ?? 0;
      const aboutTop = aboutRef.current?.offsetTop ?? 0;
      const servicesTop = servicesRef.current?.offsetTop ?? 0;
      const portfolioTop = portfolioRef.current?.offsetTop ?? 0;
      const contactTop = contactRef.current?.offsetTop ?? 0;
      const footerTop = footerRef.current?.offsetTop ?? 0;

      if (scroll >= footerTop - 200) setIsActive(6);
      else if (scroll >= contactTop - 200) setIsActive(5);
      else if (scroll >= portfolioTop - 200) setIsActive(4);
      else if (scroll >= servicesTop - 200) setIsActive(3);
      else if (scroll >= aboutTop - 200) setIsActive(2);
      else setIsActive(1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  function backTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(()=>{
    Aos.init({ duration: 500})
  }, [])

  const classes = useStyles(isFixed);




  return (
    <main>
      <section ref={homeRef} id="home">
        <section id="hero-section" style={{ backgroundImage: "", }}>
          <div className="hero-overlay">
            <NavBar isActive={isActive} />
            <div className="hero-content">
              <Grid container className="hero-text-holder" data-aos="fade-up">
                <Grid item xs={11}>
                  <Typography variant="h1" className={classes.h1Span} >
                    <span>Hello, I'm</span> <br />
                    <strong>Daniel Idoko</strong>
                  </Typography>
                      <Typography variant="body1" color="primary" className={classes.pprofession}>
                        <span style={{color: "#ccc"}}>I specialize in{" "}</span> 
                        <TypeAnimation
                          sequence={[
                            'building user-friendly web applications.',
                            2000,
                            '',
                            'securing network infrastructure.',
                            2000,
                            '',
                            'proactive testing against security threats.',
                            2000,
                            '',
                          ]}
                          wrapper="span"
                          speed={55}
                          repeat={Infinity}
                        />
                      </Typography>

                </Grid>
              </Grid>
            </div>


          </div>
          <div className="fade-bottom">
              <div className={classes.socialIcons}>
                <a href="https://github.com/doe-base" target="_blank">
                  <div className={classes.socialIcon}>
                    <i className="fa fa-github"></i>
                  </div>
                </a>
                  <a href="https://x.com/Daniel_Idoko_go" target="_blank">
                    <div className={classes.socialIcon}>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/daniel-idoko-4555b6225/" target="_blank">
                    <div className={classes.socialIcon}>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                  </a>
                  <a href="https://medium.com/@idokoidogwu" target="_blank">
                    <div className={classes.socialIcon}>
                      <i className="fa fa-medium" aria-hidden="true"></i>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/daniel__idoko" target="_blank">
                    <div className={classes.socialIcon} >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                  </a>
                  
              </div>
          </div>
        </section>
      </section>

      {/* Back to Top */}
      <div className={classes.home} onClick={() => backTop()}>
        <Home fontSize="large" />
      </div>

      {/* Main Section of all page content */}
      <section id="page-content">
        <AboutComponent aboutRef={aboutRef}/>

        <ServiceComponent servicesRef={servicesRef}/>

        <WorkShowcase portfolioRef={portfolioRef}/>

        <Contact contactRef={contactRef}/>

        <section className="section" ref={footerRef}>
          <div className={classes.footer}>
            <Typography variant="body1">
              © {new Date().getFullYear()} All rights reserved. Built with ❤️ by{" "}
              <a
                href="https://twitter.com/IG73975370"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.a}
              >
                Daniel
              </a>
            </Typography>
          </div>
        </section>
      </section>
    </main>
  );
}
