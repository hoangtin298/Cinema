import { Button, Container, makeStyles } from "@material-ui/core";
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
    [theme.breakpoints.down("770")]: {
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
    [theme.breakpoints.down("770")]: {
      fontSize: "14px",
      "&:hover": {
        fontSize: "16px",
      },
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

  const callAxios = (url, setState, boolSeeMore) => {
    return axios({
      url,
      method: "GET",
    })
      .then((result) => {
        setSeeMore(boolSeeMore);
        setState(result.data);
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
      default:
        break;
    }
  };

  const onClickSeeLess = () => {
    setSeeMore(false);
  };

  return (
    <section>
      <Container component="div" maxWidth="md" id="tinTuc">
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
          {newsDienAnh && <NewsItem newsArr={newsDienAnh} />}
          {seeMore && newsDienAnhMore && <NewsItem newsArr={newsDienAnhMore} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {newsReview && <NewsItem newsArr={newsReview} />}
          {seeMore && newsReviewMore && <NewsItem newsArr={newsReviewMore} />}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {newsKhuyenMai && <NewsItem newsArr={newsKhuyenMai} />}
          {seeMore && newsKhuyenMaiMore && (
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
