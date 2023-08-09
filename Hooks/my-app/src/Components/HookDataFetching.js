import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HookDataFetching() {
    const[post,setPost]=useState({})
    const[detail, setdetail]=useState(1)
    const[idFromButtonClick,setidFromButtonClick]=useState()
    

 const handlerClick=()=>{
    setidFromButtonClick(detail)
 }

useEffect(()=>{
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
  .then(res=>{
    //console.log(res)
    setPost(res.data)
  })
  .catch(err=>{
    //console.log(err)
  },[idFromButtonClick])

})
    return (
        <div>
            <input type='text' value={detail} onChange={e=>setdetail(e.target.value)}></input>
            <button type='button' onClick={handlerClick}>fetch post</button>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>{post.userId}</div>



            
            
            
            {/* <ul>{
                posts.map(post=>(<li key={post.id}>{post.title}</li>)
            )}
            </ul>
             */}
        </div>
    )
}

export default HookDataFetching
