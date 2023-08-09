import React from 'react'

import { useState } from 'react'


function FormTableProject() {
    
    const[datas,setdatas]=useState([])
 const [firstName,SetFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const [email, setEmail] = useState('')
    const [tel, setTelNo] = useState('')
    const [date, setDate] = useState('')
    


//-------------------------------------------------
const fChangeHandler = (e) => {
    SetFirstName(e.target.value)
}
const lChangeHandler = (e) => {
    
    setLastName(e.target.value)
}
const emailHandler = (e) => {
    setEmail(e.target.value)
}                                  
const telHandler = (e) => {
    setTelNo(e.target.value)
}
const dateHandler = (e) => {
    setDate(e.target.value)}

const handleSubmit=(e)=>{

    e.preventDefault();
    //  setdatas({...datas,[e.target.value]:e.target.value})
    //  console.log(datas)
    //  console.log(inputarr)
    
    // setdatas([{firstName}])  
    // setdatas([{lastName}])  
    // setdatas([{email}])  
    // setdatas([{tel}])  
    // setdatas([{date}])  


    //setdatas({...datas,[e.target.value]:e.target.value})
    setdatas([...datas,{firstName,lastName,email,tel,date}])
    
   }
//--------------------------------------------------

    return (
        <div>
                 <form onSubmit={handleSubmit}>
                 
                    
                    <div> <label>FirstName</label>
                    <input type='text' name='firstName' value={firstName} onChange={fChangeHandler} /> </div> 
                    {/* <input type='text' name='firstName' value={datas.firstName}  onChange={e=>setdatas([{...datas,firstName:e.target.value}])}   ></input></div> */}
 

                     <div><label>LastName</label>
                        <input type='text' name='lastName' value={lastName}  onChange={lChangeHandler} ></input></div> 
{/* <input type='text' name='lastName' value={datas.lastName}  onChange={e=>setdatas([{...datas,lastName:e.target.value}])}   ></input></div>
                      */}
                     



                 <div><label>Enter your email</label>
                    <input type='email' name='email' value={email} onChange={emailHandler}></input></div> 
        <div><label>Enter your Phone Number</label>
                    <input type='tel' name='tel' value={tel} onChange={telHandler}></input></div>
                <div><label>Enter your DOB</label>
                    <input type='date' name='date' value={date} onChange={dateHandler}></input> </div>  
                      


                         <div> <button type="submit">submit</button></div> 
                    </form>



            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>lastName</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Date</th>
                    </tr>
                         </thead>

                    <tbody>
                         {/* {
                             datas.map((data)=>(
                             <tr>
                             <td>{data.firstName}</td>
                             <td>{data.lastName}</td>
                             </tr>
                             ))} */}
                            {/* <td>{data.email}</td> */}

                             {/* {/* <td>{data.tel}</td>
                             <td>{data.date}</td> */}
                             {/* </tr>  */}
                                


{
                          datas?.map((data,ind)=>{
                            return (
                            <tr key={ind}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.tel}</td>
                            <td>{data.date}</td>
                            </tr>
                            )
                         }
                         
                   ) }
                        
                </tbody>
                
                
            </table>
        </div>
    )
}
//}
export default FormTableProject
