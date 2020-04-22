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
                    <a className="navbar-item" href="wa">
                        <Link className="logo" to='/'>
                        <img src= '/images/memestack.png' width="120" height="" />        
                        </Link>
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
                        <div className="topPadding5">
                            <a class="button is-white is-medium is-facebook darkblue">
                                <span class="icon">
                                <i class="fab fa-facebook fa-lg darkblue"></i>
                                </span>
                            </a>
                            <a class="button is-white is-medium is-twitter darkblue">
                                <span class="icon">
                                <i class="fab fa-twitter fa-lg darkblue"></i>
                                </span>
                            </a>
                            <a class="button is-white is-medium darkblue">
                                <span class="icon">
                                <i class="fab fa-instagram fa-lg darkblue"></i>
                                </span>
                            </a>
                            <a class="button is-white is-medium darkblue">
                                <span class="icon">
                                <i class="fab fa-youtube fa-lg darkblue"></i>
                                </span>
                            </a>
                        </div>
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