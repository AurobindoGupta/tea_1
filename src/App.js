

import React, { useEffect, useState } from 'react';
import './App.css';
import Que2 from './Que2';
import Que3 from './Que3';
import Que4 from './Que4';
import Que5 from './Que5'
import Que6 from './Que6'




function App() {
  const[ ans, setAns] = useState(0);
  const[a, setA] =useState(0);
  const[b,setB] = useState(0);
  
  
    const handleAdd= (e)=>{
      setAns(parseInt(a)+ parseInt(b) );
      
    }
    const handlePro = (e)=>{
      setAns(a*b);
    }
    const handleSub = (e)=>{
      setAns(a-b);
    }
    const handleDevide = (e)=>{
      setAns(a/b);
    }
    
    const handleInputChange =(e)=>{
      switch(e.target.id){
        case 'a': setA(e.target.value);
        case 'b' : setB(e.target.value);
      }
     //if we put console.log here it shows the previos value not the current value why.
    }
    console.log(a,b);
    return (
      
      <div className="container">
      <div>
        <input type="number" id="a" placeholder="a" onChange={handleInputChange}></input>
        <input type="number" id="b" placeholder="b" onChange={handleInputChange}></input>
      </div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handlePro}>*</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleDevide}>/</button>
      <div>{ans}</div>
      <Que2/>
      <Que3/>
      <Que4/>
      <Que5/>
      <Que6/>
      </div>
    );
}

export default App;
