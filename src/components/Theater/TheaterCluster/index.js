import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetTheaterClusterApi } from "./modules/action";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";

import TheaterLotteImg from "../../../assets/Theater/theater-lotte-cinema.jpg";
import TheaterBhdImg from "../../../assets/Theater/theater-bhd-star.png";
import TheaterCgvImg from "../../../assets/Theater/theater-cgv.jpg";
import TheaterCinestarImg from "../../../assets/Theater/theater-cinestar.jpg";
import TheaterGalaxyImg from "../../../assets/Theater/theater-galaxy.png";
import TheaterMegaImg from "../../../assets/Theater/theater-mega-gs.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-cluster-${index}`}
      {...other}
    >
      {value === index && <>{children} </>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "372px",
  },
  tab: {
    minWidth: "100%",
    "& span": {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",

      "& h3": {
        flexGrow: 1,
        textAlign: "left",
      },
    },
  },
}));

function TheaterCluster(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChane = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(actGetTheaterClusterApi("BHDStar"));
  }, []);

  const theaterCluster = useSelector((state) => state.theaterClusterReducer);

  let theaterImg = TheaterBhdImg;
  if (theaterCluster.data) {
    if (theaterCluster.data[0].maHeThongRap === "CGV") {
      theaterImg = TheaterCgvImg;
    } else if (theaterCluster.data[0].maHeThongRap === "CineStar") {
      theaterImg = TheaterCinestarImg;
    } else if (theaterCluster.data[0].maHeThongRap === "Galaxy") {
      theaterImg = TheaterGalaxyImg;
    } else if (theaterCluster.data[0].maHeThongRap === "LotteCinema") {
      theaterImg = TheaterLotteImg;
    } else if (theaterCluster.data[0].maHeThongRap === "MegaGS") {
      theaterImg = TheaterMegaImg;
    }
  }

  //   if (theaterCluster.data) {
  //     console.log("theater", theaterCluster.data[0]);
  //   }

  if (
    theaterCluster.data &&
    theaterCluster.data[0].lstCumRap &&
    theaterCluster.data[0].lstCumRap[value].danhSachPhim
  ) {
    console.log("Yes", theaterCluster.data[0].lstCumRap[value].danhSachPhim);
  }

  // const renderTabPanel = (danhSachPhim) => {
  //   return danhSachPhim.map((item, index) => {
  //     return <div key={item.maPhim}>{item.tenPhim}</div>;
  //   });
  // };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChane}
        className={classes.tabs}
      >
        {theaterCluster.data &&
          theaterCluster.data[0].lstCumRap.map((item, index) => {
            return (
              <Tab
                className={classes.tab}
                key={item.maCumRap}
                label={
                  <Typography variant="h3">
                    <Typography component="p">{item.tenCumRap}</Typography>
                    <Typography component="p">{item.diaChi}</Typography>
                  </Typography>
                }
                icon={
                  <Avatar
                    variant="square"
                    alt={item.maCumRap}
                    title={item.tenCumRap}
                    src={theaterImg}
                  />
                }
              />
            );
          })}
      </Tabs>
      <TabPanel value={value} index={value}>
        {theaterCluster.data &&
          theaterCluster.data[0].lstCumRap &&
          theaterCluster.data[0].lstCumRap[value].danhSachPhim &&
          theaterCluster.data[0].lstCumRap[value].danhSachPhim.map(
            (item, index) => {
              return <div key={item.maPhim}>{item.tenPhim}</div>;
            }
          )}
      </TabPanel>
    </div>
  );
}

export default TheaterCluster;
