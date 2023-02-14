import React, {useState} from "react";

const Counter01=()=>{
    const[count,setCount]= useState(0)
    return (
        <div>
            <p>you start from {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}
export  default Counter01;