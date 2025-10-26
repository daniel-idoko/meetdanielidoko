import { Typography, Button, Grid } from "@mui/material";
import React, {useEffect} from "react";
import { makeStyles } from "@mui/styles";


import Aos from "aos";
import "aos/dist/aos.css"

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            background: '#333',
            padding: '30px',
            textAlign: 'center !important',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '16px 16px',
            borderRadius: '7px',

            [theme.breakpoints.down("lg")]: {
                padding: '10px !important',
              },
            
        },
        svg: {
            color: '#000',
            fontSize: '1rem',
            background: "#bac964 !important",
            padding: '2rem',
            borderRadius: '50%',
            display: 'block',
            marginBottom: '50px !important',
            width: '100px !important',
            height: '100px !important',
            position: 'relative',
            margin: '0 auto 30px auto !important',


            [theme.breakpoints.down("lg")]: {
                width: '50px !important',
                height: '50px !important',
                marginBottom: '25px !important',
                padding: '1rem',
              },

        },
        icon: {
            width: '100%',
        },
        mainText: {
            fontSize: '20px !important',
            fontWeight: '200',
            marginBottom: '1.5rem !important',
        },
        textP:{
            marginBottom: '1rem !important',
            color: 'rgba(255,255,255,.66)',
            lineHeight: '1.7',
            fontSize: '16px',
            fontWeight: '300',
        },
        btn: {
            color: "#bac964 !important",
            marginBottom: '0.5rem !important', 
        },
        flexHolder: {  

            [theme.breakpoints.down("lg")]: {
                width: '85% !important',
                margin: '0 auto !important'
              },
            [theme.breakpoints.down("sm")]: {
                width: '98% !important',
              },
        }
    }
})

export default function ServiceCard(){

    const classes = useStyles()
    const projectWebsite = process.env.REACT_APP_PROJECT_WEBSITE;

    return(
        <Grid container className={classes.flexHolder}>

            {/* Web Development */}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className={classes.card} data-aos="fade-up" data-aos-once="true">
                <div className={classes.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <Typography variant="h5" className={classes.mainText}>Web Development</Typography>
                <Typography variant="body1" className={classes.textP}>
                    I build fast, secure, and user-friendly full-stack web applications designed for performance and scalability. From clean frontend interfaces to efficient backend systems, I focus on delivering seamless digital experiences.
                </Typography>
                        <Button href={projectWebsite} className={classes.btn}>Learn More</Button>
                </div>
            </Grid>

            {/* System/Network Administration */}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className={classes.card} data-aos="fade-up" data-aos-once="true">
                <div className={classes.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                    </svg>
                </div>
                <Typography variant="h5" className={classes.mainText}>System & Network Administration</Typography>
                <Typography variant="body1" className={classes.textP}>
                    I configure, monitor, and automate systems and networks to ensure high availability, security, and efficiency. My work focuses on maintaining stable infrastructure and preventing downtime through proactive management.
                </Typography>
                        <Button href={projectWebsite} className={classes.btn}>Learn More</Button>
                </div>
            </Grid>

            {/* Ethical Hacking */}
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <div className={classes.card} data-aos="fade-up" data-aos-once="true">
                <div className={classes.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                </div>
                <Typography variant="h5" className={classes.mainText}>Ethical Hacking</Typography>
                <Typography variant="body1" className={classes.textP}>
                    I conduct security assessments and vulnerability testing to identify and fix potential risks before they’re exploited. My goal is to help organizations strengthen their systems through ethical and responsible cybersecurity practices.
                </Typography>
                        <Button href={projectWebsite} className={classes.btn}>Learn More</Button>
                </div>
            </Grid>

        </Grid>

    )
} 