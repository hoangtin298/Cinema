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

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "75px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
    },
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: "900px",
    // },
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
      {value === index && <div>{children}</div>}
    </div>
  );
}

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
      <Container
        component="div"
        style={{ maxWidth: "1100px" }}
        className={classes.root}
      >
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
        <TabPanel value={value} index={0}>
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            pagination={{
              clickable: true,
            }}
            tag="section"
            navigation={true}
            className="mySwiper"
          >
            {movieList.data &&
              sliceIntoChunks(movieList.data, moviePerSlide).map(
                (item, index) => {
                  console.log(item);
                  return (
                    <SwiperSlide key={index}>
                      <Container maxWidth="md">
                        <Grid container spacing={2}>
                          {renderMovieList(item)}
                        </Grid>
                      </Container>
                    </SwiperSlide>
                  );
                }
              )}
          </Swiper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Swiper
            autoHeight={true}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            pagination={{
              clickable: true,
            }}
            tag="section"
            navigation={true}
            className="mySwiper"
          >
            {movieList.data &&
              sliceIntoChunks(movieList.data, 8).map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Container maxWidth="md">
                      <Grid container spacing={2}>
                        {renderMovieList(item)}
                      </Grid>
                    </Container>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </TabPanel>
      </Container>
    </section>
  );
}

export default Movie;
