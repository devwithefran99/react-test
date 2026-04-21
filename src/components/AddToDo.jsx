import React, { useState } from 'react'
import Btn from './Btn';

const AddToDo = () => {

    const [input , setInput] = useState('')

    const formSubmit = (e) => {
        e.preventDefualt();
        console.log('form Submited!');
        
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