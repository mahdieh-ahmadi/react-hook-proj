import React from 'react'
import './ingredientForm.css'

const IngredientForm = () => {
    return ( <form className="ingredientForm">
        <label>Name</label>
        <input type="text"/>
        <label>Amount</label>
        <input type="number" />
        <button className="btn">Add ingredient</button>
    </form>)
}

export default IngredientForm