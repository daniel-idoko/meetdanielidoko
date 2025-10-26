import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import ServiceDetails from "../components/serviceDetails";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: "20px",
    paddingBottom: "3rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4rem !important",
      paddingTop: "0px !important",
      paddingBottom: "0rem !important",
    },
  },
}));

export default function ServiceComponent({ servicesRef }) {
  const classes = useStyles();

  return (
    <section
      className="section"
      id="services"
      ref={servicesRef}
      // style={{ marginBottom: 0, paddingBottom: 0 }}
    >
      <Typography variant="h4" className={classes.title}>
        My <strong>Services</strong>
      </Typography>

      <ServiceDetails />
    </section>
  );
}
