import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sliceIntoChunks } from "../../utils";
import { actGetMovieListApi } from "./modules/action";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Container, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MovieSingle from "./MovieSingle";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BackArrow from "../../assets/MovieHome/back.png";
import NextArrow from "../../assets/MovieHome/next.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "60px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "20px",
    },
  },
  tabs: {
    marginBottom: "30px",
  },
  tab: {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "24px",
    height: "24px",
    textTransform: "unset",
    color: theme.palette.common.black,
    transition: "all .4s",
    "&:hover": {
      fontSize: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      "&:hover": {
        fontSize: "18px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      "&:hover": {
        fontSize: "16px",
      },
    },
  },
  tabPanel: {
    height: "882px",
    [theme.breakpoints.down("xs")]: {
      height: "unset",
    },
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.any.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-movie-list-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const StyledSlider = styled(Slider)`
   {
    // Arrow Position //
    .slick-prev {
      left: -22px !important;
    }
    .slick-next {
      right: -22px !important;
    }
    @media screen and (max-width: 992px) {
      .slick-prev {
        left: -15px !important;
      }
      .slick-next {
        right: -15px !important;
      }
    }

    // Box Arrow //
    .slick-arrow {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;

      top: 49%;

      width: 40px;
      height: 40px;

      z-index: 1;
      opacity: 1;

      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);

      transition: all 0.2s;
    }
    .slick-arrow:hover {
      opacity: 0.7;
    }

    // Icon Next and Prev //
    .slick-next::before {
      background-image: url(${NextArrow});
    }
    .slick-prev::before {
      background-image: url(${BackArrow});
    }
    .slick-arrow::before {
      content: "" !important;
      background-position: center;
      background-size: cover;

      display: block;

      width: 25px;
      height: 25px;

      z-index: 10;
      opacity: 1;
    }

    // space between slides //
    .slick-slide > div {
      margin: 0 8px;
    }
    .slick-list {
      margin: 0 -8px;
    }
  }
`;

function Movie(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMatchMd = useMediaQuery(theme.breakpoints.up("md"));
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchXs = useMediaQuery(theme.breakpoints.down("xs"));

  const [value, setValue] = useState(0);
  const [moviePerSlide, setMoviePerSlide] = useState(8);

  const movieList = useSelector((state) => state.movieListReducer);

  useEffect(() => {
    if (isMatchMd) {
      setMoviePerSlide(8);
    } else if (isMatchXs) {
      setMoviePerSlide(4);
    } else if (isMatchSm) {
      setMoviePerSlide(6);
    }
  }, [isMatchMd, isMatchSm, isMatchXs]);

  useEffect(() => {
    dispatch(actGetMovieListApi("01/01/2020", "31/12/2020"));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,

    adaptiveHeight: true,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderMovieList = (movieArr) => {
    return movieArr.map((item, index) => {
      return (
        <Grid item md={3} sm={4} xs={12} key={item.maPhim}>
          <MovieSingle data={item} />
        </Grid>
      );
    });
  };

  return (
    <section id="lichChieu">
      <Container component="div" maxWidth="md" className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          <Tab
            label="Đang Chiếu"
            className={classes.tab}
            onClick={() => {
              dispatch(actGetMovieListApi("01/01/2020", "31/12/2020"));
            }}
          />
          <Tab
            label="Sắp Chiếu"
            className={classes.tab}
            onClick={() => {
              dispatch(actGetMovieListApi("01/01/2021", "31/12/2021"));
            }}
          />
        </Tabs>
        <TabPanel className={classes.tabPanel} value={value} index={0}>
          <StyledSlider {...settings}>
            {movieList.data &&
              sliceIntoChunks(movieList.data, moviePerSlide).map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <Grid container spacing={2}>
                        {renderMovieList(item)}
                      </Grid>
                    </div>
                  );
                }
              )}
          </StyledSlider>
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={1}>
          <StyledSlider {...settings}>
            {movieList.data &&
              sliceIntoChunks(movieList.data, moviePerSlide).map(
                (item, index) => {
                  return (
                    <div key={index}>
                      <Grid container spacing={2}>
                        {renderMovieList(item)}
                      </Grid>
                    </div>
                  );
                }
              )}
          </StyledSlider>
        </TabPanel>
      </Container>
    </section>
  );
}

export default Movie;
