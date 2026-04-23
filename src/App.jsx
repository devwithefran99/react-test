import React , {useState} from 'react' ;
import { useCounter } from './hooks/useCounter';
import './App.css';
import AddToDo from './components/AddToDo';
import "./todo.css" ;
import TodoList from './components/TodoList';

const App = () => {
const { count, counterHandler, decrementHandler, resetHandler } = useCounter();

const [ todos , setTodos] = useState(['. hello world'])
console.log(typeof todos);



  return (

    
    <div>
      <div className="wrapper d-block">



<AddToDo setTodos={setTodos} />

<TodoList todos = {todos} />
      </div>

      
      <h1>Add to cart - ({count})</h1>
      <button className="btn btn-danger" onClick={decrementHandler}>Decrement</button>
      <button className="btn btn-primary" onClick={counterHandler}>Increment</button>
      <button className="btn btn-secondary" onClick={resetHandler}>Reset</button>
    </div>

    
  );

};


export default App;