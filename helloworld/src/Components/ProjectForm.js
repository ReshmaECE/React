import React from 'react'
import { useState } from 'react'
import './ProjectForm.css'
import backgroundImage from '../../src/Components/pro1.png'

function ProjectForm() {

    const [datas, setdatas] = useState([])
    const [update, setupdate] = useState(false)
    const [title, settitle] = useState('')
    const [descripition, setdescripition] = useState('')
    const [date, setdate] = useState('')
    const [status, setstatus] = useState('No start')

        
    const titleHandler = (e) => {
        settitle(e.target.value)
    }
    const commentHandler = (e) => {
        setdescripition(e.target.value)
    }

    const dateHandler = (e) => {
        setdate(e.target.value)
    }
    const statusHandler = (e) => {
        setstatus(e.target.value)
    }

    const deleteHandler = (remove) => {
        console.log(remove)
        console.log(datas.filter((_, index) => index !== remove))

        setdatas(datas.filter((_, index) => index !== remove));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log();
        setdatas([...datas, { title, descripition, date, status }])

    }
    const updateHandler = (e) => {
        e.preventDefault()
        setupdate(false)
    }

    // const handleCancel = () => {
    //     console.log("sdhjsdfsdf");

    // }

    return (
        <div>
            <div className="split Left">
                <div class="centered" 
               
                style={{backgroundImage:`url(${backgroundImage})` ,backgroundRepeat: "no-repeat",
                backgroundSize: "cover",objectFit:"contain",objectFit:'scale-down'
                 
             }}
            >
                
                    {/* <img src="img_avatar2.png" alt="Avatar woman"> */}
                        
                    <h1> HOME </h1> 
                    <h2> INTEL</h2>
                    </div>
                
            </div>
                   




                           <div className=' split Right'>
                                 <div className='topcontainer' >
                                    
            <form  onSubmit={submitHandler}>
                    <div  className='center' id='form'>
                <label>Title</label>
                <input type='text' name='title' value={title} onChange={titleHandler} />
                <label>textarea</label>
                <textarea rows="2" name='comment'    value={descripition} onChange={commentHandler} />
                <label>Date</label>
                <input type='date' name='date' value={date} onChange={dateHandler} />
                <br/>
                <label>selectOption</label>
                
                <select  type="text "name="status" value={status} onChange={statusHandler} defaultValue="No start">
                    <option value="No start"    >No Start</option>
                    <option value="In Progress"  >In Progress</option>

                    <option value="Completed"> Completed</option>
                    <option value="cancelled"> cancelled</option>
                </select>

                      

                <button type='submit'>submit</button></div>
               
            </form>
                  </div>

            {/* {JSON.stringify(datas)} */}
            <div className='bottomContainer'>
            <div className='formUpdate'>

                <form onSubmit={updateHandler}>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>descripition</th>
                                <th>date</th>
                                <th>status</th>
                                <th>update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        {/* <div>{JSON.stringify(datas)}</div> */}

                        {
                            datas?.map((data, ind) => (

                                (update ? (
                                    <tr>
                                        <div className='form2'>
                                            <td> <input type='text'  id='forma' value={data.title} onChange={(e) => {
                                                let temp = datas;
                                                temp[ind].title = e.target.value;
                                                setdatas([...temp])
                                            }} />  </td>
                                        </div>

                                        <td><input type='text'  id='formb' value={data.descripition} onChange={(e) => {
                                            let temp = datas;
                                            temp[ind].descripition = e.target.value;
                                            setdatas([...temp])
                                        }}></input></td>
                                        <td><input type='text'  id='formc' value={data.date} onChange={(e) => {
                                            let temp = datas;
                                            temp[ind].date = e.target.value;
                                            setdatas([...temp])
                                        }}></input></td>

                                        <td> <select name="status"  id='formd'  value={data.status} onChange={(e) => {

                                            let temp = datas;
                                            temp[ind].status = e.target.value
                                            setdatas([...temp])
                                        }}>
                                            <option value="no start">No Start</option>

                                            <option value=" in progress" >In Progress</option>

                                            .
                                            <option value="Completed">Completed</option>

                                            <option value="cancelled">cancelled</option>


                                        </select></td>





                                        <td><button className='button1' type='submit'> ✔</button></td>
                                        <td><button className='button2' onClick={(e) => setupdate(false)}>✖</button></td>
                                    </tr>

                                ) : (


                                    <tr key={ind}>
                                        <td>{data.title}</td>
                                        <td>{data.descripition}</td>
                                        <td>{data.date}</td>
                                        <td>{data.status}</td>

                                        {/* <button type='button' className='delete' onClick={() => deleteHandler(ind)}>delete</button> */}

                                        <td><button type='button' className='update' onClick={(e) => {
                                            setupdate(true)

                                        }} >update</button></td>

                                        
                                       <td> <button type='button' className='delete' onClick={() => deleteHandler(ind)}>delete</button>
                                              </td>

                                    </tr>

                                ))))}


        
                    </table>
                </form>
                    </div>
            </div>
        </div>
     </div>



    )
}



export default ProjectForm
