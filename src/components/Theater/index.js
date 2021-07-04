import React, { useState } from "react";
import TheaterCluster from "./TheaterCluster";
import TheaterSystem from "./TheaterSystem";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import BackNewsImg from "../../assets/back-news.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "20px",
    paddingTop: "100px",

    background: `url(${BackNewsImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      paddingTop: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.down("370")]: {
      paddingTop: "20px",
    },
  },
  title: {
    position: "relative",
    display: "block",

    height: "24px",
    color: theme.palette.primary.main,
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
    padding: "0 30px",
    marginBottom: "15px",

    "&:after": {
      display: "block",
      content: "''",

      position: "absolute",
      left: "0",
      bottom: "-15px",
      width: "100%",
      height: "15px",
      borderBottom: `3px solid ${theme.palette.primary.main}`,
    },
  },
}));

export default function Theater(props) {
  const classes = useStyles();

  const [valueCluster, setValueCluster] = useState(0);

  return (
    <section id="cumRap">
      <Container maxWidth="md" className={classes.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className={classes.title}>Hệ Thống Rạp</span>
        </div>
        <TheaterSystem
          valueCluster={valueCluster}
          setValueCluster={setValueCluster}
        />
        <TheaterCluster
          valueCluster={valueCluster}
          setValueCluster={setValueCluster}
        />
      </Container>
    </section>
  );
}
