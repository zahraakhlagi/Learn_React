import React from "react";

const Counter=()=>{
    return(
        <div>
            <p>click 2 times</p>
            <button onClick={()=> alert("hej son")}>click me</button>
        </div>
    )
}
export default  Counter;