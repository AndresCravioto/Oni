import React from "react";
import "../../styles/searchbar.css";

const Searchbar = props => {
return (
    <div className="flex ">
        <div className="field searchbarInput">
            <div className="control">
                <input className="input darkblue" type="text" placeholder="Find Categories"></input>
            </div>
        </div>
        <div className="buttons searchbarButton">
            <button className="button whiteText darkblueBackground">Search</button>
        </div>
    </div>
    )
}

export default Searchbar;