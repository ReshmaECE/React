import React from 'react'
 
// function Greet(){
//     return<h1>Hello Reshma</h1>
// }

 //export const Greet=()=><h1>hello world</h1>

// const Greet=(props)=>{
// console.log(props)
// return(
//     <div>
// <h1>welcome {props.name} Vs {props.age} </h1>   //props method  components
// {props.children}
// </div>
// )
// }
//--------------------------------------------------------
const Greet=({name,age,children})=>{
    
    return(                                   // destructing function components
        <div>                                           
    <h1>welcome {name} Vs {age} </h1>       
    {children}      
    </div>                                   // function has two type of destructing
    )
    }                                           //  1)  destructing using parameter

export default Greet

//------------------------------------------------------------------------------------------


// const Greet=props=>{
//     const {name,age,children}=props
//     return(                                   // destructing function components
//         <div>                                           
//     <h1>welcome {name} Vs {age} </h1>       
//     {children}      
//     </div>                                   // function has two type of destructing
//     )
//     }                                           //  2)  destructing in body

// export default Greet
//-------------------------------------------------------


// function FunctionClick(){

//     function clickFunction(){
//         console.log("button clicked its function components")
//     }                                                            // Event handling in function components
// return(
// <div>                                            
//     <button onClick={clickFunction}>click</button> 
//     </div>
// )
// }
// export default FunctionClick
// //----------------------------------------------------------------------------{/* {
                   //map         //  datas.map((data)=>(
                            //     <tr>
                            //     <td>{data.firstName}</td>
                            //     <td>{data.lastName}</td>
                            //     </tr>
                            //     ))} */}
                       {/* <td>{data.email}</td> */}
   
                       {/* {/* <td>{data.tel}</td>
                                <td>{data.date}</td> */}
                       {/* </tr>  */}
   