import React,{useState } from 'react'

import IngredientForm from './IngredientForm'
import Search from './Search'
import IngredientList from './IngredientList'
import './ingredients.css'


const Ingredients = () => {
    const [userIngredients, setUserIngredients] = useState([]);

    const ingredientHandler = (event , name , amount ) => {
        event.preventDefault()
        let newdata = {
            name : name,
            amount : amount,
            key : Math.random()*10
        }
        setUserIngredients([...userIngredients,newdata])
    };

    const deletItemHandler = (key) => {
        let updatedate = userIngredients.filter((item) =>  item.key !== parseFloat(key.target.id))
        setUserIngredients(updatedate)
    }

    const items = userIngredients.map(i => <IngredientList 
        name={i.name} 
        amount={i.amount} 
        id = {i.key}
        key={i.key}
        deletItemHandler={key => deletItemHandler(key)}/>)

    return (<div className="main">
            <IngredientForm ingredientHandler={ ingredientHandler} />
            <span>
                <Search />
                <ul className="list">
                   {items}
                </ul>
            </span>
        </div>);
};

export default Ingredients;