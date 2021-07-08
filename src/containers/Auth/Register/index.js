import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BackgroundImg from "../../../assets/Auth/bg-sign.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import axios from "axios";
import Swal from "sweetalert2";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${BackgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  main: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:
      "linear-gradient(to bottom,rgba(20,50,93,.95),rgba(8,22,48,.95))",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  header: {
    color: theme.palette.common.white,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bottomLink: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  closeBox: {
    position: "absolute",
    top: "-18px",
    right: "-18px",

    width: "36px",
    height: "36px",
    borderRadius: "50%",

    backgroundColor: "#081630",
    color: "#455570",
    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 50%)",
    cursor: "pointer",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    transition: "all .2s",

    "&:hover": {
      opacity: ".7",
    },
  },
}));

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    "& .MuiInputBase-input:-webkit-autofill": {
      WebkitBackgroundClip: "text !important",
      WebkitTextFillColor: "white !important",
    },
  },
})(TextField);

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Tài khoản đang trống !"),
  matKhau: yup.string().required("Mật khẩu đang trống !"),
  hoTen: yup.string().required("Họ và tên đang trống !"),
  email: yup.string().required("Email đang trống !"),
  soDt: yup
    .string()
    .required("Số điện thoại đang trống !")
    .matches(phoneRegExp, "Số điện thoại không đúng định dạng !"),
});

function Register(props) {
  const classes = useStyles();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    setLoginError(null);
    data["maNhom"] = "GP09";
    data["maLoaiNguoiDung"] = "KhachHang";
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
      method: `POST`,
      data,
    })
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công",
          showDenyButton: true,
          showCancelButton: true,

          confirmButtonText: "Trang chủ",
          denyButtonText: "Đăng nhập",
          cancelButtonText: "Đóng",
        }).then((resultSwal) => {
          if (resultSwal.isConfirmed) {
            history.push("/");
          } else if (resultSwal.isDenied) {
            history.push("/login");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.response.data);
      });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.main} component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.header} component="h1" variant="h1">
            Đăng ký
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            noValidate
          >
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="taiKhoan"
              label="Tài khoản"
              name="taiKhoan"
              autoComplete="taiKhoan"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
              {...register("taiKhoan")}
              error={!!errors.taiKhoan}
              helperText={errors?.taiKhoan?.message}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="matKhau"
              label="Mật Khẩu"
              type={showPassword ? "text" : "password"}
              id="matKhau"
              autoComplete="matKhau"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      color="primary"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("matKhau")}
              error={!!errors.matKhau}
              helperText={errors?.matKhau?.message}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="hoTen"
              label="Họ và Tên"
              id="hoTen"
              autoComplete="hoTen"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
              {...register("hoTen")}
              error={!!errors.hoTen}
              helperText={errors?.hoTen?.message}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              autoComplete="email"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
              {...register("email")}
              error={!!errors.email}
              helperText={errors?.email?.message}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="soDt"
              label="Số điện thoại"
              id="soDt"
              autoComplete="soDt"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
              {...register("soDt")}
              error={!!errors.soDt}
              helperText={errors?.soDt?.message}
            />

            {/* In ra loi neu dang nhap that bai */}
            {loginError ? (
              <Alert style={{ marginTop: "15px" }} severity="error">
                {loginError}
              </Alert>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Đăng Ký
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="login" className={classes.bottomLink} variant="body2">
                  {"Bạn đã có tài khoản ?"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Link to="/" className={classes.closeBox}>
            <CloseRoundedIcon />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Register;
