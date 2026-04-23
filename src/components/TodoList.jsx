import React from 'react'
import Lists from './Lists'

const TodoList = ({todos}) => {

    return (
     <div className="card mt-3">
        <div className="card-body">
            {todos.map((todo , index) => (
                <Lists key={index} data = {todo}  index = {index} />
                ))}
            
    
        </div>
     </div>
    )
}

export default TodoList 