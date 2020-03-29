import React, { Component } from "react";
import Navbar from "../global/Navbar.js";
import WhiteSpace from "../global/WhiteSpace";
import HomeSearchbar from "../home/HomeSearchbar.js";
import Carousel from "../home/Carousel.js";
import Searchbar from "../global/Searchbar.js";


export default class Home extends Component {
    render() {
      return (
        <div>
            <Navbar/>
            <Searchbar/>
            <HomeSearchbar/>
            <Carousel/>
            <WhiteSpace/>
        </div>
      );
    }
  }