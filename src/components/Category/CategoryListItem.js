import React from "react";
import "../../styles/Category.css"

const CategoryListItem = props => {
return (
    <div className="card categoryListItem">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://image.freepik.com/free-photo/young-couple-lying-mat-playing-video-game_23-2148152803.jpg" alt="Placeholder image"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">Category Name</p>
                </div>
            </div>

            <div className="content">
                Category Description
            </div>
        </div>
    </div>
    )
}

export default CategoryListItem;