import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TopBarHomeLeft from "./TopBarHomeLeft";
import TopBarHomeMiddle from "./TopBarHomeMiddle";
import TopBarHomeRight from "./TopBarHomeRight";
import { Hidden, useMediaQuery, useTheme } from "@material-ui/core";
import MenuLogo from "../../assets/LogoHeader/menu-options.png";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuContainer: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: "translateY(-50%)",
    width: "25px",
  },
  menuImg: {
    width: "100%",
    verticalAlign: "middle",
  },
  list: {
    width: "350px",
    [theme.breakpoints.down("xs")]: {
      width: 280,
    },
    [theme.breakpoints.down("370")]: {
      width: 250,
    },
  },
  offset: theme.mixins.toolbar,
  toolBar: {
    backgroundColor: "rgba(255,255,255,.95)",
  },
}));

export default function TopBarHome() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(false);
  }, [isMatch]);

  return (
    <header id="headerHome" className={classes.root}>
      <AppBar color="transparent" position="fixed">
        <Toolbar className={classes.toolBar} variant="regular">
          <TopBarHomeLeft />
          <Hidden smDown>
            <TopBarHomeMiddle />
          </Hidden>
          {isMatch ? (
            <div className={classes.menuContainer}>
              <img
                className={classes.menuImg}
                src={MenuLogo}
                alt="menu"
                onClick={handleDrawer}
              />
            </div>
          ) : (
            <>
              <TopBarHomeRight />
            </>
          )}
        </Toolbar>
      </AppBar>

      <Toolbar className={classes.offset}></Toolbar>

      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div role="presentation" className={classes.list}>
            <div>
              <TopBarHomeRight />
              <TopBarHomeMiddle />
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </header>
  );
}
