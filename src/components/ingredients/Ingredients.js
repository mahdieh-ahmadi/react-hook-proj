import React from 'react'

import IngredientForm from './IngredientForm'
import Search from './Search'
import IngredientList from './IngredientList'
import './ingredients.css'

function Ingredients() {
    return <div className="main">
            <IngredientForm/>
            <span>
                <Search />
                <ul className="list">
                    <IngredientList />
                    <IngredientList />
                    <IngredientList />
                </ul>
            </span>
        </div>
}

export default Ingredients