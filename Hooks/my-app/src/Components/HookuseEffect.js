import React, { useEffect, useState } from 'react'

function HookuseEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState(' ')
    useEffect(()=>{
        document.title=`your clicked ${count} this times `//type 1:useEffect it is function called it and passing arrow fucntion
        console.log(`useEffect conditional run effect---------updating document`);// type 2:conditionally run effect  
    }                  
     ,[count])


 // })                                                                 //create an array as second parameter and declear value in it                    
    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input> 
            <button onClick={()=>setCount(count + 1)}>count {count} times</button>
        </div>
    )
}

export default HookuseEffect
