import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./styles.css";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import { makeStyles } from "@material-ui/core";
import PlayVideoButton from "../../assets/Carousel/play-video.png";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const data = [
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
    alt: "Img alt 1",
    trailer: "kBY2k3G6LsM",
  },
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
    alt: "Img alt 2",
    trailer: "uqJ9u7GSaYM",
  },
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png",
    alt: "Img alt 3",
    trailer: "JNZv1SgHv68",
  },
];

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    width: "100%",
    position: "relative",
    "&:hover $playBtnBox": {
      visibility: "visible",
      opacity: "1",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  carouselImg: {
    width: "100%",
  },
  playBtnBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 3,
    border: "none",
    background: "transparent",
    transition: "all .2s",
    visibility: "hidden",
    opacity: "0",
  },
  playBtnImg: {
    display: "block",
    width: "100%",
    verticalAlign: "middle",
    transition: "all .2s",
    "&:hover": {
      cursor: "pointer",
      opacity: ".7",
    },
    [theme.breakpoints.down("md")]: {
      width: "70px !important",
      height: "70px !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60px !important",
      height: "60px !important",
    },
  },
}));

function Carousel(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        speed={600}
        autoplay={{
          delay: "5000",
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        tag="section"
        navigation={true}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={item.trailer}>
              <div className={classes.carouselContainer}>
                <img
                  alt={item.alt}
                  src={item.hinhAnh}
                  className={classes.carouselImg}
                />
                <button className={classes.playBtnBox}>
                  <img
                    className={classes.playBtnImg}
                    alt="play-video-btn"
                    src={PlayVideoButton}
                  />
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
}

export default Carousel;
