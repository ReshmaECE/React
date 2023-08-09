import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
             {/* <header > */}
        <div className='conatiner'>
                <nav>
          
          <div className='nav'>
            {/* <NavLink to='/'  style={{ margin: 100 }}  className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink> */}
            <NavLink to='Products' style={{ margin: 100 }} className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Products</NavLink>
         <NavLink to='Locdata' style={{ margin: 100 }}  className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} >LocalStorage</NavLink>
         
         
          
         
          </div>
          </nav>
        </div>
        
       
        </div>
    )
}
