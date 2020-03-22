import React, { useState} from "react";

const Navbar = props => {

    /*
    const [logged, updateLogged ] = useState([1, 'hola']);
    
    updateLogged([2, 'adios']);
*/

return (
        <div>
            <nav className="navbar has-shadow is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png"width="112" height="28" />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                        <div className="buttons">
                            <button className="button red is-outlined">Login</button>
                            <button className="button darkblue is-outlined">Signup</button>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>    // return some jsx here
    )
}

export default Navbar;