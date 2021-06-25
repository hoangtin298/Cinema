import React from "react";
import { Route } from "react-router";

const LayoutAdmin = (props) => {
  return <>{props.children}</>;
};

const Admin = (props) => {
  return (
    <LayoutAdmin>
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    </LayoutAdmin>
  );
};

export default Admin;
