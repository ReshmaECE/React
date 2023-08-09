import React,{useState}from 'react'

function HookUseStateObj() {

     const [name,setName]=useState({firstName:' ',lastName:''})
    return (
        <form>
         <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type='text'value={name.lastName }onChange={e=>setName({...name,lastName:e.target.value})}></input> 
         <h2>Enter your firstName ={name.firstName}</h2>
            <h2>Enter your lasttName ={name.lastName}</h2> 
            <h2>{JSON.stringify(name)}</h2>    
            

            
            </form>
    )
}
// JSON.stringify(name) just for seeing nethier is print or not
// usestate in hook will not merge or update the value so use sepreadoperator
export default HookUseStateObj
