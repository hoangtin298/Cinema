import { Button, Container, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NewsItem from "./NewsItem";
import BackNewsImg from "../../assets/back-news.png";

const useStyles = makeStyles((theme) => ({
  wrapButtonSeeMoreNews: {
    marginBottom: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  buttonSeeMoreNews: {
    display: "block",
    fontSize: "14px",
    fontWeight: 500,

    color: "#949494",

    border: "1px solid #949494",
    borderRadius: "4px",

    padding: theme.spacing(1, 3),
    marginTop: theme.spacing(4),
    marginBottom: "35px",

    transition: "all .2s",

    "&:hover": {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      marginBottom: "24px",
    },
  },

  tabs: {
    marginBottom: "20px",
    paddingTop: "120px",

    background: `url(${BackNewsImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "60px",
    },
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
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-news-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

// const StyledTab = withStyles({
//   selected: {
//     fontSize: "20px",
//   },
// })(Tab);

export default function News() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [newsDienAnh, setNewsDienAnh] = useState(null);
  const [newsReview, setNewsReview] = useState(null);
  const [newsKhuyenMai, setNewsKhuyenMai] = useState(null);
  const [newsDienAnhMore, setNewsDienAnhMore] = useState(null);
  const [newsReviewMore, setNewsReviewMore] = useState(null);
  const [newsKhuyenMaiMore, setNewsKhuyenMaiMore] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    onClickDienAnh();
  }, []);

  const setStateCallBack = (setState, state, callback) => {
    setState(state);
    callback();
  };

  const callAxios = (url, setState, boolSeeMore) => {
    if (boolSeeMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }
    return axios({
      url,
      method: "GET",
    })
      .then((result) => {
        setStateCallBack(setSeeMore, boolSeeMore, () => {
          setStateCallBack(setState, result.data, () => {
            if (boolSeeMore) {
              setStateCallBack(setLoadingMore, false, () => {});
            } else {
              setStateCallBack(setLoading, false, () => {});
            }
          });
        });
      })
      .catch((error) => console.log(error));
  };

  const onClickReview = () => {
    callAxios(
      "https://60b9f19280400f00177b744b.mockapi.io/ArticlesReview01",
      setNewsReview,
      false
    );
  };

  const onClickDienAnh = () => {
    callAxios(
      `https://60b9f19280400f00177b744b.mockapi.io/Articles01`,
      setNewsDienAnh,
      false
    );
  };

  const onClickKhuyenMai = () => {
    callAxios(
      `https://60b9f19280400f00177b744b.mockapi.io/ArticlesKhuyenMai01`,
      setNewsKhuyenMai,
      false
    );
  };

  const onClickSeeLess = () => {
    setSeeMore(false);
  };

  const onClickSeeMore = () => {
    switch (value) {
      case 0:
        callAxios(
          `https://60b9f19280400f00177b744b.mockapi.io/ArticlesDienAnh02`,
          setNewsDienAnhMore,
          true
        );
        break;
      case 1:
        callAxios(
          `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesReview02`,
          setNewsReviewMore,
          true
        );
        break;
      case 2:
        callAxios(
          `https://60babc8f42e1d0001761ff84.mockapi.io/ArticlesKhuyenMai02`,
          setNewsKhuyenMaiMore,
          true
        );
        break;
      default:
        break;
    }
  };

  return (
    <section id="tinTuc">
      <Container component="div" maxWidth="md">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          className={classes.tabs}
        >
          <Tab
            onClick={onClickDienAnh}
            className={classes.tab}
            label="Điện Ảnh 24h"
          />
          <Tab onClick={onClickReview} className={classes.tab} label="Review" />
          <Tab
            onClick={onClickKhuyenMai}
            className={classes.tab}
            label="Khuyến mãi"
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          {loading ? <NewsItem loading={loading} /> : null}
          {newsDienAnh && !loading && <NewsItem newsArr={newsDienAnh} />}

          {loadingMore ? <NewsItem loading={loadingMore} /> : null}
          {seeMore && newsDienAnhMore && !loadingMore && (
            <NewsItem newsArr={newsDienAnhMore} />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {loading ? <NewsItem loading={loading} /> : null}
          {newsReview && !loading && <NewsItem newsArr={newsReview} />}

          {loadingMore ? <NewsItem loading={loadingMore} /> : null}
          {seeMore && newsReviewMore && !loadingMore && (
            <NewsItem newsArr={newsReviewMore} />
          )}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {loading ? <NewsItem loading={loading} /> : null}
          {newsKhuyenMai && !loading && <NewsItem newsArr={newsKhuyenMai} />}

          {loadingMore ? <NewsItem loading={loadingMore} /> : null}
          {seeMore && !loadingMore && newsKhuyenMaiMore && (
            <NewsItem newsArr={newsKhuyenMaiMore} />
          )}
        </TabPanel>

        <div className={classes.wrapButtonSeeMoreNews}>
          <Button
            onClick={seeMore ? onClickSeeLess : onClickSeeMore}
            className={classes.buttonSeeMoreNews}
            variant="outlined"
          >
            {seeMore ? "RÚT GỌN" : "XEM THÊM"}
          </Button>
        </div>
      </Container>
    </section>
  );
}
