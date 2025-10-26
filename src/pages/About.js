import { makeStyles } from "@mui/styles";
import { Grid, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PhoneIcon from "@mui/icons-material/Phone";

import Aos from "aos";
import "aos/dist/aos.css"
import { GitHub } from "@mui/icons-material";

const useStyles = makeStyles((theme) => {
    return {
      title: {
        paddingTop: "20px",
        paddingBottom: "3rem",
        textAlign: "center",
      },
      aboutImg: {
        width: "100%",
        borderRadius: '12px',

        [theme.breakpoints.down("md")]: {
          width: "70%",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100% !important",
        },
      },
      aboutGrid: {
        alignItems: "center !important",

        [theme.breakpoints.down("md")]: {
          width: "80% !important",
          margin: "0 auto !important"
        },
        [theme.breakpoints.down("sm")]: {
          width: "90% !important",
        },
      },
  
      aboutMe: {
        paddingBottom: "3rem",

        [theme.breakpoints.down("lg")]: {
          padding: '0.3rem !important',
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.4rem !important",
        },
      },
      aboutTextHolder: {
        paddingLeft: "3rem !important",
        textAlign: "left !important",
       
        [theme.breakpoints.down("lg")]: {
          paddingLeft: "1rem !important",
          maxWidth: "50% !important",
        },
        [theme.breakpoints.down("md")]: {
          padding: '0 !important',
          maxWidth: "100% !important",
        },
        
      },
      aboutImgHolder: {
        width: "100% !important",
        paddingRight: "3rem !important",

        
        [theme.breakpoints.down("lg")]: {
          paddingLeft: "1.5rem !important",
          width: "150%"
        },
        [theme.breakpoints.down("md")]: {
          padding: '0 !important',
          marginBottom: "2rem !important",
        },

      },
      firstP: {
        fontWeight: '200 !important',
        lineHeight: '1.9 !important',
        fontSize: '1.25rem !important',
        marginBottom: '1rem !important',
        color: 'rgba(255, 255, 255, 0.66)',
      },
      secondP: {
        fontWeight: '200 !important',
        lineHeight: '1.5 !important',
        fontSize: '0.95rem !important',
        marginBottom: '1rem !important',
        color: 'rgba(255,255,255,.66)',

        [theme.breakpoints.down("lg")]: {
          marginBottom: '0.5rem !important',
        },
      },
      btn: {
        margin: "0.2rem !important",
        letterSpacing: '1px !important',
        cursor: "pointer !important"
      },
      btnLink: {
        textDecoration: 'none !important',
        cursor: "pointer !important"

      }
    };
  });

export default function AboutComponent({ aboutRef }){
    const classes = useStyles();

    return(
        <section className="section" id='about' ref={aboutRef}>
          <Grid container className={classes.aboutGrid} data-aos="fade-up" data-aos-once="true">
            <Grid item md={6} className={classes.aboutImgHolder}>
              <img src="/images/about-me.jpg" alt="me" className={classes.aboutImg} />
            </Grid>

            <Grid item md={6} className={classes.aboutTextHolder}>
              <Typography variant="h4" className={classes.aboutMe}>
                About <strong>Me</strong>
              </Typography>

              <div>
                  <Typography variant="body1" className={classes.firstP}>
                      I'm Daniel Idoko, a Website Developer and Ethical Hacker based in Abuja, Nigeria. I've been working in IT since 2021.
                  </Typography>

                  <Typography variant="body2"  className={classes.secondP}>
                      My expertise blends full-stack development with system and network administration, ensuring every solution is highly performant and resilient against modern security threats.
                  </Typography>

                  <Typography variant="body2" style={{marginBottom: '2rem'}} className={classes.secondP}>
                      Beyond the code, I drive optimization through infrastructure-as-code, automation, and advanced cybersecurity, continually refining the systems that power the digital world.
                  </Typography>

                <a href="#contact" className={classes.btnLink}>
                  <Button variant="outlined" startIcon={<PhoneIcon />} className={classes.btn}>
                      Hire Me
                  </Button>
                </a>
                <a href="https://github.com/doe-base" target="_blank" className={classes.btnLink}>
                  <Button variant="contained" color="secondary" endIcon={<GitHub />} className={classes.btn}>
                      Github
                  </Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </section>
    )
}