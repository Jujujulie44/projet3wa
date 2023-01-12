import React from "react"; 
import logo from './logo.svg';
import './App.css';
import {StoreContext} from './tools/context.js'; 

//todo
function App() {
  const  [state, dispatch] = React.useContext(StoreContext);
  return (
    <div className="App">
      <button onClick={() => dispatch({type : 'incr' }) }> +1</button>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({type : 'decr' }) }> -1</button>
    </div>
  );
  
}

export default App;
