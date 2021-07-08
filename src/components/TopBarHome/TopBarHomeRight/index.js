import {
  Badge,
  Divider,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import clsx from "clsx";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import AvatarTix from "../../../assets/LogoHeader/avatarTix.jpg";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { LocalSeeOutlined } from "@material-ui/icons";
import Swal from "sweetalert2";

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
  },
  accountContainerLeft: {
    position: "relative",
    padding: "0 11px",
    cursor: "pointer",
    display: "flex",

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
    cursor: "pointer",
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

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,

      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2)",
      opacity: 0,
    },
  },
}))(Badge);

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

  // Kiem tra xem dang nhap hay chua
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("dangNhap"))
  );

  return (
    <div className={right}>
      <div className={accountContainer}>
        {user ? (
          <div className={classes.accountBox}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
              className={classes.icon}
            >
              <Avatar alt="avatar" title="avatar" src={AvatarTix} />
            </StyledBadge>
            <Typography className={classes.text} variant="h5">
              {user.taiKhoan}
            </Typography>
          </div>
        ) : (
          <Link to="/login" className={classes.accountBox}>
            <AccountCircleIcon className={classes.icon} fontSize="large" />
            <Typography className={classes.text} variant="h5">
              Đăng nhập
            </Typography>
          </Link>
        )}
      </div>
      <Divider orientation="vertical" flexItem />
      <div className={accountContainer}>
        {user ? (
          <div
            className={classes.accountBox}
            onClick={() => {
              Swal.fire({
                title: "Bạn có muốn đăng xuất ?",
                showCancelButton: true,
                confirmButtonText: `Đồng ý`,
                cancelButtonText: "Hủy",
                icon: "question",

                confirmButtonColor: "#fb4226",
                cancelButtonColor: "#8bc541",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Đã đăng xuất",
                    text: "Cảm ơn bạn đã sử dụng TIX!",
                    icon: "success",
                    timer: "2000",
                    showConfirmButton: false,
                  });
                  localStorage.removeItem("dangNhap");
                  setUser(null);
                }
              });
            }}
          >
            <ExitToAppIcon className={classes.icon} fontSize="large" />
            <Typography className={classes.text} variant="h5">
              Đăng xuất
            </Typography>
          </div>
        ) : (
          <Link to="/register" className={classes.accountBox}>
            <PersonAddIcon className={classes.icon} fontSize="large" />
            <Typography className={classes.text} variant="h5">
              Đăng ký
            </Typography>
          </Link>
        )}
      </div>
    </div>
  );
}

export default TopBarHomeRight;
