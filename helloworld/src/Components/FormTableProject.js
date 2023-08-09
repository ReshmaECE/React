//import React, { useCallback, useEffect } from 'react'
//import './FormTableProject.css'
import { useState } from 'react'




function FormTableProject() {

    const [datas, setdatas] = useState([]);
    const [editData, setEditData] = useState(false);  //update table


    const [firstName, SetFirstName] = useState('')
    const [lastName, setLastName] = useState('')
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
        setDate(e.target.value)
    }
    //------------------------------------------------------------
    //delete

    const deleteTableRows = (remove) => {
        console.log(remove)
        //     const remove = [...datas];
        //     if (index > -1) {
        //     remove.splice(index,1);
        //     setdatas(remove);
        // }

        console.log(datas.filter((_, index) => index !== remove));

        setdatas(datas.filter((_, index) => index !== remove));
    }

    // const UpdateTable = (update) => {
    //        console.log(update)

    //      }
    //    function UpdateTable(){
    //     console.log(UpdateTable);
    //     // setdatas({...datas,[e.target.ind]:e.target.value})

    //    }

    //  const deleteTableRows=(id)=>{
    //     const remove=[...datas].
    //     filter((data)=>data.name !==id)
    //     setdatas(remove)

    //  }

    //-----------------------------------------------------------

    //2 form update



    const updateTable = (e) => {
        e.preventDefault()
        // SetUpdateFirstName([...datas,{updatefirstName}])
        setEditData(false)


    }
    //--------------------------------------------------------------
    //useeffect for local storeage



    // useEffect(() => { 
    //  localStorage.setItem("firstName",JSON.stringify(firstName))
    // console.log(firstName)
    // },[firstName]);


    //----------------------------------------------------------------------------
    // form 1 for submit

    const handleSubmit = (e) => {

        e.preventDefault();                      //  setdatas({...datas,[e.target.value]:e.target.value})
        //  console.log(datas)
        //  console.log(inputarr)
        // setdatas([{firstName}])  
        // setdatas([{lastName}])                                   
        // setdatas([{email}])  
        // setdatas([{tel}])  
        // setdatas([{date}])  //setdatas({...datas,[e.target.value]:e.target.value})
        setdatas([...datas, { firstName, lastName, email, tel, date }])

    }





    //--------------------------------------------------

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className='form-container'>
                    <div>
                        <label> Enter Your FirstName</label>
                        <input type='text' name='firstName' id='1' value={firstName} onChange={fChangeHandler} required /> </div>
                    {/* <input type='text' name='firstName' value={datas.firstName}  onChange={e=>setdatas([{...datas,firstName:e.target.value}])}   ></input></div> */}


                    <div>
                        <label>Enter your LastName</label>
                        <input type='text' name='lastName' id='2' value={lastName} onChange={lChangeHandler} required /></div>
                    {/* <input type='text' name='lastName' value={datas.lastName}  onChange={e=>setdatas([{...datas,lastName:e.target.value}])}   ></input></div>
                      */}




                    <div>

                        <label>Enter Your Email</label>
                        <input type='email' name='email' id='3' value={email} onChange={emailHandler} /></div>
                    <div>
                        <label>Enter your Number</label>
                        <input type='tel' name='tel' id='4' value={tel} onChange={telHandler} ></input></div>
                    <div>
                        <label> Enter your DOB</label>
                        <input type='date' name='date' id='5' value={date} onChange={dateHandler}></input> </div>

                </div>




                <div> <button type="submit" >submit</button></div>
            </form>

            {/* ---------------------------------------form 1------------------------------------------------------   
                  
                  
                  
                  //form 2 with table and 2 form its for update the value in the table*/}


            <div className='Form2'>

                <form onSubmit={updateTable}>
                    <table>


                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Date</th>
                                <th>update</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        {
                            datas?.map((data, ind) =>
                            {
                                    return (editData ? (
                                        // in map  add input for update the table
                                        <tr>
                                            <div className='updateform'>
                                                <td><input value={data.firstName} id='ti' onChange={(e) => {
                                                    let temp = datas;
                                                    temp[ind].firstName = e.target.value;
                                                    setdatas([...temp]);
                                                } } type='text'></input></td></div>


                                            <td><input type='text' value={data.lastName} id='ti1' onChange={(e) => {
                                                let temp = datas;
                                                temp[ind].lastName = e.target.value;
                                                setdatas([...temp]);
                                            } }></input></td>

                                            <td><input type='email' value={data.email} id='ti2' onChange={(e) => {
                                                let temp = datas;
                                                temp[ind].email = e.target.value;
                                                setdatas([...temp]);
                                            } }></input></td>

                                            <td><input type='tel' value={data.tel} id='ti3' onChange={(e) => {
                                                let temp = datas;
                                                temp[ind].tel = e.target.value;
                                                setdatas([...temp]);
                                            } }></input></td>

                                            <td><input type='date' value={data.date} id='ti4' onChange={(e) => {
                                                let temp = datas;
                                                temp[ind].date = e.target.value;
                                                setdatas([...temp]);
                                            } }></input></td>

                                            <td><button className='button1' type='submit'> ✔</button></td>
                                            <td><button className='button2' onClick={(e) => setEditData(false)}>✖</button></td>
                                        </tr>


                                    ) : (
                                        <tr key={ind}>
                                            <td>{data.firstName}</td>
                                            <td>{data.lastName}</td>
                                            <td>{data.email}</td>
                                            <td>{data.tel}</td>
                                            <td>{data.date}</td>
                                            {/* <td><button className="delete" onClick={() => deleteTableRows(ind)}> Delete</button></td> */}

                                            <td><button className='update' onClick={(e) => {
                                                console.log("clickee");
                                                setEditData(true);
                                            } }> update </button></td>
                                            <td><button className="delete" onClick={() => deleteTableRows(ind)}> Delete </button>
                                            </td>
                                           
                                        </tr>
                                    ));
                                }


                            )
                        }


                    </table>

                </form>
            </div>
        </div>



    )
}
    

export default FormTableProject
