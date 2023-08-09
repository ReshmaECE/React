import React, { useEffect, useState } from 'react'
import axios from 'axios'




//             {products.map(product=>(<li>{product.title}</li>))}</ul>
//         </div>
//     )
// }




 function ProjectFetchData() {

    const[product,setProduct]=useState({})
    const[id,setId]=useState(0)
   const[idFromButtonClick,setidFromButtonClick]=useState()

   const styling={
    width:'300px',
    heigth:'200px'
   }

 const handlerClick=()=>{
    setidFromButtonClick(id)
 }
    useEffect(()=>{
    
        axios.get(` https://dummyjson.com/products/${idFromButtonClick}`)
        .then(res=>{
            console.log(res)
            setProduct(res.data)
        })
        .catch(err=>{
            //console.log(err);
        })
    },[idFromButtonClick])
    
    
    
    
    return (
        <div>
            <input type='text'  onChange={e=>setId(e.target.value)}></input>
            <button type='button' onClick={handlerClick}>fetch post</button>
            <div>{product.title}</div>
            <div>{product.brand}</div>
            <div>{product.description}</div>
            <img src={product.images[0]} alt={product.id } style={styling}></img>
            {/* <img src={product.images[1]} alt={product.id } style={styling}></img>; */}
            </div>
    )
}









export default ProjectFetchData


