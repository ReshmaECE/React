import React, { useState } from 'react'

function HookCounter() {
  const initalCount= 0
  const[Count,setCount]=useState(initalCount)

   const IncrementFive=()=>{
 for(let i=0; i<5;i++){
//   setCount(Count+1)// we increment five like this it increment but 1 not 5 
setCount(prevCount=>prevCount +1 )
}}

// const DecrementFive=()=>{
//     for(let i=0;i>5;i--){
//     setCount(prevCount=>prevCount-1)
//  }}

    return (
        <div>
            Count:{Count}
            
            <button onClick={()=>setCount(initalCount)} >reset</button>
            {/* <button onClick={()=>setCount(Count+1)}>increment</button>
            <button onClick={()=>setCount(Count-1)}>decrement</button> */}
              <button onClick={()=>setCount(prevCount=>prevCount +1)}>increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement</button>


           <button onClick={IncrementFive}>Increment 5</button>
           {/* <button onClick={DecrementFive}>Decrement -5</button> */}

        
        </div>
    )
}

export default HookCounter
