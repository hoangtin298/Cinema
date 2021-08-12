import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actGetTheaterClusterApi } from "./modules/action";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";

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
    display: "flex",
    height: "850px",

    marginTop: "30px",
    borderRadius: "4px",
    backgroundColor: theme.palette.background.paper,

    [theme.breakpoints.down("xs")]: {
      display: "unset",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "40%",

    border: "1px solid #e0e0e0",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    [theme.breakpoints.down("xs")]: {
      borderBottomLeftRadius: "unset",
      borderTopRightRadius: "8px",
    },
  },
  tab: {
    position: "relative",

    minWidth: "100%",
    padding: "20px 15px 15px 20px",

    opacity: 0.5,

    transition: "all .2s",
    "&:hover": {
      opacity: 1,
    },
    //  button wrapper //
    "& span": {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    "&:after": {
      display: "block",
      content: "''",

      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",

      width: "calc(100% - 40px)",
      borderBottom: "1px solid #e0e0e0",
    },
    "&:last-child:after": {
      width: "0%",
    },
  },

  avatar: {
    width: "50px",
    height: "50px",

    margin: "0 !important",
  },
  theaterWrap: {
    textAlign: "left",

    paddingLeft: "10px",
  },
  theaterName: {
    display: "block",

    fontSize: theme.typography.h4.fontSize,
    lineHeight: 1.4,
    fontWeight: 500,

    color: theme.palette.common.black,
  },
  theaterAddress: {
    display: "block",

    lineHeight: 1.4,
    fontSize: theme.typography.h6.fontSize,
    color: "#949494",

    display: "-webkit-box",
    WebkitLineClamp: "1",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  theaterDetail: {
    textDecoration: "none",
    textTransform: "none",

    fontSize: theme.typography.h6.fontSize,
    lineHeight: 1.4,
    color: theme.palette.primary.main,
  },

  // Tab Panel //
  // Right //
  tabPanel: {
    minWidth: "60%",
    overflowY: "scroll",
    overflowX: "hidden",

    border: "1px solid #e0e0e0",
    borderLeft: "none",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",

    [theme.breakpoints.down("xs")]: {
      height: "400px",

      borderLeft: "1px solid #e0e0e0",
      borderTop: `3px solid ${theme.palette.primary.main}`,

      borderTopRightRadius: "unset",
      borderBottomLeftRadius: "8px",
    },

    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "8px",
      boxShadow: "inset 0 0 10px rgba(0,0,0,0.25)",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "8px",
      backgroundColor: "rgba(250, 82, 56, .8)",
      transition: "all .4s",
      "&:hover": {
        backgroundColor: "rgba(250, 82, 56, .6)",
      },
    },
  },
  summary: {
    display: "flex",
  },
  movieImg: {
    minWidth: "50px",
    minHeight: "50px",

    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  movieInfoWrapper: {
    margin: "6px 0 0 10px",
  },
  movieName: {
    display: "block",

    fontSize: "15px",
    lineHeight: 1.4,
    fontWeight: 500,

    color: theme.palette.common.black,
  },
  movieDesc: {
    display: "block",

    lineHeight: 1.6,
    fontSize: theme.typography.h6.fontSize,
    color: "#949494",
  },
  ageType: {
    display: "inline-block",

    borderRadius: "4px",
    minWidth: "33px",

    padding: "0 5px",
    marginRight: theme.spacing(1),

    fontSize: "14px",
    color: theme.palette.common.white,
    textAlign: "center",
  },
  ageType16: {
    backgroundColor: theme.palette.primary.main,
  },
  ageTypeP: {
    backgroundColor: theme.palette.secondary.main,
  },

  details: {
    display: "block",
    width: "100%",
  },
  digital: {
    marginBottom: theme.spacing(1),
  },
  dateTimeWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  dateTimeLink: {
    width: "28%",

    textDecoration: "none",
    color: "#9e9e9e",
    backgroundColor: "rgba(246, 246, 246, 0.5)",

    padding: "12px",
    margin: theme.spacing(0, 2, 2, 0),

    border: "1px solid #e4e4e4",
    borderRadius: "4px",

    transition: "all .2s",
    "&:hover $dateTimeStart": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("xs")]: {
      width: "43%",
    },
  },
  dateTimeText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  dateTimeStart: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
}));

const StyledAccordion = withStyles({
  expanded: {
    margin: "0 !important",
  },
})(Accordion);

function TheaterCluster(props) {
  const classes = useStyles();
  const { valueCluster: value, setValueCluster: setValue } = props;

  const dispatch = useDispatch();

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

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={value}
        onChange={handleChane}
        className={classes.tabs}
      >
        {theaterCluster.data &&
          theaterCluster.data[0].lstCumRap.slice(0, 8).map((item, index) => {
            return (
              <Tab
                className={classes.tab}
                key={item.maCumRap}
                label={
                  <div className={classes.theaterWrap}>
                    <Typography
                      component="span"
                      className={classes.theaterName}
                    >
                      {item.tenCumRap}
                    </Typography>
                    <Typography
                      component="span"
                      className={classes.theaterAddress}
                    >
                      {item.diaChi}
                    </Typography>
                    <Link to="/asd" className={classes.theaterDetail}>
                      [chi tiết]
                    </Link>
                  </div>
                }
                icon={
                  <Avatar
                    className={classes.avatar}
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

      <TabPanel className={classes.tabPanel} value={value} index={value}>
        {theaterCluster.data &&
          theaterCluster.data[0].lstCumRap[value].danhSachPhim &&
          theaterCluster.data[0].lstCumRap[value].danhSachPhim.map(
            (item, index) => {
              return (
                <StyledAccordion key={item.maPhim}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    id={`panel1a-header-${item.maPhim}`}
                  >
                    <div className={classes.summary}>
                      <div
                        className={classes.movieImg}
                        style={{
                          backgroundImage: `url(${item.hinhAnh})`,
                        }}
                      ></div>
                      <div className={classes.movieInfoWrapper}>
                        <Typography
                          component="span"
                          className={classes.movieName}
                        >
                          <span
                            className={`${classes.ageType16} ${classes.ageType}`}
                          >
                            C16
                          </span>
                          {item.tenPhim}
                        </Typography>
                        <Typography
                          component="span"
                          className={classes.movieDesc}
                        >
                          120 phút - TIX 8.6 - IMDb 9.2
                        </Typography>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    <div>
                      <Typography
                        className={classes.digital}
                        variant="h3"
                        component="p"
                      >
                        2D Digital
                      </Typography>
                      <div className={classes.dateTimeWrapper}>
                        {item.lstLichChieuTheoPhim &&
                          item.lstLichChieuTheoPhim.map(
                            (childItem, childIndex) => {
                              return (
                                <Link
                                  to="/"
                                  key={childItem.maLichChieu}
                                  className={classes.dateTimeLink}
                                >
                                  <div className={classes.dateTimeText}>
                                    <Typography
                                      variant="h3"
                                      component="p"
                                      className={classes.dateTimeStart}
                                    >
                                      {moment(
                                        childItem.ngayChieuGioChieu
                                      ).format("HH:mm ")}
                                    </Typography>
                                    &nbsp;~&nbsp;
                                    <Typography variant="h4" component="p">
                                      {moment(childItem.ngayChieuGioChieu)
                                        .add(2, "hours")
                                        .format("HH:mm")}
                                    </Typography>
                                  </div>
                                </Link>
                              );
                            }
                          )}
                      </div>
                    </div>
                  </AccordionDetails>
                </StyledAccordion>
              );
            }
          )}
      </TabPanel>
    </div>
  );
}

export default TheaterCluster;
