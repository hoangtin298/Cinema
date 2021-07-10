import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import React from "react";
import BackAppImg from "../../assets/Banner/backapp.jpg";
import MobileImg from "../../assets/Banner/mobile.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackAppImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",

    padding: "120px 0 80px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0 0 0 ",
    },
  },
  bannerLeft: {
    paddingTop: "60px !important",
    "& p": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  textLeftLarge: {
    fontSize: "xx-large",
    fontWeight: 700,
    marginBottom: "6px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      fontWeight: 600,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "21px",
      fontWeight: 600,
    },
  },
  textLeftSmall: {
    fontSize: "medium",
    fontWeight: 500,
    marginBottom: "6px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      margin: "2px",
    },
  },
  textAppUnder: {
    margin: "12px 0",

    fontSize: "14px",
    fontWeight: 600,

    "& a": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  buttonLeft: {
    padding: "10px 20px",
    color: theme.palette.common.white,

    fontSize: "medium",
    fontWeight: 700,

    border: "none",
    borderRadius: "4px",

    textTransform: "none",
  },

  bannerRight: {
    position: "relative",
    padding: "0 !important",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "60px",
    },
  },
  imgPhone: {
    position: "relative",
    padding: "0 28%",
    display: "block",
    maxWidth: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0",
    width: "100%",
  },
  swiperPhone: {
    position: "absolute",
    display: "block",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "41.6%",
    marginTop: "1.5% ",

    borderRadius: "20px",

    overflow: "hidden",
  },
  swiperSlidePhone: {
    position: "relative",
    display: "block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    margin: 0,
    padding: 0,
    width: "100%",

    "& img": {
      display: "block",
      width: "100%",
    },
  },
}));

function Banner(props) {
  const classes = useStyles();
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <section id="ungDung" className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={4} justify="center">
          <Grid item md={6} sm={12} className={classes.bannerLeft}>
            <Typography component="p" className={classes.textLeftLarge}>
              Ứng dụng tiện lợi dành cho
            </Typography>
            <Typography component="p" className={classes.textLeftLarge}>
              người yêu điện ảnh
            </Typography>
            <br />
            <Typography component="p" className={classes.textLeftSmall}>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonLeft}
              onClick={() => {
                window.open(
                  "https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8",
                  "_blank",
                  "noreferrer"
                );
              }}
            >
              App miễn phí - Tải về ngay!
            </Button>
            <Typography component="p" className={classes.textAppUnder}>
              TIX có hai phiên bản{" "}
              <a
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                target="_blank"
                rel="noreferrer"
              >
                IOS
              </a>{" "}
              &{" "}
              <a
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank"
                rel="noreferrer"
              >
                Android
              </a>
            </Typography>
          </Grid>

          <Grid item md={6} className={classes.bannerRight}>
            <img alt="mobile" src={MobileImg} className={classes.imgPhone} />

            <Slider {...settings} className={classes.swiperPhone}>
              {data.map((item, index) => {
                return (
                  <div key={index} className={classes.swiperSlidePhone}>
                    <img alt={item} src={item} />
                  </div>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
export default Banner;
