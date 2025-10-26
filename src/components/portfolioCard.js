import React, {useEffect} from 'react';
import { makeStyles } from '@mui/styles';
import {
    
  } from "@mui/material"
  
  import "aos/dist/aos.css"
  

const useStyles = makeStyles((theme) => {
    return {
      card: {
        width: '100%',
        cursor: 'pointer',
      },
      cardImage: {
        width: '100%',
        height: '20rem',
        objectFit: "cover",

        [theme.breakpoints.down("lg")]: {
          height: '18rem',
        },


      },
      
      cardH5: {
        fontSize: "20px",
        fontWeight: 200,
        color: "white",
        marginBottom: '0.5rem',
        fontFamily: "inherit"
      },
      cardP: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#ccc',
      },


      animatedItem: {
        animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
      },
      animatedItemExiting: {
        animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: "translateY(-200%)"
      },
      "@keyframes myEffect": {
        "0%": {
          opacity: 0,
          transform: "scale(0)",
        },
        "100%": {
          opacity: 1,
          transform: "scale(1)"
          
        }
      },
      "@keyframes myEffectExit": {
        "0%": {
          opacity: 1,
          transform: "translateY(0)"
        },
        "100%": {
          opacity: 0,
          transform: "translateY(-200%)"
        }
      },
    };
  });
  
  

export default function Porfolio({item}){

    const classes = useStyles()


    return(
     <a>
        <div layout data-aos="fade-up" data-aos-once="true" className={classes.card}>
          <img src={item.img} alt="design" className={classes.cardImage}/>
          <h5 className={classes.cardH5}>{item.name}</h5>
          <p className={classes.cardP}>{item.category}</p>
        </div> 
     </a>
    )
}