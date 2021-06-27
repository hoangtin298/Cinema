import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  col: {
    marginBottom: 20,
  },
  thumbnail: {
    marginBottom: theme.spacing(1),
  },
  thumbnailImg: {
    height: "100%",
    width: "100%",
    borderRadius: "4px",
    transition: "all .2s",
  },
  titleLink: {
    textDecoration: "none",
    fontSize: 24,
    color: theme.palette.common.black,
    transition: "all .2s",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  title: {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "20px",
    height: "42px",
    fontSize: "16px",
    marginBottom: "5px",
    fontWeight: 500,
    [theme.breakpoints.down(770)]: {
      fontSize: "14px",
    },
  },
  desc: {
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",

    textAlign: "justify",
    fontSize: "13px",
    color: "#4a4a4a",
    paddingRight: "5px",
    lineHeight: "19px",

    height: "55px",
    marginBottom: theme.spacing(2),

    [theme.breakpoints.down(770)]: {
      fontSize: "12px",
    },
  },
  thumbnailSmall: {
    height: "50px",
    width: "50px",
    float: "left",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),

    [theme.breakpoints.down(770)]: {
      height: "42px",
      width: "42px",
    },
  },
  titleLinkSmall: {
    textDecoration: "none",
    fontSize: 20,
    color: "#4e4e4e",
    transition: "all .2s",

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  titleSmall: {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "20px",
    height: "42px",
    fontSize: "16px",
    marginBottom: "5px",

    [theme.breakpoints.down(770)]: {
      fontSize: "14px",
    },
  },
}));

export default function NewsItem(props) {
  const classes = useStyles();
  const { newsArr } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <div className={classes.thumbnail}>
          <a target="_blank" href={newsArr[0].url}>
            <img
              className={classes.thumbnailImg}
              alt="poster"
              src={newsArr[0].img}
            />
          </a>
        </div>
        <a className={classes.titleLink} target="_blank" href={newsArr[0].url}>
          <Typography className={classes.title}>{newsArr[0].title}</Typography>
        </a>
        <Typography className={classes.desc}>{newsArr[0].text}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.thumbnail}>
          <a target="_blank" href={newsArr[1].url}>
            <img
              className={classes.thumbnailImg}
              alt="poster"
              src={newsArr[1].img}
            />
          </a>
        </div>
        <a className={classes.titleLink} target="_blank" href={newsArr[1].url}>
          <Typography className={classes.title}>{newsArr[1].title}</Typography>
        </a>
        <Typography className={classes.desc}>{newsArr[1].text}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.thumbnail}>
          <a target="_blank" href={newsArr[2].url}>
            <img
              className={classes.thumbnailImg}
              alt="poster"
              src={newsArr[2].img}
            />
          </a>
        </div>
        <a className={classes.titleLink} target="_blank" href={newsArr[2].url}>
          <Typography className={classes.title}>{newsArr[2].title}</Typography>
        </a>
        <Typography className={classes.desc}>{newsArr[2].text}</Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <div className={classes.thumbnail}>
          <a target="_blank" href={newsArr[3].url}>
            <img
              className={classes.thumbnailImg}
              alt="poster"
              src={newsArr[3].img}
            />
          </a>
        </div>
        <a className={classes.titleLink} target="_blank" href={newsArr[3].url}>
          <Typography className={classes.title}>{newsArr[3].title}</Typography>
        </a>
        <Typography className={classes.desc}>{newsArr[3].text}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item xs={12}>
          <div className={classes.thumbnailSmall}>
            <a target="_blank" href={newsArr[4].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[4].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLinkSmall}
            target="_blank"
            href={newsArr[4].url}
          >
            <Typography className={classes.titleSmall}>
              {newsArr[4].title}
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.thumbnailSmall}>
            <a target="_blank" href={newsArr[5].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[5].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLinkSmall}
            target="_blank"
            href={newsArr[5].url}
          >
            <Typography className={classes.titleSmall}>
              {newsArr[5].title}
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.thumbnailSmall}>
            <a target="_blank" href={newsArr[6].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[6].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLinkSmall}
            target="_blank"
            href={newsArr[6].url}
          >
            <Typography className={classes.titleSmall}>
              {newsArr[6].title}
            </Typography>
          </a>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.thumbnailSmall}>
            <a target="_blank" href={newsArr[7].url}>
              <img
                className={classes.thumbnailImg}
                alt="poster"
                src={newsArr[7].img}
              />
            </a>
          </div>
          <a
            className={classes.titleLinkSmall}
            target="_blank"
            href={newsArr[7].url}
          >
            <Typography className={classes.titleSmall}>
              {newsArr[7].title}
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}
