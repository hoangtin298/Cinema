import { Hidden } from "@material-ui/core";
import React from "react";
import Banner from "../../../components/Banner";
import Carousel from "../../../components/Carousel";
import News from "../../../components/News";
import Movie from "../../../components/Movie";
import Theater from "../../../components/Theater";

function HomePage(props) {
  return (
    <>
      <Hidden xsDown>
        <Carousel />
      </Hidden>
      <Movie />
      <Theater />
      <News />
      <Banner />
    </>
  );
}

export default HomePage;
