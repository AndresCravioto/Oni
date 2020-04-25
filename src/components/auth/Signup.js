import React, { useState } from 'react';
import {createUser} from '../../Services/authService.js';
import { useHistory } from 'react-router-dom';

const SignupForm = props => {

    let history = useHistory();

    const [ formState, updateFormState ] = useState({
        email: '',
        password: ''
    })

    const handleFormSubmit = e => {
        e.preventDefault();
        createUser(formState)
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
                    <input className="darkBlueBorder" type="text" name="email" value={formState.email} onChange={ e => handleChange(e)}/>
                <label>Password:</label>
                    <input className="darkBlueBorder" name="password" value={formState.password} onChange={ e => handleChange(e)} />
                <input className="marginLeft120" type="submit" value="Submit" />
                <div className="height600"></div>
            </form>
        </div>
    )
}

export default SignupForm