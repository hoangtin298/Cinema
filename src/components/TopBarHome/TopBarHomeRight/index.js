import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import clsx from "clsx";
import { useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  right: {
    position: "absolute",
    top: "50%",
    right: theme.spacing(2),
    transform: "translateY(-50%)",
    display: "flex",
    flexWrap: "wrap",
    flexItem: "center",
  },
  accountContainer: {
    position: "relative",
    padding: "0 11px",
    cursor: "pointer",
    display: "flex",
    height: "120px",
  },
  accountContainerLeft: {
    position: "relative",
    padding: "0 11px",
    cursor: "pointer",
    display: "flex",
    height: "120px",
    "&::after": {
      content: "''",
      position: "absolute",
      display: "block",
      right: 0,
      height: "35px",
      top: "50%",
      transform: "translateY(-50%)",
      borderRight: "1px solid #e9e9e9",
    },
  },

  accountBox: {
    textDecoration: "none",
    color: "#9b9b9b",
    margin: "inherit",
    fontSize: theme.typography.h5.fontSize,
    display: "flex",
    alignItems: "center",
    transition: "all .2s",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    marginRight: "5px",
    borderRadius: "25px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  text: {
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  rightMobile: {},
  accountContainerMobile: {
    padding: theme.spacing(2),
  },
}));

function TopBarHomeRight(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const right = clsx({
    [classes.right]: !isMatch,
    [classes.rightMobile]: isMatch,
  });
  const accountContainer = clsx({
    [classes.accountContainer]: !isMatch,
    [classes.accountContainerMobile]: isMatch,
  });

  return (
    <div className={right}>
      <div className={accountContainer}>
        <a className={classes.accountBox} href="">
          <AccountCircleIcon className={classes.icon} fontSize="large" />
          <Typography className={classes.text} variant="h5">
            Đăng Nhập
          </Typography>
        </a>
      </div>

      <div className={accountContainer}>
        <a className={classes.accountBox} href="">
          <AccountCircleIcon className={classes.icon} fontSize="large" />
          <Typography className={classes.text} variant="h5">
            Đăng Ký
          </Typography>
        </a>
      </div>
    </div>
  );
}

export default TopBarHomeRight;
