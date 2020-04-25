import React, { Component } from "react";
import WhiteSpace from "../global/WhiteSpace";
import Searchbar from "../global/Searchbar.js";
import CategoryList from "../Category/CategoryList.js";
import CategoryPageHeader from "../Category/CategoryPageHeader.js";


export default class Home extends Component {

  handleSearch = (textToFilter) => {

    this.setState({
      filterCategoriesBy: textToFilter
    });
  }

  
  
    render() {
      return (
        <div>
            <Searchbar setFilterCategories={this.handleSearch}/>
            <CategoryPageHeader/>
            <CategoryList/>
            <WhiteSpace/>
        </div>
      );
    }
  }