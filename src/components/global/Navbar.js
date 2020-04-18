import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App.js';

const Navbar = props => {

    const { loginState } = useContext(AuthContext);

    const token = loginState.token;

    console.log(token);

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
                            <Link className="button darkblue" to='/signup'>
                                Signup
                            </Link>
                            <Link className="button darkblue" to='/login'>
                                Login
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
            </div>
        </div>    // return some jsx here
    )
}

export default Navbar;