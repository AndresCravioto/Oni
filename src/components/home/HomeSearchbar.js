import React from "react";
import { Link } from 'react-router-dom';

const HomeSearchbar = props => {

return (
    <div>
        <div className="hero-image">
            <Link className="hero-text" to='/meme'>
                <p className="heroTitle">Meme Stack</p>
                <p className="heroTitle2">Best solution against depression</p>
                <h2>Click here to make a meme</h2>
            </Link>
        </div>
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
            </nav>
        </div>
    </div>
    )
}

export default HomeSearchbar;