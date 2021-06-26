import { Hidden } from "@material-ui/core";
import React from "react";
import Banner from "../../../components/Banner";
import Carousel from "../../../components/Carousel";

function HomePage(props) {
  return (
    <>
      <Hidden xsDown>
        <Carousel />
      </Hidden>
      <Banner />
    </>
  );
}

export default HomePage;
