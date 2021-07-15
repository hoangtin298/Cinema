import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { Avatar, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";

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

    borderRadius: "4px",

    // height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
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
}));

function TabShowTime(props) {
  const { data } = props;
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabCinema = (arr) => {
    return arr.map((item, index) => {
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
    });
  };

  const renderTabPanelShowTime = (arr) => {
    return arr.map((item, index) => {
      console.log("item.cumRapChieu", item.cumRapChieu);
    });
  };

  console.log("rap chieu", data);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {renderTabCinema(data)}
      </Tabs>
      {renderTabPanelShowTime(data)}
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item 4
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item 5
      </TabPanel>
    </div>
  );
}

export default TabShowTime;
