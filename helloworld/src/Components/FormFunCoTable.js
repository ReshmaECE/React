
import React, { useState } from 'react'


function FormFunCoTable() {
    
    const [addFormDatas, setaddFormDatas] = useState([{
        firstName: '',
        lastName: ''
        // email: '',
        // tel: '',
        // date: ''
        // gender:''
}])

    //  const addHandler = (event) => {
    //      event.preventDefault();

    //     const fieldName = event.target.getAttribute('name')
    //     const fieldValue = event.target.value


    //     const newFormDatas = { ...addFormDatas }
    //     newFormDatas[fieldName] = fieldValue;
    //     setaddFormData(newFormDatas);


    // };

    
    const fChangeHandler = (e) => {
    setaddFormDatas(e.target.value)
    
    

    }
    const lChangeHandler = (e) => {
        console.log(e.target[1].value)
        setaddFormDatas(e.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        

        const newFormDatas = {

            firstName: addFormDatas.firstName,
            lastName: addFormDatas.lastName,
            // email: addFormDatas.email,
            // tel: addFormDatas.tel,
            // date: addFormDatas.date
        };
console.log(newFormDatas);

        const newFormData = [...addFormDatas, newFormDatas]
        setaddFormDatas(newFormData);
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <div> <label>FirstName</label>
                    <input type='text' name='firstName'    onChange={fChangeHandler} ></input></div>
                <div><label>LastName</label>
                    <input type='text' name='lastName'  onChange={lChangeHandler} ></input>
                </div>









{/* 

                <div><label>Enter your email</label>
                    <input type='email' name='email' value={addFormDatas.email} onChange={addHandler} ></input></div>
                <div><label>Enter your Phone Number</label>
                    <input type='tel' name='tel' value={addFormDatas.tel} onChange={addHandler} ></input></div>
                <div><label>Enter your DOB</label>
                    <input type='date' name='date' value={addFormDatas.date} onChange={addHandler}></input> </div>

 */}







                {/* <div><label>Gender</label>

                    <input type='radio' id='female' name='female' checked={gender === 'female'} onChange={addHandler} ></input>
                    <label>female</label></div>

                <div> <input type='radio' id='male' name='male' checked={gender === 'male'}onChange={addHandler}></input>
                    <label>male</label>
                </div>  */}

                <div><button> button</button></div>
                {/* <h1>{message}</h1> */}

                <table>
                    <thead>


                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>PhoneNumber</th>
                            <th>Date</th>
                            {/* <th>Gender</th> */}
                        </tr>
                    </thead>
                    <tbody>{


                        addFormDatas?.map((addFormData) => (
                            <tr>
                                <td> {addFormData.firstName}</td>
                                <td>{addFormData.lastName}</td>
                                {/* <td>{addFormData.email}</td>
                                <td>{addFormData.tel}</td>
                                <td>{addFormData.date}</td> */}
                            </tr>
                        ))}




                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default FormFunCoTable
