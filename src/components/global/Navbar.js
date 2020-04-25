import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App.js';

const Navbar = props => {

    const { loginState, setLoginState } = useContext(AuthContext);

    const handleLogout = (event) => {  
        setLoginState({token: ''})
    }
    const token = loginState.token;
    const username = loginState.username;
    
return (
        <div>
            <nav className="navbar has-shadow is-transparent mainBackground">
                <div className="navbar-brand">
                    <div className="navbar-item" href="wa">
                        <Link className="logo paddingLeft13" to='/'>
                        <img src= '/images/memestack.png' width="120" height="" alt=""/>        
                        </Link>
                    </div>
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
                            <div className="button is-white is-medium is-facebook darkblue">
                                <span className="icon">
                                <i className="fab fa-facebook fa-lg darkblue"></i>
                                </span>
                            </div>
                            <div className="button is-white is-medium is-twitter darkblue">
                                <span className="icon">
                                <i className="fab fa-twitter fa-lg darkblue"></i>
                                </span>
                            </div>
                            <div className="button is-white is-medium darkblue">
                                <span className="icon">
                                <i className="fab fa-instagram fa-lg darkblue"></i>
                                </span>
                            </div>
                            <div className="button is-white is-medium darkblue">
                                <span className="icon">
                                <i className="fab fa-youtube fa-lg darkblue"></i>
                                </span>
                            </div>
                        </div>
                        <div className="navbar-item">
                        <div className="buttons">
                            {username !== '' && token !== '' ? 
                                <Link className="button darkblue" to='/profile'>
                                Welcome {username}!
                                </Link>
                                : <Link className="button darkblue" to='/profile'>
                                Welcome stranger!
                            </Link> }
                            {token === '' ? 
                            <Link className="button darkblue" to='/signup'>
                                Signup
                            </Link> 
                            : <div>{loginState.userId}</div>}
                            {token === '' ? 
                            <Link className="button darkblue" to='/login'>
                                Login
                            </Link> : 
                            <Link className="button darkblue" to='/' onClick={ e => handleLogout(e)}>
                                Logout
                            </Link>}
                            
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