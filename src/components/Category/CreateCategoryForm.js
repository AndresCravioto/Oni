import React, { useState } from 'react';
import CategoryService from '../../Services/categoryService.js';

const CreateCategoryForm = props => {

    const [ formState, updateFormState ] = useState({
        categoryName: '',
        description: '',
        image: '',
    })

    const categoryService = new CategoryService();

    const handleFormSubmit = e => {
        e.preventDefault();
        categoryService.createCategory(formState)
        updateFormState({
            categoryName: '',
            description: '',
            image: ''
        })
    }

    const handleChange = (event) => {  
        const { name, value } = event.target;
        updateFormState(Object.assign({}, formState, {[name]: value}))
        console.log(formState);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Title:</label>
                    <input type="text" name="categoryName" value={formState.categoryName} onChange={ e => handleChange(e)}/>
                <label>Description:</label>
                    <textarea name="description" value={formState.description} onChange={ e => handleChange(e)} />
                <label>Image:</label>
                    <input type="text" name="image" value={formState.image} onChange={ e => handleChange(e)}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreateCategoryForm