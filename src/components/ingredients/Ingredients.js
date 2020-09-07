import React from 'react'

import IngredientForm from './IngredientForm'
import Search from './Search'

function Ingredients() {
    return <div>
            <IngredientForm/>
            <span>
                <Search />
            </span>
        </div>
}

export default Ingredients