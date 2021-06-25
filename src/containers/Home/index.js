import React from "react";
import { Route } from "react-router";
import TopBarHome from "../../components/TopBarHome";

const LayoutHome = (props) => {
  return (
    <>
      <TopBarHome />
      {props.children}
    </>
  );
};

const Home = (props) => {
  return (
    <LayoutHome>
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    </LayoutHome>
  );
};

export default Home;
