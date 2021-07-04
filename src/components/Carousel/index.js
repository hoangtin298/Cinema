import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PlayVideoButton from "../../assets/Carousel/play-video.png";
import BackSession from "../../assets/Carousel/back-session.png";
import NextSession from "../../assets/Carousel/next-session.png";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalPlayer from "../ModalPlayer";

import HomeTool from "../HomeTool";

const data = [
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
    alt: "Img alt 1",
    trailer: "https://www.youtube.com/embed/kBY2k3G6LsM",
  },
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
    alt: "Img alt 2",
    trailer: "https://www.youtube.com/embed/8jraVtX821Q",
  },
  {
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png",
    alt: "Img alt 3",
    trailer: "https://www.youtube.com/embed/HHcr8ZRY04w",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
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
    display: "block",
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

function CarouselItem(props) {
  const classes = useStyles();
  const { item } = props;

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={classes.carouselContainer}>
      <img alt={item.alt} src={item.hinhAnh} className={classes.carouselImg} />
      <button onClick={() => setOpenModal(true)} className={classes.playBtnBox}>
        <img
          className={classes.playBtnImg}
          alt="play-video-btn"
          src={PlayVideoButton}
        />
      </button>
      <ModalPlayer
        open={openModal}
        handleClose={() => setOpenModal(false)}
        trailer={item.trailer}
      />
    </div>
  );
}

const StyledSlider = styled(Slider)`
   {
    .slick-prev {
      left: 15px !important;
      background-image: url(${BackSession});
    }
    .slick-next {
      right: 15px !important;
      background-image: url(${NextSession});
    }
    .slick-arrow {
      background-position: center;
      background-size: cover;

      width: 50px;
      height: 50px;
      opacity: 0.7;

      z-index: 1;
    }
    .slick-arrow::before {
      content: "" !important;
    }

    //dots
    .slick-dots {
      bottom: 12% !important;
    }
    .slick-dots li {
      margin: 0 2px !important;
    }
    .slick-dots .slick-active button::before {
      color: #fb4226 !important;
    }
    .slick-dots li button::before {
      color: #d8d8d8;
      font-size: 14px;
      opacity: 1 !important;
    }
  }
`;

function Carousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <section id="carousel" className={classes.root}>
      <StyledSlider {...settings}>
        {data.map((item, index) => {
          return <CarouselItem item={item} key={index} />;
        })}
      </StyledSlider>
      <HomeTool />
    </section>
  );
}

export default Carousel;
