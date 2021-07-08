import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const data = [
  {
    name: "Lịch chiếu",
    id: "lichChieu",
  },
  {
    name: "Cụm rạp",
    id: "cumRap",
  },
  {
    name: "Tin tức",
    id: "tinTuc",
  },
  {
    name: "Ứng dụng",
    id: "ungDung",
  },
];

const useStyles = makeStyles((theme) => ({
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  itemCenter: {
    textDecoration: "none",
    color: theme.palette.common.black,
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightMedium,

    cursor: "pointer",
    transition: "all .2s",
    "&:hover": {
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: theme.spacing(2, 3),
      fontSize: "18px",
      marginRight: "unset",
    },
  },
  centerMobile: {},
}));

function TopBarHomeMiddle(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const center = clsx({
    [classes.center]: !isMatch,
    [classes.centerMobile]: isMatch,
  });

  return (
    <div className={center}>
      {data.map((item) => {
        return (
          <a
            key={item.id}
            className={classes.itemCenter}
            onClick={() => {
              scroller.scrollTo(`${item.id}`, {
                duration: 1000,
                delay: 0,
                smooth: true,
                spy: true,
                offset: isMatch ? -50 : 0,
              });
            }}
          >
            {" "}
            {item.name}
          </a>
        );
      })}
    </div>
  );
}

export default TopBarHomeMiddle;
