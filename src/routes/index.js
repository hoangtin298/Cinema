import Login from "../containers/Auth/Login";
import Register from "../containers/Auth/Register";
import HomePage from "../containers/Home/HomePage";

export const routeHome = [{ exact: true, path: "/", component: HomePage }];

export const routeAdmin = [];

export const routeAuth = [
  { exact: false, path: "/login", component: Login },
  { exact: false, path: "/register", component: Register },
];
