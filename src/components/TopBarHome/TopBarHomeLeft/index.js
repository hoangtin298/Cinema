import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const history = useHistory();

  const historyCallback = (callback) => {
    history.push("/home");
    callback();
  };

  return (
    <>
      <a
        className={classes.logoLink}
        onClick={() => {
          if (location.pathname !== "/" && location.pathname !== "/home") {
            historyCallback(() => {
              scroll.scrollToTop();
            });
            return;
          }
          scroll.scrollToTop();
        }}
      >
        <img src={Logo} alt="logo" title="logo" className={classes.logoImg} />
      </a>
    </>
  );
}

export default TopBarHomeLeft;
