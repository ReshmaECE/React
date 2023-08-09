import React, { useState } from 'react'
import HookuseEffectMouseEvent from './HookuseEffect-MouseEvent'

function HookuseEffectMouseRemove() {
        //create a file name it HookuseEffectMouseRemove.js and
    //import HookuseEffectMouseEvent in this file add button and export the HookuseEffectMouseEvent in this file
    const[display,setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}> toggle display {display && <HookuseEffectMouseEvent />}</button>
            {/* {display && <HookuseEffectMouseEvent />} */}
        </div>
    )
}

export default HookuseEffectMouseRemove
