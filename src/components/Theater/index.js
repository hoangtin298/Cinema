import React from "react";
import TheaterCluster from "./TheaterCluster";
import TheaterSystem from "./TheaterSystem";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import BackNewsImg from "../../assets/back-news.png";
import BackAppImg from "../../assets/backapp.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: `url(${BackNewsImg})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // paddingTop: "100px",
    // marginBottom: "20px",
    // [theme.breakpoints.down("md")]: {
    //   paddingTop: "80px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: "60px",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   paddingTop: "40px",
    // },
    // [theme.breakpoints.down("370")]: {
    //   paddingTop: "20px",
    // },
  },
  title: {
    // display: "block",

    color: theme.palette.primary.main,
    fontSize: "18px",
    fontWeight: 500,

    height: "24px",
    lineHeight: "24px",

    "&:after": {
      content: "''",
      display: "block",

      height: "2px",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function Theater(props) {
  const classes = useStyles();
  return (
    <section id="cumRap">
      <Container maxWidth="md" className={classes.root}>
        <span className={classes.title}>Hệ thống rạp</span>
        <TheaterSystem />
        <TheaterCluster />
      </Container>
    </section>
  );
}
