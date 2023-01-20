import React from 'react';
import './TodoSearch.css'

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('')
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <React.Fragment>
            <input placeholder="Search a ToDo..." value={searchValue} className='TodoSearch' onChange={onSearchValueChange}/>
        <p>{searchValue}</p>
        </React.Fragment>
    )  
}

export { TodoSearch };