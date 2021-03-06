import React , {useState , useRef , useEffect} from 'react'
import './search.css'

const Search = props => {
    const { onLoadIngredients } = props;
    const [filter , setFilter] = useState('');
    const [process , setprocess] = useState(false);
    const inputRef = useRef();

    useEffect( () => {
        setprocess(true)
        const timeOut = setTimeout(() => {
            if(filter === inputRef.current.value){
                let url
                filter === '' ? url = '' : url =  `?orderBy="name"&equalTo="${filter}"`;
                fetch('https://react-hook-initial.firebaseio.com/list-of-data.json' + url ,{
                    method:'GET',
                    headers : {'Content-type' :'application/json' }
                }).then(response =>  response.json() )
                .then(data => {
                    const dataList = []
                    for(let i in data){
                    dataList.push({...data[i] , key : i})
                    }
                    onLoadIngredients(dataList)
                    setprocess(false)})
            }
        } , 500)
        return () => {clearTimeout(timeOut)}} , [filter])
         
    return <form className="SearchForm">
            <label>Filter by Title</label>
            {process && <p>is loding ...</p>}
            <input ref={inputRef} type="text" value={filter} onChange={event => setFilter(event.target.value)} />
        </form>
}

export default Search