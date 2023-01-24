import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }){
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <React.Fragment>
            <input placeholder="Search a ToDo..." value={searchValue} className='TodoSearch' onChange={onSearchValueChange}/>
        </React.Fragment>
    )  
}

export { TodoSearch };