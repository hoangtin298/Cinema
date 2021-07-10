import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BackAppDetail from "../../../assets/BookingDetail/backapp-detail.jpg";
import PlayButton from "../../../assets/play-video.png";
import ModalPlayer from "../../../components/ModalPlayer";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  //   TOP
  detailMainTop: {
    position: "relative",
  },
  //   Nền hình mờ
  styleBlur: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    overflow: "hidden",
  },
  posterLandscapeFilm: {
    filter: "blur(3px)",
    margin: "-11px 0 -5px -10px",
    width: "calc(100% + 5px)",
  },
  // Nền màu mờ
  styleGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
  },

  //   Main Top
  detailMainInfo: {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    transform: "translate3d(-50%,-50%,0)",
  },
  // Left main top
  posterMain: {
    position: "relative",

    backgroundSize: "100% auto !important",
    backgroundRepeat: "no-repeat,repeat-y !important",
    backgroundPosition: "center,0 0 !important",

    borderRadius: "4px",
    paddingTop: "147.90697674%",
    "&:hover $playerButton": {
      visibility: "visible",
      opacity: 1,
    },
  },
  playerButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",

    zIndex: 10,
    background: "none",
    border: "none",

    cursor: "pointer",
    transition: "all .2s",
    visibility: "hidden",
    opacity: 0,
    "&:hover": {
      opacity: ".7 !important",
    },
  },
  // Left center top
  movieInfo: {
    color: "#e9e9e9",
    lineHeight: 1.5,
    padding: "0 20px",
  },
  movieDate: {
    lineHeight: 1.5,
    marginBottom: "5px",
  },
  movieMain: {},
  movieName: {
    fontSize: "22px",
    lineHeight: 1.5,
    marginBottom: theme.spacing(1),
  },
  movieAge: {
    display: "inline-block",
    float: "left",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "4px",
    margin: "3px 6px 0 0",
    padding: "0 8px",

    color: theme.palette.common.white,
    fontSize: "16px",
    textAlign: "center",
    minWidth: "33px",
  },
  movieDesc: {
    lineHeight: 1.5,
  },
  movieButton: {
    lineHeight: 1.5,
    textTransform: "unset",
    fontSize: "16px",
    textAlign: "center",
    color: theme.palette.common.white,

    padding: "7px 25px",
    margin: "25px 0 20px 0",
  },
}));

function BookingDetail(props) {
  const classes = useStyles();

  const [chiTietPhim, setChiTietPhim] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const maPhim = props.match.params.maPhim;
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: `GET`,
    })
      .then((result) => {
        setChiTietPhim(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("chiTietPhim", chiTietPhim);

  return (
    <section>
      {chiTietPhim ? (
        <div className={classes.detailMainTop}>
          <ModalPlayer
            open={openModal}
            trailer={chiTietPhim.trailer}
            handleClose={() => setOpenModal(false)}
          />
          <div className={classes.styleBlur}>
            <img
              alt="back-app"
              src={BackAppDetail}
              className={classes.posterLandscapeFilm}
            />
          </div>
          <div className={classes.styleGradient}></div>
          <Container maxWidth="md" className={classes.detailMainInfo}>
            <Grid container>
              <Grid xs={3} item>
                <Box
                  style={{
                    background: `url(${chiTietPhim.hinhAnh})`,
                  }}
                  className={classes.posterMain}
                >
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setOpenModal(true);
                    }}
                    className={classes.playerButton}
                  >
                    <img alt="play-btn" src={PlayButton} />
                  </button>
                </Box>
              </Grid>
              <Grid xs={5} item container alignItems="center">
                <Box className={classes.movieInfo}>
                  <Typography
                    variant="h4"
                    component="p"
                    className={classes.movieDate}
                  >
                    {moment(chiTietPhim.ngayKhoiChieu).format("DD.MM.YYYY")}
                  </Typography>
                  <Box className={classes.movieMain}>
                    <span className={classes.movieAge}>C16</span>
                    <Typography
                      variant="h1"
                      component="p"
                      className={classes.movieName}
                    >
                      {chiTietPhim.tenPhim}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="p"
                    className={classes.movieDesc}
                  >
                    129 phút - 0 IMDb - 2D/Digital
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.movieButton}
                  >
                    Mua vé
                  </Button>
                </Box>
              </Grid>
              <Grid xs={2} item>
                <Box>
                  <CircularProgress variant="determine" />
                  <CircularProgress
                    variant="determinate"
                    color="secondary"
                    value={75}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : null}
    </section>
  );
}

export default BookingDetail;
