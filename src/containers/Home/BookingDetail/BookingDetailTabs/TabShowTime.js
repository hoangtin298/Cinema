import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import {
  Avatar,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  withStyles,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import TheaterBhdImg from "../../../../assets/Theater/theater-bhd-star.png";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-detail-showtime-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
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
    display: "flex",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

    borderRadius: "8px",

    height: "710px",

    [theme.breakpoints.down("xs")]: {
      display: "unset",
    },
  },
  tabs: {
    minWidth: "35%",
    // borderRight: `1px solid ${theme.palette.divider}`,

    border: "1px solid #e0e0e0",
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    [theme.breakpoints.down("xs")]: {
      borderBottomLeftRadius: "unset",
      borderTopRightRadius: "8px",
    },
  },

  //   Tab
  tab: {
    position: "relative",

    minWidth: "100%",
    padding: "20px",

    opacity: "0.5",

    transition: "all .2s",
    "&:hover": {
      opacity: 1,
    },
    //  button wrapper //
    "& span": {
      flexDirection: "row",
      justifyContent: "flex-start",
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
  cinemaImg: {
    width: "50px",
    height: "50px",

    marginRight: "10px",
  },
  cinemaTitle: {
    textTransform: "none",
  },

  // Cluster (Right/ Accordion)
  tabPanel: {
    width: "100%",
    overflowY: "scroll",
    overflowX: "hidden",

    border: "1px solid #e0e0e0",
    borderLeft: "none",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",

    [theme.breakpoints.down("xs")]: {
      height: "400px",

      borderLeft: "1px solid #e0e0e0",
      // borderTop: `3px solid ${theme.palette.primary.main}`,

      borderTopRightRadius: "unset",
      borderBottomLeftRadius: "8px",
    },

    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      borderRadius: "8px",
      boxShadow: "inset 0 0 10px rgba(0,0,0,0.25)",
      [theme.breakpoints.down("xs")]: {
        boxShadow: "inset 0 0 10px white",
      },
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
  summary: {},
  summaryWrapper: {
    display: "flex",
  },
  clusterImg: {
    width: "50px",
    height: "50px",
    minWidth: "50px",
    minHeight: "50px",

    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  clusterInfoWrapper: {
    margin: "6px 0 0 10px",
  },
  clusterName: {
    display: "block",

    fontSize: "15px",
    lineHeight: 1.4,
    fontWeight: 500,

    color: theme.palette.common.black,
  },
  clusterAddress: {
    display: "block",

    lineHeight: 1.6,
    fontSize: theme.typography.h6.fontSize,
    color: "#949494",
  },
  clusterMap: {
    color: theme.palette.primary.main,
  },

  details: {
    display: "block",
    width: "100%",
  },
  detailsWrapper: {},
  // Date Time
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

function TabShowTime(props) {
  const { data } = props;
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {data.map((item, index) => {
          return (
            <Tab
              key={item.maHeThongRap}
              className={classes.tab}
              icon={
                <Avatar
                  variant="square"
                  alt="logo"
                  src={item.logo}
                  alt={item.tenHeThongRap}
                  className={classes.cinemaImg}
                />
              }
              label={
                <Box>
                  <Typography
                    variant="h3"
                    component="p"
                    className={classes.cinemaTitle}
                  >
                    {item.tenHeThongRap}
                  </Typography>
                </Box>
              }
            />
          );
        })}
      </Tabs>

      <TabPanel value={value} index={value} className={classes.tabPanel}>
        {data[value].cumRapChieu.map((item, index) => {
          return (
            <StyledAccordion key={item.maCumRap}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={`panel-header-showtime-detail-${item.maCumRap}`}
                className={classes.summary}
              >
                <Box className={classes.summaryWrapper}>
                  <Box
                    style={{
                      backgroundImage: `url(${TheaterBhdImg})`,
                    }}
                    className={classes.clusterImg}
                  ></Box>
                  <Box className={classes.clusterInfoWrapper}>
                    <Typography
                      variant="h3"
                      component="p"
                      className={classes.clusterName}
                    >
                      {item.tenCumRap}
                    </Typography>
                    <Typography
                      variant="h4"
                      component="p"
                      className={classes.clusterAddress}
                    >
                      246 Nguyễn Hồng Đào, Tân Bình &nbsp;
                      <span className={classes.clusterMap}>[Bản đồ]</span>
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <Box className={classes.dateTimeWrapper}>
                  {item.lichChieuPhim.map((childItem, childIndex) => {
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
                            {moment(childItem.ngayChieuGioChieu).format(
                              "HH:mm "
                            )}
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
                  })}
                </Box>
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      </TabPanel>
    </div>
  );
}

export default TabShowTime;
