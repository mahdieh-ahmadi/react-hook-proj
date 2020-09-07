import React from 'react'
import './ingredientList.css'

const IngredientList = props => {
    return  <li className="item" onClick={props.deletItemHandler} id={props.id}>
            <p>{props.name}</p>
            <p>{props.amount}x</p>
        </li>
   
}

export default IngredientList