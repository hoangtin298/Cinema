import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { actGetTheaterSystemApi } from "./modules/action";
import { actGetTheaterClusterApi } from "../TheaterCluster/modules/action";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {},

  logoBox: {
    position: "relative",
    "&:after": {
      display: "block",
      content: "''",

      position: "absolute",
      bottom: "-10px",
      left: 0,

      height: "2px",
      width: "0%",

      background: "linear-gradient(to left,#fb4226,#ce3017 100%)",

      transition: "all .4s",
    },
    "&:hover:after": {
      width: "100%",
    },
  },
  activeBox: {
    "&:after": {
      display: "block",
      content: "''",

      position: "absolute",
      bottom: "-10px",
      left: 0,

      height: "2px",
      width: "100%",

      background: "linear-gradient(to left,#fb4226,#ce3017 100%)",
    },
  },
  logo: {
    width: "50px",
    height: "50px",

    margin: "auto",
    background: "white",
    borderRadius: "50%",

    cursor: "pointer",
    transition: "all .2s",
    opacity: 0.5,

    "&:hover": {
      opacity: 1,
    },
  },
  active: {
    opacity: 1,
  },
}));

function TheaterSystem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [activeLogo, setActiveLogo] = useState(0);

  useEffect(() => {
    dispatch(actGetTheaterSystemApi());
  }, []);

  const theaterSystem = useSelector((state) => state.theaterSystemReducer);

  const handleOnClick = (index, maHeThongRap) => {
    setActiveLogo(index);
    dispatch(actGetTheaterClusterApi(maHeThongRap));
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        {theaterSystem.data &&
          theaterSystem.data.map((item, index) => {
            return (
              <Grid item xs={2} key={item.maHeThongRap}>
                <div
                  className={`${classes.logoBox} ${
                    activeLogo === index ? classes.activeBox : null
                  }`}
                >
                  <Avatar
                    className={`${classes.logo} ${
                      activeLogo === index ? classes.active : null
                    }`}
                    alt={item.biDanh}
                    title={item.tenHeThongRap}
                    src={item.logo}
                    onClick={() => handleOnClick(index, item.maHeThongRap)}
                  />
                </div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default TheaterSystem;
