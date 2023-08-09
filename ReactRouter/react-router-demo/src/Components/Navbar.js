import { Link, NavLink } from "react-router-dom"

          


 
              
 export const Navbar =()=>{
    const NavActive =({isActive})=>{
        
            
    return{
        textDecoration: isActive ? 'none' :'underline',
        fontWeight :isActive ? 'bold': 'normal',
        color: isActive ? 'green' :'red'
    }

    }            
            return(
                   <nav>
            {/* <Link to='/'  >Home</Link>
            <Link to='/About'>About</Link> */}




               {/* -------------navlink class='Active */}
                  <NavLink style={NavActive} to='/'>Home</NavLink> 
                <NavLink  style={NavActive} to ='/About'>About</NavLink>
                <NavLink  style={NavActive} to='/Product'> Product</NavLink>

        </nav>
    )
 }

