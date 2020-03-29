import React from "react";
import "../../styles/Category.css"
import CategoryListItem from "./CategoryListItem.js"

const CategoryList = props => {
return (
    <div className="categoryList sidePaddings">
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
        <CategoryListItem/>
    </div>
    )
}

export default CategoryList;