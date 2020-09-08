import React,{useState , useEffect} from 'react'

import IngredientForm from './IngredientForm'
import Search from './Search'
import IngredientList from './IngredientList'
import './ingredients.css'


const Ingredients = () => {
    const [userIngredients, setUserIngredients] = useState([]);

    useEffect(() => {
        fetch('https://react-hook-initial.firebaseio.com/list-of-data.json',{
            method:'GET',
            headers : {'Content-type' :'application/json' }
        }).then(response =>  response.json() )
          .then(data => {
              const dataList = []
              for(let i in data){
                  dataList.push({...data[i] , key : i})
              }
              setUserIngredients(dataList)
            })
    }, [])

    const ingredientHandler = (event , name , amount ) => {
        event.preventDefault()
        let newdata = {
            name : name,
            amount : amount
        }
        fetch('https://react-hook-initial.firebaseio.com/list-of-data.json',{
            method:'POST',
            body :JSON.stringify(newdata) ,
            headers : {'Content-type' :'application/json' }
        }).then(response => response.json())
        .then(data => {
            const dataList = {...newdata , key : data.name}
            setUserIngredients([...userIngredients,dataList])
        })
    };

    const deletItemHandler = (key) => {
        let updatedate = userIngredients.filter((item) =>  item.key !== key.target.id)
        setUserIngredients(updatedate)
        fetch(`https://react-hook-initial.firebaseio.com/list-of-data/${key.target.id}.json`,{
            method:'DELETE',
            headers : {'Content-type' :'application/json' }
        })
    }

    const items = userIngredients.map(i => <IngredientList 
        name={i.name} 
        amount={i.amount} 
        id = {i.key}
        key={i.key}
        deletItemHandler={key => deletItemHandler(key)}/>)

    const Filter = event => {
        event.target.value === '' ? (
            console.log('empty')
        ):(
            console.log(event.target.value)
        )
       
    }

    return (<div className="main">
            <IngredientForm ingredientHandler={ ingredientHandler} />
            <span>
                <Search filter={Filter}/>
                <ul className="list">
                   {items}
                </ul>
            </span>
        </div>);
};

export default Ingredients;