import React, { Component } from "react";
import WhiteSpace from "../global/WhiteSpace";
import Searchbar from "../global/Searchbar.js";
import CategoryList from "../Category/CategoryList.js";
import CategoryPageHeader from "../Category/CategoryPageHeader.js";


export default class Home extends Component {

  handleSearch = (textToFilter) => {

    let state = {
      categories: '',
      filterCategoriesBy: '',
    }

    this.setState({
      filterCategoriesBy: textToFilter
    });
    console.log(this.state)
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