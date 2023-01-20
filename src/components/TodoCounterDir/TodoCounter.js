import React from 'react';
import './TodoCounter.css';

function TodoCounter(){
    return (
        <h2 className="TodoCounter">You have completed <span>3</span> of <span>5</span> ToDo</h2>
    );
}

export { TodoCounter };