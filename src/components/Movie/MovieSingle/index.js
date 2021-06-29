import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";
import defaultImg from "../../../assets/default-film.webp";
import PlayVideoImg from "../../../assets/MovieHome/play-video.png";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "25px",

    "&:hover $posterHover": {
      visibility: "visible",
      opacity: 1,
    },
    "&:hover $infoName": {
      visibility: "hidden",
      opacity: 0,
    },
    "&:hover $infoDesc": {
      visibility: "hidden",
      opacity: 0,
    },
    "&:hover $infoHover": {
      visibility: "visible",
      opacity: 1,
    },
  },
  posterLink: {},
  poster: {
    position: "relative",
    height: "318px",

    backgroundPosition: "center center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: "no-repeat !important",

    marginBottom: "10px",

    borderRadius: "4px",
  },
  posterHover: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    borderRadius: "4px",
    background: "linear-gradient(to top,#000,transparent 100%)",

    transition: "all .2s",

    visibility: "hidden",
    opacity: 0,
  },
  posterButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    width: "60px",
    height: "60px",

    zIndex: 3,
    border: "none",
    borderRadius: "4px",
    background: "0 0",

    cursor: "pointer",
    transition: "all .2s",
    "&:hover": {
      opacity: ".7",
    },
  },
  posterButtonImg: {
    display: "block",
    width: "48px !important",
    height: "48px !important",
  },

  posterPoint: {
    position: "absolute",
    top: "12px",
    right: "12px",

    width: "60px",
    padding: "2px",

    backgroundColor: "rgba(12,27,54,.8)",
    border: "1px solid #1f2e46",
    borderRadius: "4px",

    textAlign: "center",
    lineHeight: "1.1",
  },
  posterPointText: {
    maxHeight: "21px",

    fontSize: "16px",
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  posterPointStar: {
    maxHeight: "16px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  posterPointStarSingle: {
    display: "inline-block",
    maxWidth: "10px",
  },

  info: {
    position: "relative",
  },
  infoName: {
    height: "42px",
    maxHeight: "42px",

    fontSize: "16px",
    fontWeight: 500,
    color: theme.palette.common.black,
    lineHeight: "22px",
    textAlign: "left",

    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    visibility: "visible",
    opacity: 1,
    transition: "all .2s",
  },
  ageType: {
    display: "inline-block",

    borderRadius: "4px",
    minWidth: "33px",

    padding: "0 5px",
    marginRight: theme.spacing(1),

    fontSize: "15px",
    color: theme.palette.common.white,
    textAlign: "center",
  },
  ageType16: {
    backgroundColor: theme.palette.primary.main,
  },
  ageTypeP: {
    backgroundColor: theme.palette.secondary.main,
  },
  infoDesc: {
    fontSize: "13px",
    textAlign: "left",
    color: "#4a4a4a",
    lineHeight: 1.42,

    margin: "2px 0 4px 0 ",

    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    visibility: "visible",
    opacity: 1,
    transition: "all .2s",
  },
  infoHover: {
    position: "absolute",
    display: "block",
    top: 0,
    left: 0,
    width: "100%",

    background: "linear-gradient(to left,#fb4226,#ce3017 100%)",
    borderRadius: "4px",

    padding: "10px",

    fontSize: "18px",
    textDecoration: "none",
    color: theme.palette.common.white,

    visibility: "hidden",
    opacity: 0,
    transition: "all .2s",

    "&:hover": {
      transition: "unset",
      background: theme.palette.primary.main,
    },
  },
}));

function MovieSingle(props) {
  const classes = useStyles();
  const { data } = props;

  const starFloor = Math.floor(data.danhGia / 2);
  const starHalf = data.danhGia % 2 !== 0;

  const renderStar = () => {
    const setStar = [];
    for (let index = 0; index < starFloor; index++) {
      setStar.push(
        <StarIcon color="primary" className={classes.posterPointStarSingle} />
      );
    }
    if (starHalf) {
      setStar.push(
        <StarHalfIcon
          color="primary"
          className={classes.posterPointStarSingle}
        />
      );
    }
    return setStar.map((item, index) => {
      return <span key={index}>{item}</span>;
    });
  };

  return (
    <div className={classes.root}>
      <Link to="/" className={classes.posterLink}>
        <div
          className={classes.poster}
          style={{
            background: `url(${data.hinhAnh}),url(${defaultImg})`,
          }}
        >
          <div className={classes.posterHover}>
            <button
              className={classes.posterButton}
              onClick={(e) => {
                e.preventDefault();
                console.log("Open veno");
              }}
            >
              <img
                src={PlayVideoImg}
                alt="play-video"
                className={classes.posterButtonImg}
              />
            </button>
          </div>
          <div className={classes.posterPoint}>
            <Typography className={classes.posterPointText}>
              {data.danhGia}
            </Typography>
            <div className={classes.posterPointStar}>{renderStar()}</div>
          </div>
        </div>
      </Link>

      <div className={classes.info}>
        <div className={classes.infoName}>
          <span
            className={`${classes.ageType} ${
              data.maPhim % 2 == 0 ? classes.ageType16 : classes.ageTypeP
            } `}
          >
            {data.maPhim % 2 == 0 ? "C16" : "P"}
          </span>
          {data.tenPhim}
        </div>
        <div className={classes.infoDesc}>{data.moTa}</div>

        <Link to="/" className={classes.infoHover}>
          MUA VÉ
        </Link>
      </div>
    </div>
  );
}

export default React.memo(MovieSingle);
