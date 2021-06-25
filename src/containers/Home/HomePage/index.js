import { Hidden } from "@material-ui/core";
import React from "react";
import Carousel from "../../../components/Carousel";

function HomePage(props) {
  return (
    <>
      <Hidden xsDown>
        <Carousel />
      </Hidden>
    </>
  );
}

export default HomePage;
