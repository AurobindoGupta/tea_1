
import { useState } from "react";

const Que6 = () =>{
const[invisible,setInvisible]= useState(true);
const buttonHandler=(e)=>{
  console.log(e.target);
  setInvisible(!invisible);
}
var x= invisible;
    return(
        
        <div>
        <hr/>
            
            <button onClick={buttonHandler}>{x? "Loaded":"invisible"}</button>
            {invisible && <div>LOADING./....</div>}
        </div>
    )
}
export default Que6;