import React, { useState } from 'react';
import './Todo.css'
const Todo=()=>{
    const [input,setInput]=useState("");
    const [ListVal,setList]=useState([])
   function handleChange(e){
        console.log(e.target.value);
    }
    function handleClick(){
        setList([...ListVal,input]);
        console.log(ListVal);
        setInput("");
    }
    return(
        <div className='main'>
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Todo;