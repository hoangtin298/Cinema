import React, { useEffect, useState } from "react";
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
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
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
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

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

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập tài khoản !"),
  matKhau: yup.string().required("Vui lòng nhập mật khẩu !"),
});

export default function LogIn() {
  const classes = useStyles();
  const history = useHistory();

  const [loginError, setLoginError] = useState(null);
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  useEffect(() => {
    if (localStorage.getItem("nhoTaiKhoan")) {
      setRemember(true);
      setUser(JSON.parse(localStorage.getItem("nhoTaiKhoan")));
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log("data", data);
    setLoginError(null);
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      method: `POST`,
      data,
    })
      .then((result) => {
        if (remember) {
          localStorage.setItem("nhoTaiKhoan", JSON.stringify(data));
        } else {
          localStorage.removeItem("nhoTaiKhoan");
        }

        localStorage.setItem("dangNhap", JSON.stringify(result.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",

          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          history.replace("/");
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        setLoginError(error.response.data);
      });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.main} component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonOutlineOutlinedIcon />
          </Avatar>
          <Typography className={classes.header} component="h1" variant="h1">
            Đăng nhập
          </Typography>
          <form
            className={classes.form}
            // onSubmit={handleSubmit(onSubmit)}
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
              {...register("taiKhoan")}
              error={!!errors.taiKhoan}
              helperText={errors?.taiKhoan?.message}
              value={user.taiKhoan}
              onChange={handleChange}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
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
              {...register("matKhau")}
              error={!!errors.matKhau}
              helperText={errors?.matKhau?.message}
              value={user.matKhau}
              onChange={handleChange}
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
            />
            <FormControlLabel
              style={{
                color: "white",
              }}
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  style={{ color: "white" }}
                  checked={remember}
                />
              }
              label="Nhớ tài khoản"
              onChange={() => setRemember(!remember)}
            />

            {/* In ra loi neu dang nhap that bai */}
            {loginError ? <Alert severity="error">{loginError}</Alert> : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(event) => {
                event.preventDefault();
                onSubmit(user);
              }}
            >
              Đăng Nhập
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  to="register"
                  className={classes.bottomLink}
                  variant="body2"
                >
                  {"Bạn chưa có tài khoản ?"}
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
