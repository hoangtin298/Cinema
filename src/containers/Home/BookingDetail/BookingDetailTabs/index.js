import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import moment from "moment";
import TabInfo from "./TabInfo";
import TabShowTime from "./TabShowTime";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-detail-booking-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {},
  tabs: {},
  tab: {
    textTransform: "unset",

    fontSize: "18px",
    color: theme.palette.common.white,

    lineHeight: "24px",
    height: "24px",
  },
  tabPanel: {
    marginTop: "40px",
    paddingBottom: "40px",
  },
}));

function BookingDetailTabs(props) {
  const { data } = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="standard"
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Lịch Chiếu" className={classes.tab} />
        <Tab label="Thông Tin" className={classes.tab} />
        <Tab label="Bình Luận" className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <TabShowTime data={data.heThongRapChieu} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <TabInfo data={data} />
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        Item Three
      </TabPanel>
    </Container>
  );
}

export default BookingDetailTabs;
