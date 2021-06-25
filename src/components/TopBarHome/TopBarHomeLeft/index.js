import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/LogoHeader/web-logo.png";

const useStyles = makeStyles((theme) => ({
  webLogo: {
    position: "absolute",
    top: "50%",
    left: "20px",
    transform: "translateY(-50%)",
    width: "50px",
  },
}));

function TopBarHomeLeft(props) {
  const classes = useStyles();
  return (
    <>
      <Link to="/">
        <img src={Logo} alt="logo" className={classes.webLogo} />
      </Link>
    </>
  );
}

export default TopBarHomeLeft;
