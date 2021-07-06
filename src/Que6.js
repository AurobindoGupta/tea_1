

import { useEffect, useState } from "react";

const Que6 = () =>{
const[invisible,setInvisible]= useState(false);
const[pic,SetPic]= useState([]);
const[name,SetName]= useState([]);
let api= "https://api.github.com/search/repositories?q=stars%3E1&sort=stars"
const buttonHandler=(e)=>{
  console.log(e.target);
  setInvisible(!invisible);
}

useEffect(() => {
    fetch(api).then(res=>res.json())
    .then(data => SetPic([...pic,data]))
    
}, [])

 var x= invisible;
    return(
        
        <div>
        <hr/>
            
            <button onClick={buttonHandler}>{x? "Loaded":"invisible"}</button>
            {invisible && <div>LOADING./....
           <div> {pic.map((item,idx)=>{ 
            return( item && item.items.map((item,idxx)=>{
                return (
                    <div key={idxx}>
                    <img src={item.owner.avatar_url}></img>
                    <h4>{item.name}</h4>
                    </div>
                    )
            })
               )
           })}
           </div>
           </div>
            }
        </div>
    )
}
export default Que6;