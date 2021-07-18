import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import BookingDetail from "../containers/Home/BookingDetail";
import HomePage from "../containers/Home/HomePage";

export const routeHome = [
  { exact: true, path: ["/", "/home"], component: HomePage },
  { exact: false, path: "/booking-detail/:maPhim", component: BookingDetail },
];

export const routeAdmin = [];

export const routeAuth = [
  { exact: false, path: "/login", component: Login },
  { exact: false, path: "/register", component: Register },
];
