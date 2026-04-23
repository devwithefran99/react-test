import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Btn from './Btn';

const AddToDo = ({setTodos}) => {

    const [input , setInput] = useState('')

   const Toast =  Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
})

    
const formSubmit = (e) => {
       e.preventDefault();
if(input.length <= 3){
    Toast.fire({
  icon: "error",
  title: "bhul hoise!"
});
}else {
       setTodos(prev => [input, ...prev])
        setInput('')
 Toast.fire({
  icon: "success",
  title: "Suuuuuuuiiiiiii"
});
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
              placeholder='type...'
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