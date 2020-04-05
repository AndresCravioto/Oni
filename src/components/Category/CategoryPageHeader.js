import React from "react";
import "../../styles/Category.css"

const CategoryPageHeader = props => {
return (
    <div className="categoryPageHeader">
        <div className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                <h1 className="title">
                    Primary bold title
                </h1>
                <h2 className="subtitle">
                    Primary bold subtitle
                </h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CategoryPageHeader;