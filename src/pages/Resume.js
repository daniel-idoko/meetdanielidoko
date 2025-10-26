import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ResumeCard from "../components/resumeCard";

// Material Ui
const useStyles = makeStyles((theme) => {
  return {
    title: {
      paddingTop: "20px",
      paddingBottom: "3rem",
      textAlign: "center",

      [theme.breakpoints.down("xs")]: {
        fontSize: "1.4rem !important",
        paddingTop: "0px !important",
        paddingBottom: "2rem !important",
      },
    },
    resume: {
      display: "flex !important",
      flexDirection: "row",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    resumeItem: {
      padding: "0px 15px 15px 0px !important",

      [theme.breakpoints.down("sm")]: {
        padding: "0px 0px 0px 0px !important",
        marginTop: "1.2rem !important",
      },
    },
    subTitle: {
      marginBottom: "3rem!important",
      fontSize: "25px !important",
      color: "white",
      fontWeight: "200",
      textAlign: "left !important",

      [theme.breakpoints.down("sm")]: {
        marginBottom: "1.2rem !important",
      },
    },
  };
});

export default function ResumeComponent({ resumeRef }) {
  const classes = useStyles();

  const school = "Masters in Civil Law"
  const schoolPlace = "university of london"
  const work = "Fashion Design Expert"
  const workPlace = "Puma HQ Germany"

  return (
    <section className="section" id="resume" ref={resumeRef}>
      <Typography variant="h4" className={classes.title}>
        My <strong>Resume</strong>
      </Typography>

      <div className={classes.resume}>
        <div className={classes.resumeItem}>
          <Typography variant="h3" className={classes.subTitle}>
            Education
          </Typography>

          <ResumeCard item={school} place={schoolPlace}/>
          <ResumeCard item={school} place={schoolPlace}/>
          <ResumeCard item={school} place={schoolPlace}/>
        </div>
        <div className={classes.resumeItem}>
          <Typography variant="h3" className={classes.subTitle}>
            Experience
          </Typography>

          <ResumeCard item={work} place={workPlace}/>
          <ResumeCard item={work} place={workPlace}/>
          <ResumeCard item={work} place={workPlace}/>
        </div>
      </div>
    </section>
  );
}
