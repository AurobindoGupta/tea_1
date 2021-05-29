import { useState } from "react";

 const Que5=()=>{
    const [count,setCount]= useState(0);
     const [student,setStudent] = useState({
         studentNo:0,
         unitTest:0,
         preFinalTest:0,
         finalTest:0,
         name:'',
         total:0
     })
      
    
    const changeHandler=(e)=>{
        setStudent({studentNo: student.studentNo+1 });
        setStudent({...student,[e.target.id]:[e.target.value]})
        

    }
    const submitHandler=()=>{
       setCount(count+1);
        
        }
        if(count===5){
            console.log("5 ho gaya");
            alert('5 students done')
        }
    
    console.log(student,count);

    const total=()=>{
        var m = student.finalTest+student.preFinalTest+student.unitTest ;
        
    }
    
    return(
        <div>
            <hr/>
            <input type="number" placeholder="Unit test" id='unitTest' onChange={changeHandler}></input>
            <input type="number" placeholder="Pre-Final test" id='preFinalTest' onChange={changeHandler}></input>
            <input type="number" placeholder="Final test" id='finalTest' onChange={changeHandler}></input>
            <input type="name" placeholder="NAME" id='name' onChange={changeHandler}></input>
            <div>
                <button disabled={count===5?true:false} onClick={submitHandler} >submit</button>
            </div>
        </div>
    )
}
export default Que5;