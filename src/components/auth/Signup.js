import React, { useState } from 'react';
import {createUser} from '../../Services/authService.js';

const SignupForm = props => {

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

export default SignupForm