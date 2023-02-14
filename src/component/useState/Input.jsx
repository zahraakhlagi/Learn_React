import React,{useState}from "react";

const Input=()=>{
    const [name,setName]= useState('');
    const handler=(e)=>{
        setName(e.target.value);
        console.log(name);
    }

    return(
        <div>
            <input name="name" value={name} onChange={handler}/>
        </div>
    )
}
export default Input;