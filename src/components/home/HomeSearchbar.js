import React from "react";
import { Link } from 'react-router-dom';

const HomeSearchbar = props => {

return (
    <div className="marginBot">
        <div className="hero is-medium is-primary is-bold">
            <Link className="hero-body" to='/meme'>
                <div className="container">
                <h1 className="title">
                    Create a meme and share it
                </h1>
                <h2 className="subtitle">
                    Or look for one in our collection!
                </h2>
                </div>
            </Link>
        </div>
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                    <li className="is-active">
                        <p>Overview</p>
                    </li>
                    <li>
                        <p>Modifiers</p>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default HomeSearchbar;