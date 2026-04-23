import React, { useState } from 'react'
import Btn from './Btn';

const AddToDo = ({setTodos}) => {

    const [input , setInput] = useState('')

    const formSubmit = (e) => {
       e.preventDefault();
if(input.length <= 3){
    return false
}else {
       setTodos(prev => [input, ...prev])
        setInput('')
}
        
    }

    return (
        <div className="card">
            <div className="card-body">
                <form  onSubmit={formSubmit}>
                    <div className='d-flex'>
            <input
           onChange={(e) => setInput(e.target.value)}
            value={input}
             type="text"
              placeholder='Zareq Tia'
              className='form-control border-3 rounded-1'/> 
        <Btn className= "col-lg rounded-1 btn-dark">
            Submit
        </Btn>
        </div>
                </form>
            </div>
        </div>
    )
}

export default AddToDo