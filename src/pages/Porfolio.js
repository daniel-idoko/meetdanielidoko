import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button } from "@mui/material";
import Porfolio from "../components/portfolioCard";
import porfolioJsonData from "../data/porfolioData.json";
import { SRLWrapper } from "simple-react-lightbox";


// Creating and Array of porfolio category
const porfolioSet = new Set();
porfolioSet.add("all");
porfolioJsonData.map((item) => porfolioSet.add(item.category));
const porfolioArr = [...porfolioSet];

// Material Ui
const useStyles = makeStyles((theme) => {
  return {
    title: {
      paddingTop: "20px",
      paddingBottom: "3rem",
      textAlign: "center",


      [theme.breakpoints.down("xs")]: {
        fontSize: "1.4rem !important",
      },
    },
    button: {
      margin: "0 0.2rem !important",
      fontWeight: "100 !important",
      
      [theme.breakpoints.down("sm")]: {
        margin: "0 0rem !important",

        minWidth: "0rem !important",
      },
    },
    cardGrid: {
      paddingTop: "2rem",
      display: "grid !important",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.2rem",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
        gap: "0.8rem",
      },
    },
    filterBtnContainer: {
      width: "100%",
    }
    
  };
});
export default function PorfolioComponent({ porfolioRef }) {
  const [porfolioData, setPorfolioData] = useState(porfolioJsonData);
  const classes = useStyles();

  function filterPorfolioArr(category) {
    if (category === "all") {
      setPorfolioData(porfolioJsonData);
    } else {
      // setPorfolioData(
      //   porfolioJsonData.map(item => item.category === category ? {...item, displayStatus: true} : {...item, displayStatus: false})
      // );
      setPorfolioData(
        porfolioJsonData.filter((item) => item.category === category)
      );
    }
  }

  return (
    <section className="section profile-section" id="porfolio" ref={porfolioRef}>
      <Typography variant="h4" className={classes.title}>
        My <strong>Designs</strong>
      </Typography>

      {/* Porfolio Filter Buttons */}
      <div className={classes.filterBtnContainer} style={{ marginBottom: "30px" }}>
        {porfolioArr.map((item, index) => {
          return (
            <Button
              key={index}
              color="primary"
              className={classes.button}
              onClick={() => filterPorfolioArr(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>

      <SRLWrapper >
        <div className={classes.cardGrid}>
          {porfolioData.map((item, index) => {
            return <Porfolio item={item} key={index} />;
          })}
        </div>
      </SRLWrapper>
    </section>
  );
}
