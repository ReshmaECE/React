import React, { useEffect, useState } from 'react'

function HookuseEffectsetTimer() {
    const[count,setCount]=useState(0)
    

    const tick=()=>{
    // setCount(count + 1)  //we  give like this the o/p the value will not increase the value
          setCount(prevCount=>prevCount+1)   // for that reason we use precount and we should in dependency[]
    }
      

     useEffect(()=>{

 //--------------------------- --------------           
// function todoSomething(){
//     console.log(someProps);
// }
                                              // incase if we need another function to use means give inside in useEffect
                                              // and mention the name in 2para []
//         todoSomething()

///--------------------------------------



    const inverval=setInterval(tick,1000)
   return()=>{
    clearInterval(inverval)
   }

    
    

    //  },[count])// in noraml we should
},[]) // but prevcount we dont want to mention in it in array it will be empty array[]
 


//---------------------------------
// [someProps])// like this
//--------------------------------------------
    return (
        <div>
           <h1>{count}</h1>
    
        </div>
    )
}

export default HookuseEffectsetTimer
