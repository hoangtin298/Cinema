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
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
// Import Swiper styles
import "swiper/swiper.min.css";
import "./styles.css";
import { data } from "./data";

SwiperCore.use([Autoplay]);

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackAppImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",

    padding: "120px 0 80px 0",
  },
  bannerLeft: {
    paddingTop: "60px !important",
    "& p": {
      color: "#fff",
    },
  },

  textLeftLarge: {
    fontSize: "xx-large",
    fontWeight: 700,
    marginBottom: "6px",
  },
  textLeftSmall: {
    fontSize: "medium",
    fontWeight: 500,
    marginBottom: "6px",
  },
  textAppUnder: {
    margin: "12px 0",

    fontSize: "14px",
    fontWeight: 600,

    "& a": {
      color: "#fff",
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
}));

function Banner(props) {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item md={6} className={classes.bannerLeft}>
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

            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              speed={600}
              autoplay={{
                delay: "3000",
              }}
              style={{
                position: "absolute",
                display: "block",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "41.6%",
                padding: "1.5% 0",
                borderRadius: "30px",
              }}
            >
              {data.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{
                      position: "relative",
                      display: "block",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      margin: 0,
                      padding: 0,
                      borderRadius: "0",
                      width: "100%",
                    }}
                    className={classes.rightItem}
                  >
                    <img
                      style={{
                        display: "block",
                        width: "100%",
                      }}
                      alt={item}
                      src={item}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
export default Banner;
