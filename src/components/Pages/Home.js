import React, { Component } from "react";
import HomeSearchbar from "../home/HomeSearchbar.js";
import Carousel from "../home/Carousel.js";
import Footer from "../home/Footer.js";


export default class Home extends Component {
  render() {
    return (
      <div>
          <HomeSearchbar/>
          <Carousel/>
          <Footer/>
      </div>
    );
  }
}