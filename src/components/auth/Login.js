import React, { useState, useContext } from 'react';
import {login} from '../../Services/authService.js';
import { AuthContext } from '../../App.js';
import axiosProvider from '../../Services/axiosProvider.js';
import { useHistory } from 'react-router-dom';

const LoginForm = props => {

    let history = useHistory();

    const { setLoginState } = useContext(AuthContext);

    const [ formState, updateFormState ] = useState({
        email: '',
        password: ''
    })

    const handleFormSubmit = e => {
        e.preventDefault();
        login(formState)      
        .then(response => {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userId', response.data.userId)
            axiosProvider.defaults.headers.common['auth'] = response.data.token;
            setLoginState({token: response.data.token})
            setLoginState({userId: response.data.userId})
            setLoginState({username: response.data.username})
            
        })
        .catch(error => console.log(error))
        updateFormState({
            email: '',
            password: ''
        })
        history.push('/')
    }

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
    }

    return (
        <div>
            <form className="center" onSubmit={handleFormSubmit}>
                <label className="paddingLeft31">Email:</label>
                    <input className="darkBlueBorder"  name="email" value={formState.email} onChange={ e => handleChange(e)}/>
                    <br></br>
                <label>Password:</label>
                    <input className="darkBlueBorder" name="password" value={formState.password} onChange={ e => handleChange(e)} />
                    <br></br>
                <input className="marginLeft120" type="submit" value="Submit" />
                <div className="height600"></div>
            </form>
        </div>
    )
}

export default LoginForm