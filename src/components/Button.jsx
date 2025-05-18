import React from "react"
import {useState} from "react";

function Button(){
    const [count , setCount]=useState(0)
    return(<>
 
      <p>Button clicked {count} times</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </>)
}
export default Button