 import React, { useState } from 'react'
 

function FormFunComponents({}) {
    
    const [message, setMessage] = useState("")
    const [firstName, SetFirstName] = useState("")
    const [lasttName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTelNo] = useState("")
    const [date, setDate] = useState("")
    const [gender, setGender] = useState("")
    

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
        setDate(e.target.value)
    }
    const genderHandler = (e) => {
        console.log(e.target.value);
        setGender(e.target.value)
    }

    const handleSubmit = (event) => {
        setMessage(`${firstName} ${lasttName} ${email} ${tel} ${date} ${gender}`)
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div> <label>FirstName</label>
                    <input type='text' value={firstName} onChange={fChangeHandler}></input></div>
                <div><label>LastName</label>
                    <input type='text' value={lasttName} onChange={lChangeHandler}></input>
                </div>
                <div><label>Enter your email</label>
                    <input type='email' value={email} onChange={emailHandler}></input></div>
                <div><label>Enter your Phone Number</label>
                    <input type='tel' value={tel} onChange={telHandler}></input></div>
                <div><label>Enter your DOB</label>
                    <input type='date' value={date} onChange={dateHandler}></input> </div>

                <div><label>Gender</label>

                    <input type='radio' id='female' value={'female'} checked={gender === 'female'} onChange={genderHandler} ></input>
                    <label>female</label></div>

                <div> <input type='radio' id='male' value={'male'} checked={gender === 'male'} onChange={genderHandler}></input>
                    <label>male</label>
                </div>

                <div><button> button</button></div>
                <h1>{message}</h1>
            
            <table>
            <thead>


                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Date</th>
                    <th>Gender</th>
                </tr>
                </thead>
                 <tbody>
                    {/* {
                    Array.isArray(tableData)?

                        tableData.map((data,index)=>{
                        
                        return( 
                            <tr key={index}>
                                <td>{index+1}</td>
            <td> {data.firstName}</td>
            <td>{data.lasttName}</td>
            <td>{data.email}</td>
            <td>{data.tel}</td>
            <td>{data.date}</td>
            <td>{data.gender}</td></tr>
            ) 
            }):null}                  */}
                     
             <tr>
             <td> {firstName}</td>
             <td>{lasttName}</td>
             <td>{email}</td>
             <td>{tel}</td>
             <td>{date}</td>
             <td>{gender}</td></tr> 


                    
        </tbody>
         </table>
         </form>

         </div>


            
    )

}
export default FormFunComponents




