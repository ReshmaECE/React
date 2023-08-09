import React from "react"

//  import { Products } from "./Products"
import axios from "axios"
import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom"
import { Products } from "./Products"

export const SingleProducts=()=> {
    const[data,setdata]=useState([])
    const navigate =useNavigate()
         
     const ProductsId = useParams('id')
             console.log(ProductsId)
        //  console.log(useParams('id'))
      
            
 useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        console.log(res.data)
        const responseData=res.data
        //  console.log(responseData)
        //  const resultData=responseData.filter((item)=>item.id==ProductsId);
         
         const resultData=responseData.filter(item=>{
            return(
                item.id==ProductsId.ProductsId
              
            ) 
            
         }) 
         console.log(resultData)
         
            // console.log(ProductsId);
           console.log("result filtered",resultData)
           setdata(resultData)
    })
    .catch((err)=>{
        console.log(err)
    })
   
},[ProductsId])
   
   
    
    return (
         <div className="sinproduct" >
            <h1>PRODUCT ITEM</h1>
          {
            data?.map((item)=>{
                return(
                    <div key={item.id}>
                         <img src={item.image} alt="" className="sinimage"></img>
                         <h2 className="sincat"style={{color:'red'}}>Category:{item.category} </h2>
                         <h1 className="sinprice" style={{color:'#2A2F4F'}}>US$     {item.price}</h1>
                        <h1 className="sindes">{item.description}</h1>
                          {/* <button className="sinbtn">BACK TO PRODUCT</button> */}
                          {/* <button className="sinbtn" onClick={() => navigate(-1)}>BACK TO PRODUCTS</button> */}
            <button className="sinbtn" onClick={() => navigate('/productS')}>NAVIGATE TO PRODUCTS</button> &nbsp;
                         
                    </div>
                )
            })
          }              
        </div>
    
    )
}




         