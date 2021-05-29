import React, { useState } from 'react'
const Que2 = () =>{
 const[text,setText] = useState('');
 const[size,setSize] = useState(0);

    const onChangeHandler=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit= (e) =>{
        if(e.target.id === 'plus'){
            setSize(size+2);
            console.log(size)
        }
        else{
            size !== 0 ? setSize(size-2) : alert('smallest');
        }
    }
    return(
        <div>
            <hr/>
            <h5>Q2</h5>
            <div>
                <input type="text" placeholder="enter text" onChange={onChangeHandler}></input>
                <button onClick={handleSubmit} id="plus">+</button>
                <button onClick={handleSubmit} id="minus">-</button>
            </div>
            <div style={{fontSize:`${size}px`}}>{text}</div>
        </div>
    )
}

export default Que2;