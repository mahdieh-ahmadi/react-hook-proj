import React,{useState , useEffect , useCallback} from 'react'

import IngredientForm from './IngredientForm'
import Search from './Search'
import IngredientList from './IngredientList'
import Spinner from '../UI/spinner'
import './ingredients.css'


const Ingredients = () => {
    const [userIngredients, setUserIngredients] = useState([]);
    const [showProcess, setshowProcess] = useState(false);


    useEffect(() => {
        setshowProcess(true)
        fetch('https://react-hook-initial.firebaseio.com/list-of-data.json',{
            method:'GET',
            headers : {'Content-type' :'application/json' }
        }).then(response =>  response.json() )
          .then(data => {
              const dataList = []
              for(let i in data){
                  dataList.push({...data[i] , key : i})
              }
              setshowProcess(false)
              setUserIngredients(dataList)
            })
    }, [])

    const ingredientHandler = (event , name , amount ) => {
        event.preventDefault()
        let newdata = {
            name : name,
            amount : amount
        }
        setshowProcess(true)
        fetch('https://react-hook-initial.firebaseio.com/list-of-data.json',{
            method:'POST',
            body :JSON.stringify(newdata) ,
            headers : {'Content-type' :'application/json' }
        }).then(response => response.json())
        .then(data => {
            const dataList = {...newdata , key : data.name}
            setshowProcess(false)
            setUserIngredients([...userIngredients,dataList])
        })
    };

    const deletItemHandler = (key) => {
        let updatedate = userIngredients.filter((item) =>  item.key !== key.target.id)
        setshowProcess(true)
        
        fetch(`https://react-hook-initial.firebaseio.com/list-of-data/${key.target.id}.json`,{
            method:'DELETE',
            headers : {'Content-type' :'application/json' }
        }).then(() => {
            setshowProcess(false)
            setUserIngredients(updatedate)
        })
    }

    const items = userIngredients.map(i => <IngredientList 
        name={i.name} 
        amount={i.amount} 
        id = {i.key}
        key={i.key}
        deletItemHandler={key => deletItemHandler(key)}/>)

    const Filter =useCallback(filteredIngredients => {
        setUserIngredients(filteredIngredients)
      }, []);
     
    return (<div className="main">
            <IngredientForm ingredientHandler={ ingredientHandler} spinner={ showProcess &&  <Spinner />}/>
            <span>
                <Search onLoadIngredients={Filter}/>
                <ul className="list">
                   {items}
                </ul>
            </span>
        </div>);
};

export default Ingredients;