import { useState } from "react"

const Que4 = ()=>{
    const[text,setText] = useState('');
   const[ttag,setTag] = useState('');
   
   const handleSubmit=(e)=>{
        if(e.target.id=== 'red'){
            setTag('red')
        }
       else if(e.target.id=== 'green'){
        setTag('green')
        }
        else{
            setTag('blue')
        }
   }
    return(
        <div>
        <hr></hr>
        <input type="text" placeholder="enter text" onChange={(e)=>(setText(e.target.value))}></input>
        <div>
            <button onClick={handleSubmit} id="red">red</button>
            <button onClick={handleSubmit} id="green">green</button>
            <button onClick={handleSubmit} id="blue">blue</button>
        </div>
        <div style={{color:`${ttag}`}}>{text}</div>
        </div>
       
    )
}
export default Que4;