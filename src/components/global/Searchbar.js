import React, { useState } from "react";
import "../../styles/searchbar.css";

const Searchbar = props => {


    const [ formState, updateFormState ] = useState({
        categories: ''
    })

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
        props.setFilterCategories(event.target.value);
    }

return (
    <div className="flex ">
        <div className="field searchbarInput">
            <div className="control">
                <input className="input darkblue" name="searchValue" type="text" placeholder="Find Categories"></input>
            </div>
            <input type="text" name="categories" value={formState.searchValue} onChange={ e => handleChange(e)}/>
        </div>
        <div className="buttons searchbarButton">
            <button className="button whiteText darkblueBackground">Search</button>
        </div>
    </div>
    )
}

export default Searchbar;