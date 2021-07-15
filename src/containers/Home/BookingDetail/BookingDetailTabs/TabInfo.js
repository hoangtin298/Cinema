import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  thongTinLeftContainer: {
    color: theme.palette.common.white,
  },
  thongTinLeftBox: {
    marginBottom: "10px",
    "&:after": {
      display: "block",
      content: "''",
      clear: "both",
    },
  },
  thongTinTitleLeft: {
    display: "inline-block",
    float: "left",
    width: "35%",
    marginBottom: "10px",
  },
  thongTinInfo: {
    display: "inline-block",
    float: "left",
    width: "40%",
    marginBottom: "10px",
    color: "#e9e9e9",
  },

  thongTinRightContainer: {
    color: theme.palette.common.white,
  },

  thongTinTitleRight: {
    display: "inline-block",
    marginBottom: "20px",
  },
  thongTinDesc: {
    display: "inline-block",

    marginBottom: "10px",
    color: "#e9e9e9",

    textAlign: "justify",
    whiteSpace: "pre-wrap",
  },
}));

function TabInfo(props) {
  const { data } = props;
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <div className={classes.thongTinLeftContainer}>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Ngày công chiếu
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                {moment(data.ngayKhoiChieu).format("DD.MM.YYYY")}
              </Typography>
            </div>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Đạo diễn
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                Nguyễn Hoàng Tín
              </Typography>
            </div>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Diễn viên
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                Kim Ji-soo, Lalisa Manobal, Kim Jennie, Rosé
              </Typography>
            </div>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Thể loại
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                Action, Thriller, Crime
              </Typography>
            </div>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Định dạng
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                2D/Digitals
              </Typography>
            </div>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Đánh giá
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                {data.danhGia}/10
              </Typography>
            </div>
            <div className={classes.thongTinLeftBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinTitleLeft}
              >
                Quốc gia
              </Typography>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinInfo}
              >
                Việt Nam
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.thongTinRightContainer}>
            <Typography
              variant="h4"
              component="p"
              className={classes.thongTinTitleRight}
            >
              Nội dung
            </Typography>

            <div className={classes.thongTinRightBox}>
              <Typography
                variant="h4"
                component="p"
                className={classes.thongTinDesc}
              >
                {data.moTa}
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TabInfo;
