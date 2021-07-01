import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Skeleton from "@material-ui/lab/Skeleton";

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
    [theme.breakpoints.down("xs")]: {
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

    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  thumbnailSmall: {
    height: "50px",
    width: "50px",
    float: "left",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),

    [theme.breakpoints.down("xs")]: {
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

    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
}));

function NewsItemLarge(props) {
  const classes = useStyles();
  const { info } = props;
  return (
    <>
      <div className={classes.thumbnail}>
        <a target="_blank" rel="noreferrer" href={info.url}>
          <img className={classes.thumbnailImg} alt="poster" src={info.img} />
        </a>
      </div>
      <a
        className={classes.titleLink}
        target="_blank"
        rel="noreferrer"
        href={info.url}
      >
        <Typography className={classes.title}>{info.title}</Typography>
      </a>
      <Typography className={classes.desc}>{info.text}</Typography>
    </>
  );
}

function NewsItemMedium(props) {
  const classes = useStyles();
  const { info } = props;
  return (
    <>
      <div className={classes.thumbnail}>
        <a target="_blank" rel="noreferrer" href={info.url}>
          <img className={classes.thumbnailImg} alt="poster" src={info.img} />
        </a>
      </div>
      <a
        className={classes.titleLink}
        target="_blank"
        rel="noreferrer"
        href={info.url}
      >
        <Typography className={classes.title}>{info.title}</Typography>
      </a>
      <Typography className={classes.desc}>{info.text}</Typography>
    </>
  );
}

function NewsItemSmall(props) {
  const classes = useStyles();
  const { info } = props;
  return (
    <>
      <div className={classes.thumbnailSmall}>
        <a target="_blank" rel="noreferrer" href={info.url}>
          <img className={classes.thumbnailImg} alt="poster" src={info.img} />
        </a>
      </div>
      <a
        className={classes.titleLinkSmall}
        target="_blank"
        rel="noreferrer"
        href={info.url}
      >
        <Typography className={classes.titleSmall}>{info.title}</Typography>
      </a>
    </>
  );
}

function NewsItemLargeLoading(props) {
  return (
    <>
      <Skeleton variant="rect" height={248.13} />
      <Skeleton variant="text" height={56} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </>
  );
}
function NewsItemMediumLoading(props) {
  return (
    <>
      <Skeleton variant="rect" height={162.45} />
      <Skeleton variant="text" height={56} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </>
  );
}
function NewsItemSmallLoading(props) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Skeleton
        variant="rect"
        height={50}
        width={50}
        style={{ marginRight: "20px" }}
      />
      <div>
        <Skeleton variant="text" width={180} />
        <Skeleton variant="text" width={140} />
      </div>
    </div>
  );
}

export default function NewsItem(props) {
  const { newsArr, loading, id } = props;

  return (
    <Grid id={id} container spacing={2}>
      <Grid item xs={12} md={6}>
        {loading ? (
          <NewsItemLargeLoading />
        ) : (
          <NewsItemLarge info={newsArr[0]} />
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        {loading ? (
          <NewsItemLargeLoading />
        ) : (
          <NewsItemLarge info={newsArr[1]} />
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        {loading ? (
          <NewsItemMediumLoading />
        ) : (
          <NewsItemMedium info={newsArr[2]} />
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        {loading ? (
          <NewsItemMediumLoading />
        ) : (
          <NewsItemMedium info={newsArr[3]} />
        )}
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
          {loading ? (
            <NewsItemSmallLoading />
          ) : (
            <NewsItemSmall info={newsArr[4]} />
          )}
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <NewsItemSmallLoading />
          ) : (
            <NewsItemSmall info={newsArr[5]} />
          )}
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <NewsItemSmallLoading />
          ) : (
            <NewsItemSmall info={newsArr[6]} />
          )}
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <NewsItemSmallLoading />
          ) : (
            <NewsItemSmall info={newsArr[7]} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
