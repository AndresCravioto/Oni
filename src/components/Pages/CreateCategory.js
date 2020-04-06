import React, { Component } from "react";
import Navbar from "../global/Navbar.js";
import CreateCategoryForm from "../Category/CreateCategoryForm.js";


export default class Home extends Component {
    render() {
      return (
        <div>
            <Navbar/>
            <CreateCategoryForm/>
        </div>
        );
    }
}