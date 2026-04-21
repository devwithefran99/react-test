import React , {useState} from 'react' ;
import { useCounter } from './hooks/useCounter';
import './App.css';

const App = () => {
const { count, counterHandler, decrementHandler, resetHabdler } = useCounter();

  return (
    <div>

      <AddToDo />
      <h1>Add to cart - ({count})</h1>
      <button className="btn btn-danger" onClick={decrementHandler}>Decrement</button>
      <button className="btn btn-primary" onClick={counterHandler}>Increment</button>
      <button className="btn btn-secondary" onClick={resetHabdler}>Reset</button>
    </div>

    
  );

};


export default App;