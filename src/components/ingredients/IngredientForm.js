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
        <div>
        <button className="btn" onClick={event => props.ingredientHandler(event , namestate , amountstate)}>Add ingredient</button>
        <span className='spinner'>{props.spinner}</span>
        </div>
    </form>)
}

export default IngredientForm