import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/LogoHeader/web-logo.png";
import {
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const useStyles = makeStyles((theme) => ({
  logoImg: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    width: "50px",
  },
  logoLink: {
    cursor: "pointer",
  },
}));

function TopBarHomeLeft(props) {
  const classes = useStyles();
  return (
    <>
      <a
        className={classes.logoLink}
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <img src={Logo} alt="logo" className={classes.logoImg} />
      </a>
    </>
  );
}

export default TopBarHomeLeft;
