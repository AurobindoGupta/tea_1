import { useState } from "react"

const Que3 = ()=>{
    const[text,setText] = useState('');
   const[ttag,setTag] = useState('');
   
   const handleSubmit=(e)=>{
        if(e.target.id=== 'h1'){
            setTag(()=>{
                return(
                    <h1>{text}</h1>
                )
            });
        }
       else if(e.target.id=== 'h2'){
        setTag(()=>{
            return(
                <h2>{text}</h2>
            )})
        }
        else{
            setTag(()=>{
                return(
                    <h3>{text}</h3>
                )
            })
        }
   }
    return(
        <div>
        <hr></hr>
        <input type="text" placeholder="enter text" onChange={(e)=>(setText(e.target.value))}></input>
        <div>
            <button onClick={handleSubmit} id="h1">h1</button>
            <button onClick={handleSubmit} id="h2">h2</button>
            <button onClick={handleSubmit} id="h3">h3</button>
        </div>
        <div>{ttag}</div>
        </div>
       
    )
}
export default Que3;