import React, { useEffect, useState } from 'react'

function HookuseEffectMouseEvent() {
    const[X,setX]=useState(0)
    const[Y,setY]=useState(0)

 const logMousePosition=e=>{ // step 2:call logMouseposition method and then see in inspect console will increase
    console.log('Mouse Event');
    setX(e.clientX)
    setY(e.clientY)
 }
    useEffect(()=>{
        console.log("useEffect-------called it"); //type 3:Run effect only once
    window.addEventListener('mousemove',logMousePosition)// step 1:now we r using that addEventListener for mouse it movement calculate by using logMousePosition
    
  return(()=>{
    console.log("componentunMount------------------- code" );
    window.removeEventListener('mousemove',logMousePosition) // create a file name it HookuseEffectMouseRemove.js and
    //import HookuseEffectMouseEvent in that file add button and export the HookuseEffectMouseEvent in that file
    //in useEffect return with arrow function remove by using removeEventListerner
  })


},[]) //setp3:passing empty arr[] as 2 parameter that is called as run effect only one
    
    

    
    
    
    
    return (
        <div>
            Hooks X-{X}  Y-{Y}
        </div>
    )
}

export default HookuseEffectMouseEvent
