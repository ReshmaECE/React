import React, { useState } from 'react'

function HookUSeStateArr() {
   const[items,setItems]=useState([])
  const addItem=()=>{
     setItems([...items,{ //here the spreadoperator using to merge and update the in the list when we are click the button
//      //id:items.length,
    value:Math.floor(Math.random()*1000)}])
  }
      
//  setItems([{value:Math.floor(Math.random()*100)}])

// }
    return (
        <div>
            
            
            <button onClick={addItem} >add the number</button>
            <ul>
                { 
                    items.map(item=><li >{item.value}</li>)
                        // key={item.id}>{item.value}</li>)
                }
            </ul>





        </div>
    )
}

export default HookUSeStateArr
