import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Task1 = () => {

    const [tasks, setTasks] = useState([])

    const { id } = useParams()
    // const params=useParams()
    //  console.log(params)
    console.log(id)


    useEffect(() => {
        const getdata = async () => {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)


            setTasks(data)
        }
        getdata()

    }, [])
    console.log(tasks)




    return (
        <div>
            <h1>url dynamic</h1>


             {/* async and await in object use  ternary operator to get data like this  */}

             
            {tasks.data ? <h1>{tasks.data.id}</h1> : null}

            {tasks.data ? <h1>{tasks.data.title}</h1> : null}




        </div>
    )
}

