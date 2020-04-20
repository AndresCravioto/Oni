import React, { useState } from 'react';
import {updateUser} from '../../Services/authService.js';

const ProfileForm = props => {

    const [ formState, updateFormState ] = useState({
        name: '',
    })

    const handleFormSubmit = e => {
        e.preventDefault();
        updateUser(formState)
        updateFormState({
            name: '',
        })
    }

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
                    <input type="text" name="name" value={formState.name} onChange={ e => handleChange(e)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProfileForm