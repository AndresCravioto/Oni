import React from "react";
import "../../styles/Home.css"

const MoreCategoriesOptions = props => {

return (
    <div className="sidePaddings100 grayText topBorder">
        <div className="">
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Categories</p>
                <ul>
                    <li>Food</li>
                    <li>Gaming</li>
                    <li>Sports</li>
                    <li>Music</li>
                    <li>Movies</li>
                    <li>Books</li>
                </ul>
            </div>
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">About us</p>
                <ul>
                    <li>Press and News</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Support</p>
                <ul>
                    <li>Help and Support</li>
                    <li>Meeting on </li>
                </ul>
            </div>
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Community</p>
                <ul>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Forum</li>
                    <li>Community Standards</li>
                    <li>Invite your friends!</li>
                </ul>
            </div>
        </div>
        
    </div>
    )
}

export default MoreCategoriesOptions;