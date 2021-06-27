import React from "react";
import Container from "@material-ui/core/Container";
import { Hidden, Divider } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import { arrImg1, arrImg2, arrImg3, arrImg4 } from "./data";
import AndroidLogo from "../../assets/Footer/android-logo.png";
import AppleLogo from "../../assets/Footer/apple-logo.png";
import ThongBaoLogo from "../../assets/Footer/daThongBao-logo.png";
import FacebookLogo from "../../assets/Footer/facebook-logo.png";
import ZaloLogo from "../../assets/Footer/zalo-logo.png";
import ZionLogo from "../../assets/Footer/zion-logo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  containerTop: {},
  containerLeft: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 4px 0 !important",
      justifyContent: "center",
    },
    "& div": {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
      "& a": {
        textDecoration: "none",
        display: "block",

        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "2.3",
        whiteSpace: "nowrap",

        color: "#949494",

        transition: "all .2s",
        "&:hover": {
          color: theme.palette.common.white,
        },

        [theme.breakpoints.down("sm")]: {
          display: "inline-block",
          margin: "0 5px",
        },
      },
    },
  },
  headerText: {
    display: "block",
    width: "100%",

    color: theme.palette.common.white,

    fontSize: "12px",
    fontWeight: 500,
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linePartner: {
    marginBottom: "15px",

    "& a": {
      textDecoration: "none",
      cursor: "pointer",

      "& img": {
        width: "30px",
        height: "30px",

        backgroundColor: "white",
        borderRadius: "50%",

        marginRight: "20px",

        transition: "all .2s",
        "&:hover": {
          opacity: ".7",
        },
      },
    },
  },
  containerMiddle: {},
  containerRight: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 4px 0 !important",
      justifyContent: "center",
    },
    "& div": {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        marginRight: "80px",
      },
      [theme.breakpoints.down("770")]: {
        marginRight: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: "0",
      },
    },
    "& a": {
      "& img": {
        background: "0 0",
        height: "30px",
        width: "auto",
        margin: "5px",
        [theme.breakpoints.down("sm")]: {
          marginRight: "10px",
        },
      },
    },
  },

  hrFooter: {
    backgroundColor: "#4a4a4a",
    margin: "20px 0",
  },

  containerBottom: {
    "& span": {
      display: "block",
      lineHeight: "1.8",
    },

    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  containerBottomCenter: {
    padding: "0 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 ",
    },
  },
  imgFooterBox: {
    textAlign: "center",
    padding: 0,
  },
  zion: {
    width: "80px",
    height: "auto",
    verticalAlign: "middle",

    borderRadius: "8px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "20px",
    },
  },
  boCongThuong: {
    float: "right",

    width: "110px",
    height: "auto",
    verticalAlign: "middle",
    [theme.breakpoints.down("xs")]: {
      float: "unset",
      width: "130px",

      marginTop: "10px",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const renderLinePartner = (arr) => {
    return arr.map((item) => {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer"
          title={item.tenHinh}
          key={item.tenHinh}
        >
          <img alt={item.tenHinh} src={item.linkHinh} />
        </a>
      );
    });
  };

  return (
    <footer
      style={{
        backgroundColor: "#222",
        padding: "20px 0",
        color: "#949494",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          className={classes.containerTop}
        >
          <Grid container item md={4} sm={6} className={classes.containerLeft}>
            <Typography variant="h6" className={classes.headerText}>
              TIX
            </Typography>
            <Grid item md={6} sm={12} component="div">
              <a href="https://tix.vn/faq" target="_blank" rel="noreferrer">
                FAQ
              </a>
              <a
                href="https://tix.vn/brand-guideline/"
                target="_blank"
                rel="noreferrer"
              >
                Brand Guidelines
              </a>
            </Grid>
            <Grid item md={6} sm={12} component="div">
              <a
                href="https://tix.vn/thoa-thuan-su-dung"
                target="_blank"
                rel="noreferrer"
              >
                Thỏa thuận sử dụng
              </a>
              <a
                href="https://tix.vn/chinh-sach-bao-mat"
                target="_blank"
                rel="noreferrer"
              >
                Chính sách bảo mật
              </a>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid container item md={4} className={classes.containerMiddle}>
              <Typography variant="h6" className={classes.headerText}>
                ĐỐI TÁC
              </Typography>
              <Grid item md={12} className={classes.linePartner}>
                {renderLinePartner(arrImg1)}
              </Grid>
              <Grid item md={12} className={classes.linePartner}>
                {renderLinePartner(arrImg2)}
              </Grid>
              <Grid item md={12} className={classes.linePartner}>
                {renderLinePartner(arrImg3)}
              </Grid>
              <Grid item md={12} className={classes.linePartner}>
                {renderLinePartner(arrImg4)}
              </Grid>
            </Grid>
          </Hidden>
          <Grid container item md={4} sm={6} className={classes.containerRight}>
            <Grid item md={6} component="div">
              <Typography variant="h6" className={classes.headerText}>
                MOBILE APP
              </Typography>
              <a
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                target="_blank"
                rel="noreferrer"
                title="Apple App"
              >
                <img alt="apple app" src={AppleLogo} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank"
                rel="noreferrer"
                title="Android App"
              >
                <img alt="android app" src={AndroidLogo} />
              </a>
            </Grid>
            <Grid item md={6} component="div">
              <Typography variant="h6" className={classes.headerText}>
                SOCIAL
              </Typography>
              <a
                href="https://www.facebook.com/tix.vn/"
                target="_blank"
                rel="noreferrer"
                title="Facebook App"
              >
                <img alt="facebook app" src={FacebookLogo} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                target="_blank"
                rel="noreferrer"
                title="Zalo App"
              >
                <img alt="zalo app" src={ZaloLogo} />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Divider className={classes.hrFooter} />

        <Grid
          container
          alignItems="flex-start"
          className={classes.containerBottom}
        >
          <Grid item md={1} sm={2} xs={12} className={classes.imgFooterBox}>
            <img
              src={ZionLogo}
              alt="zion-logo"
              title="Zion"
              className={classes.zion}
            />
          </Grid>
          <Grid
            item
            md={10}
            sm={8}
            xs={12}
            className={classes.containerBottomCenter}
          >
            <Typography
              variant="h6"
              component="span"
              style={{ color: "#fff", fontWeight: 600 }}
            >
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </Typography>
            <Typography variant="h6" component="span">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </Typography>
            <Typography variant="h6" component="span">
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </Typography>
            <Typography variant="h6" component="span">
              Số Điện Thoại (Hotline): 1900 545 436
              <br />
              Email:
              <a
                style={{
                  color: "#FB4226",
                  textDecoration: "none",
                }}
                href="mailto:support@tix.vn"
                title="Support"
              >
                {" "}
                support@tix.vn
              </a>
            </Typography>
          </Grid>
          <Grid item md={1} sm={2} xs={12} className={classes.imgFooterBox}>
            <a
              href="http://online.gov.vn/Home/WebDetails/62782?AspxAutoDetectCookieSupport=1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ThongBaoLogo}
                alt="bo-cong-thuong-logo"
                title="Bộ công thương"
                className={classes.boCongThuong}
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
