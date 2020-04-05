import React from "react";
import "../../styles/Home.css"

const MoreCategoriesOptions = props => {

return (
    <div className="sidePaddings100 grayText topBorder">
        <div className="">
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Primera Columna</p>
                <ul>
                    <li>Categoría 1</li>
                    <li>Categoría 2</li>
                    <li>Categoría 3</li>
                </ul>
            </div>
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Segunda Columna</p>
                <ul>
                    <li>Categoría 1</li>
                    <li>Categoría 2</li>
                    <li>Categoría 3</li>
                </ul>
            </div>
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Tercer Columna</p>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="footerColumn lineHeight">
                <br></br>
                <p className="boldText">Cuarta Columna</p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        
    </div>
    )
}

export default MoreCategoriesOptions;