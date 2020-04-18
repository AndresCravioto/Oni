import React, { useState, useContext } from 'react';
import {login} from '../../Services/authService.js';
import { AuthContext } from '../../App.js';

const LoginForm = props => {

    const { loginState, setLoginState } = useContext(AuthContext);

    const [ formState, updateFormState ] = useState({
        email: '',
        password: ''
    })

    const handleFormSubmit = e => {
        e.preventDefault();
        login(formState)      
        .then(response => {
            localStorage.setItem('token', response.data.token)
            setLoginState({token: response.data.token})
        })
        .catch(error => console.log(error))
        updateFormState({
            email: '',
            password: ''
        })
    }

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Email:</label>
                    <input type="text" name="email" value={formState.email} onChange={ e => handleChange(e)}/>
                <label>Password:</label>
                    <textarea name="password" value={formState.password} onChange={ e => handleChange(e)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default LoginForm