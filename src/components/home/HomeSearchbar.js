import React, { useState} from "react";

const HomeSearchbar = props => {

return (
    <div className="marginBot">
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
        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                    <ul>
                    <li className="is-active">
                        <a>Overview</a>
                    </li>
                    <li>
                        <a>Modifiers</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
}

export default HomeSearchbar;