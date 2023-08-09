
// dynamic router
// export const UserDetails=() =>{
//     return (
//         <div>
//             <h2>Details to the User</h2>
//         </div>
//     )
// }





// url to the components

import { useParams } from "react-router-dom"

export const UserDetails=()=>{

     const params=useParams()
     const UserId=params.UserId

    return(
        <div>
            <h2>Details to the using url to the components {UserId}</h2>
        </div>
    )
}