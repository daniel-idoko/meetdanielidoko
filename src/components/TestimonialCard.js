import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Avatar } from "@mui/material";
import SignalCellular4BarIcon from '@mui/icons-material/SignalCellular4Bar';

import "aos/dist/aos.css"

const useStyles = makeStyles((theme) => {
  return {
    title: {
      paddingTop: "20px",
      paddingBottom: "3rem",
      textAlign: "center",
      
    },

    avatar: {
      marginLeft: theme.spacing(2),

      [theme.breakpoints.down("xs")]: {
        display:'none !important'
      },
    },
    textSide: {
        marginLeft: '40px',
        padding: '30px',
        background: '#333',
        borderRadius: '7px',
        boxShadow: '0 2px 30px -2px rgb(0 0 0 / 10%)',
        margin: '0 0 1rem',

        [theme.breakpoints.down("xs")]: {
          margin: '0 !important',
          padding: '10px !important'
        },
    },
    card: {
        display: "flex",
        margin: '1.4rem 0.5rem'
    },
    text: {
        marginBottom: '1rem !important',
        color: 'rgba(255,255,255,.4)',
        lineHeight: '1.7 !important',
        fontSize: '16px !important',
        fontWeight: '300 !important',
        textAlign: 'left'
    },
    text2:{
        color: "#666",
        fontSize: "14px !important",
        textAlign: 'left'
    },
    quote: {
      color: "#333",
      transform: 'rotate(270deg)',
      position: 'absolute',
        top: '1.4rem',
        left: '1.2rem',

        [theme.breakpoints.down("xs")]: {
          display:'none !important'
        },
    },
    cardTextHolder: {
      position: 'relative',
    }
  };
});
export default function TestimonialCard({image}) {
  const classes = useStyles();

  return (
    <div className={classes.card} data-aos="fade-up" data-aos-once="true">
      <Avatar src={`/person${image}.webp`} className={classes.avatar} sx={{ width: 56, height: 56 }} />

      <div className={classes.cardTextHolder}>
        <SignalCellular4BarIcon className={classes.quote} />  
          <div className={classes.textSide}>
            <Typography variant="body1" className={classes.text}>
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.”
            </Typography>
            <Typography variant="body1" className={classes.text2}>
            — Ethan McCown, CEO XYZ Inc.
            </Typography>
          </div>
      </div>
    </div>
  );
}
