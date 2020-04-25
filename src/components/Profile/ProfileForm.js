import React, { useState } from 'react';
import {updateUser} from '../../Services/authService.js';

const ProfileForm = props => {

    const [ formState, updateFormState ] = useState({
        name: '',
        lastName: '',
        age: '',
        userId: localStorage.getItem('userId')
    })

    const handleFormSubmit = e => {
        e.preventDefault();
        updateUser(formState)
        updateFormState({
            name: '',
        })
    }

    const handleChange = (event) => {  
        console.log(formState)
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
    }

    return (
        <div>
            <form className="center" onSubmit={handleFormSubmit}>
                <label className="paddingLeft35">Name:</label>
                    <input className="darkBlueBorder" type="text" name="name" value={formState.name} onChange={ e => handleChange(e)}/>
                    <br></br>
                <label>Last Name:</label>
                    <input className="darkBlueBorder" type="text" name="lastName" value={formState.lastName} onChange={ e => handleChange(e)}/>
                    <br></br>
                <label className="paddingLeft47">Age:</label>
                    <input className="darkBlueBorder" type="text" name="age" value={formState.age} onChange={ e => handleChange(e)}/>
                <input className="marginLeft100" type="submit" value="Update Profile" />
                <div className="height600"></div>
            </form>
        </div>
    )
}

export default ProfileForm