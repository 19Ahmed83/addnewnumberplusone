import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const[num,setNum]=useState([1,2,3])
  const add=()=>{
    const lastnum=num[num.length-1];
    setNum([...num,lastnum+1])
  }
  return (
    <div className="App">
      <button onClick={add} type="button" className="btn btn-outline-info">add new num</button>

      {num.map(el=><li key={el}>{el}</li>)}


    </div>
  );
}

export default App;
