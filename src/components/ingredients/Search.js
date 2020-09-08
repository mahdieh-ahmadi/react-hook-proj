import React from 'react'
import './search.css'

const Search = props => {
    return <form className="SearchForm">
        <label>Filter by Title</label>
        <input type="text" onChange={event => props.filter(event)}/>
    </form>
}

export default Search