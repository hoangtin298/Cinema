import { Hidden } from "@material-ui/core";
import React from "react";
import Banner from "../../../components/Banner";
import Carousel from "../../../components/Carousel";
import News from "../../../components/News";

function HomePage(props) {
  return (
    <>
      <Hidden xsDown>
        <Carousel />
      </Hidden>
      <News />
      <Banner />
    </>
  );
}

export default HomePage;
