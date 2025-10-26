import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Menu from "@mui/icons-material/Menu";



const useStyles = makeStyles((theme) => {
  return {
    nav: {
      width: "100% !important",
      maxWidth: "1140px",
      margin: "0 auto !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "2rem",
      textAlign: "center",

      [theme.breakpoints.down("md")]: {
        display: 'none !important',
      },
    },
    fixedNav: {
      position: "fixed",
      top: "0 !important",
      left: "0 !important",
      background: "#fff",
      width: "100% !important",
      height: "53.8px !important",
      margin: "0 auto !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      zIndex: "1000",
      animation: `$myEffect 500ms ${theme.transitions.easing.easeInOut} !important`,

      [theme.breakpoints.down("md")]: {
        display: 'none !important',
      },
    },
    link: {
      fontSize: "16px",
      fontWeight: "500",
      position: "relative",
      textTransform: "uppercase",
      padding: "15px 20px !important",
      display: "block",
      textDecoration: "none",
      letterSpacing: "2px",
      cursor: "pointer !important",

      color: ({isFixed}) => {
        if (isFixed) {
          return "#000";
        } else {
          return "#fff";
        }
      },
    },

    "@keyframes myEffect": {
      from: {
        opacity: 0,
        transform: "translateY(-100%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
    },

    smallNav: {
        display: 'none !important',

      [theme.breakpoints.down("md")]: {
        display: 'block !important',
        background: '#fff',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1000',
        height: 'auto',
        padding: '0.5rem 1rem !important',
        overflow: 'hidden',
        transition: 'all 0.5s ease-in-out',
      },
      menu: {
        color: '#fff !important',
      }
    },
    smallNavList: {
        color: '#000 !important',
        transition: 'all 0.5s ease-in-out',
        height: ({isNavOpen}) =>{
            if(isNavOpen){
              return '300px'
            }else{
              return '0px'
            }
        }
    },
    smallLink: {
      fontSize: "16px",
      fontWeight: "500",
      position: "relative",
      textTransform: "uppercase",
      padding: "15px 20px !important",
      display: "block",
      textDecoration: "none",
      letterSpacing: "2px",
      cursor: "pointer !important",
      color: "#000",

      "&:hover": {
        color: "#bac964"
      }
    }
  };
});

export default function NavBar({isActive}) {
  const [isFixed, setIsFixed] = useState(false);

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    if (scroll > 400) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  const [isNavOpen, setIsNavOpen] = useState(false)

  const classes = useStyles({isFixed, isNavOpen});

  return (
    <>
      <nav className={!isFixed ? classes.nav : classes.fixedNav}>
        <a
          href="#home"
          className={classes.link}
          style={isFixed && isActive === 1 ? { color: "#bac964" } : null}
        >
          Home
        </a>
        <a
          href="#about"
          className={classes.link}
          style={isFixed && isActive === 2 ? { color: "#bac964" } : null}
        >
          About
        </a>
        <a
          href="#services"
          className={classes.link}
          style={isFixed && isActive === 3 ? { color: "#bac964" } : null}
        >
          Services
        </a>
          <a
            href="#portfolio"
            className={classes.link}
            style={isFixed && isActive === 4 ? { color: "#bac964" } : null}
          >
            Portfolio
          </a>
        <a
          href="#contact"
          className={classes.link}
          style={isFixed && isActive === 5 ? { color: "#bac964" } : null}
        >
          Contact
        </a>
      </nav>

      <div className={classes.smallNav}>
        <div>
          { isNavOpen ? <i className="fa fa-times" aria-hidden="true" onClick={()=> setIsNavOpen(!isNavOpen)}></i> : <i className="fa fa-bars" aria-hidden="true" onClick={()=> setIsNavOpen(!isNavOpen)}></i> }
        </div>
        
          <nav className={classes.smallNavList}>
            <a
              href="#home"
              className={classes.smallLink}
              onClick={()=> setIsNavOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className={classes.smallLink}
              onClick={()=> setIsNavOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className={classes.smallLink}
              onClick={()=> setIsNavOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={classes.smallLink}
              onClick={()=> setIsNavOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={classes.smallLink}
              onClick={()=> setIsNavOpen(false)}
            >
              Contact
            </a>
          </nav>
      </div>
    </>
  );
}
