import React , {useState} from 'react'
import './ingredientForm.css'

const IngredientForm = props => {
    const [namestate , getNameState] = useState('')
    const [amountstate , getAmountState] = useState('')

    return ( <form className="ingredientForm">
        <label>Name</label>
        <input type="text" value={namestate} onChange={(event) => getNameState(event.target.value) }/>
        <label>Amount</label>
        <input type="number" value={amountstate} onChange={event => getAmountState(event.target.value)}/>
        <button className="btn" onClick={event => props.ingredientHandler(event , namestate , amountstate)}>Add ingredient</button>
    </form>)
}

export default IngredientForm