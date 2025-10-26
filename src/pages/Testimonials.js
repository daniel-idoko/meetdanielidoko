import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid } from "@mui/material";
import TestimonialCard from "../components/TestimonialCard";

const useStyles = makeStyles((theme) =>{
    return{
        title: {
            paddingTop: "20px",
            paddingBottom: "3rem",
            textAlign: "center",

            [theme.breakpoints.down("xs")]: {
                fontSize: "1.4rem !important",
                paddingTop: "0px !important",
                paddingBottom: "0rem !important",
              },
          }
    }
}) 
export default function Testimonials(){
    const classes = useStyles()

    const image1 = 1
    const image2 = 2
    const image3 = 3
    const image4 = 4

    return(
        <section className="section">
            <Typography variant="h4" className={classes.title}>
                Clinets <strong>Testimonials</strong>
              </Typography>

                <Grid container>
                    <Grid item md={6}><TestimonialCard image={image1}/></Grid>
                    <Grid item md={6}><TestimonialCard image={image2}/></Grid>
                    <Grid item md={6}><TestimonialCard image={image3}/></Grid>
                    <Grid item md={6}><TestimonialCard image={image4}/></Grid>
                </Grid>

        </section>
    )
}