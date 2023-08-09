
import{Link,NavLink} from 'react-router-dom'



const Header=()=> {
    return (
        <header >
        <div className='conatiner'>
                <nav>
          {/* <div className='logo'>
            <NavLink to='./' className='brand'></NavLink>
          </div> */}
          {/* <div className=' nav nav=pills'> */}
          <div className='nav'>
            <NavLink to='./'  style={{ marginRight: 100 }}  className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to='About' style={{ marginRight: 100 }} className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
         <NavLink to='Product' style={{ marginRight: 100 }}  className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'} >Product</NavLink>
          
         
          </div>
          </nav>
        </div>
        
        </header>
    )
}

export default Header
