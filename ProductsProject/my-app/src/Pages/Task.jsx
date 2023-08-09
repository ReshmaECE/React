import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Task=()=> {

 const [randomUsers,setrandomUsers]=useState([])
//  const TaskId=useParams('id')
//  console.log(useParams)
//  console.log(TaskId)

 useEffect(()=>{
    const getdata=async()=>{
        const data=await axios.get(`https://jsonplaceholder.typicode.com/todos`)

    
    setrandomUsers(data)
    }
    getdata()

 },[])
 console.log("data:",randomUsers)
 
//   useEffect(()=>{
//     fetchdata()
//     .then((res)=>{
//         console.log(res.data)
    
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
//   })

    //    useEffect(()=>{
    //    axios.get("https://jsonplaceholder.typicode.com/posts") 
    //    .then((res)=>{
    //     console.log(res.data)
    //     setrandomUsers(res.data)
    //    })
    //    .catch((err)=>{
    //      console.log(err)
    //    })
    //    },[])           
  
    return (
        <div>
            {/* {
                randomUsers.map((randomUser)=>
                   <div key={randomUser.id}>
                    <h1 >{randomUser.title}</h1>
                
   
                   </div>  
)
            } */}
            <div>
             { randomUsers.data?  <h1>{randomUsers.data.id}</h1>:null}
             {randomUsers.data? <h2>{randomUsers.data.title}</h2>:null}
             {randomUsers.data? <h2>{randomUsers.headers.expires}</h2>:null}
            
            
            </div>


        </div>
                 



                
    )
}


