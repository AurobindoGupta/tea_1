
import { RestaurantMenu } from "@material-ui/icons";
import { useState } from "react";

 const Que5=()=>{
    const [count,setCount]= useState(0);
     const [student1,setStudent1] = useState({
         studentNo1:0,
         unitTest1:0,
         preFinalTest1:0,
         finalTest1:0,
         name1:'',
         total1: 0
     })
     const [student2,setStudent2] = useState({
        studentNo2:0,
        unitTest2:0,
        preFinalTest2:0,
        finalTest2:0,
        name2:'',
        total2: 0
    })
    const [student3,setStudent3] = useState({
        studentNo3:0,
        unitTest3:0,
        preFinalTest3:0,
        finalTest3:0,
        name3:'',
        total3: 0
    })
    const [student4,setStudent4] = useState({
        studentNo4:0,
        unitTest4:0,
        preFinalTest4:0,
        finalTest4:0,
        name4:'',
        total4: 0
    })
    const [student5,setStudent5] = useState({
        studentNo5:0,
        unitTest5:0,
        preFinalTest5:0,
        finalTest5:0,
        name5:'',
        total5: 0
    })
    
      
    
    const changeHandler1=(e)=>{
        
        
        setStudent1({...student1,[e.target.id]:[e.target.value],
            studentNo1:1,
            total1:total(student1.finalTest1,student1.preFinalTest1,student1.unitTest1)});
                            
    }
    const changeHandler2=(e)=>{
        
        setStudent2({...student2,[e.target.id]:[e.target.value],
            studentNo2:2,
            total2: total(student2.finalTest2,student2.preFinalTest2,student2.unitTest2) });
        
                 
    }
    const changeHandler3=(e)=>{
        
        setStudent3({...student3,[e.target.id]:[e.target.value],
            studentNo3:3,
            total3: total(student3.finalTest3,student3.preFinalTest3,student3.unitTest3)
        });
        
                 
    }
    const changeHandler4=(e)=>{
        
        setStudent4({...student4,[e.target.id]:[e.target.value],
            studentNo4:4,
            total4:total(student4.finalTest4,student4.preFinalTest4,student4.unitTest4)
        });
                         
    }
    const changeHandler5=(e)=>{
        
        setStudent5({...student5,[e.target.id]:[e.target.value],
            studentNo5:5,
            total5:total(student5.finalTest5,student5.preFinalTest5,student5.unitTest5)
        });
        
                 
    }
    const submitHandler=(e)=>{
        e.preventDefault();
       setCount(count+1);
       
      
        }
        if(count===5){
            console.log("5 ho gaya");
            alert('5 students done')
        }
    
    

    const total=(a,b,c)=>{
        var m = parseInt(a)+parseInt(b)+parseInt(c) ;
       
        return m;
        
    }
    const findHighest=(a,b,c,d,e)=>{
        if(a>b && a>c && a>d && a>e )
        return(student1.name1)

        else if(b>a && b>c && b>d && b>e)
        return(student2.name)

        else if(c>a && c>b && c>d && c>e)
        return(student3.name3)

        else if(d>a&&d>b&&d>c&&d>e)
        return(student4.name4)
        else if(e>a&&e>b&&e>c&&e>d)
        return(student5.name5)

        // else{
        //     return(alert('error'))
        // }
    }
    console.log(count,student1,student2,student3,student4,student5,); 
    return(
        <div>
            <hr/>
            <div>
                <input type="number" placeholder="Unit test" id='unitTest1' onChange={changeHandler1}></input>
                <input type="number" placeholder="Pre-Final test" id='preFinalTest1' onChange={changeHandler1}></input>
                <input type="number" placeholder="Final test" id='finalTest1' onChange={changeHandler1}></input>
                <input type="name" placeholder="NAME" id='name1' onChange={changeHandler1}></input>
                <text id='total'>{total(student1.finalTest1,student1.preFinalTest1,student1.unitTest1)}</text>
            </div>
            <div>
                <input type="number" placeholder="Unit test" id='unitTest2' onChange={changeHandler2}></input>
                <input type="number" placeholder="Pre-Final test" id='preFinalTest2' onChange={changeHandler2}></input>
                <input type="number" placeholder="Final test" id='finalTest2' onChange={changeHandler2}></input>
                <input type="name" placeholder="NAME" id='name2' onChange={changeHandler2}></input>
                <text id='total'>{total(student2.finalTest2,student2.preFinalTest2,student2.unitTest2)}</text>
            </div>
            <div>
                <input type="number" placeholder="Unit test" id='unitTest3' onChange={changeHandler3}></input>
                <input type="number" placeholder="Pre-Final test" id='preFinalTest3' onChange={changeHandler3}></input>
                <input type="number" placeholder="Final test" id='finalTest3' onChange={changeHandler3}></input>
                <input type="name" placeholder="NAME" id='name3' onChange={changeHandler3}></input>
                <text id='total'>{total(student3.finalTest3,student3.preFinalTest3,student3.unitTest3)}</text>
            </div>
            <div>
                <input type="number" placeholder="Unit test" id='unitTest4' onChange={changeHandler4}></input>
                <input type="number" placeholder="Pre-Final test" id='preFinalTest4' onChange={changeHandler4}></input>
                <input type="number" placeholder="Final test" id='finalTest4' onChange={changeHandler4}></input>
                <input type="name" placeholder="NAME" id='name4' onChange={changeHandler4}></input>
                <text id='total'>{total(student4.finalTest4,student4.preFinalTest4,student4.unitTest4)}</text>
            </div>
            <div>
                <input type="number" placeholder="Unit test" id='unitTest5' onChange={changeHandler5}></input>
                <input type="number" placeholder="Pre-Final test" id='preFinalTest5' onChange={changeHandler5}></input>
                <input type="number" placeholder="Final test" id='finalTest5' onChange={changeHandler5}></input>
                <input type="name" placeholder="NAME" id='name5' onChange={changeHandler5}></input>
                <text id='total'>{total(student5.finalTest5,student5.preFinalTest5,student5.unitTest5)}</text>
            </div>
            <div>
                <button disabled={count===5?true:false} onClick={submitHandler} >submit</button>
            </div>
            <div>{findHighest(student1.total1,student2.total2,student3.total3,student4.total4,student5.total5)}</div>
        </div>
    )
}
export default Que5;