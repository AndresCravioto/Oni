import React, { Component } from "react";
import Navbar from "../global/Navbar.js";
import WhiteSpace from "../global/WhiteSpace";
import Searchbar from "../global/Searchbar.js";
import CategoryList from "../Category/CategoryList.js";
import CategoryPageHeader from "../Category/CategoryPageHeader.js";


export default class Home extends Component {
    render() {
      return (
        <div>
            <Navbar/>
            <Searchbar/>
            <CategoryPageHeader/>
            <CategoryList/>
            <WhiteSpace/>
        </div>
      );
    }
  }