import React, { Component } from "react";
import Navbar from "../global/Navbar.js";
import WhiteSpace from "../global/WhiteSpace";
import HomeSearchbar from "../home/HomeSearchbar.js";
import Carousel from "../home/Carousel.js";


export default class Home extends Component {
    render() {
      return (
        <div>
            <Navbar/>
            <HomeSearchbar/>
            <Carousel/>
            <WhiteSpace/>
        </div>
      );
    }
  }