import { useNavigate } from "react-router-dom"





export const NavOrderSummary=()=>{
    const navigate=useNavigate()
    return(
        <>
    <div>order taken</div>
    <button onClick={()=>navigate(-1)}>feedback</button>
    
    </>
    )
}