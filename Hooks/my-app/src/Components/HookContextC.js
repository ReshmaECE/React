import React from 'react'
//import { UserFirstNameContext,UserLastNameContext } from '../App'
// function HookContextC() {
//     return (
//         <div>
//             <UserFirstNameContext.Consumer>
//                 {
//                     userfirstName=>{
//                         return(
//                             <UserLastNameContext.Consumer>
//                                 {
//                                     userlastName=>{
//                                         return <div>UserFirstName Is {userfirstName}, UserLastName Is {userlastName}</div>
//                                     }
//                                 }
//                             </UserLastNameContext.Consumer>
//                         )
//                     }
//                 }
//             </UserFirstNameContext.Consumer>
//            </div>
//     )
// }

// //export default HookContextC









// 3 step to do context

// step 1: create context in app.js floder 
// I create 3 file named it as HookContext A,B,C
// A is parent folder so inport in app.js
//step 2:
// in A import B,  B import C
// now A is provider C is the Customer
// Provider A in app.js so give the value in provider and export it
// import in C customer  get in value in c as costomer

// step3 :mutiple file provider means in customer {with name with arrow function }
// eg:             <userFname>{userfname=>{
    //return<div> enter fname {userFname} </div>
//        }}
//</userFname>
// 
// 
// 
