

//  import {Routes,Route,BrowserRouter} from 'react-router-dom'
 import {Routes,Route}from 'react-router-dom'
 
import { Home } from './Components/Home';
import {About}  from './Components/About'
import { Navbar } from './Components/Navbar';
import { NavOrderSummary } from './Components/NavOrderSummary';
import { NoMatchFound } from './Components/NoMatchFound';
import {Product} from './Components/Product'
import { Feature } from './Components/Feature';
import {New} from './Components/New'

import {User} from './Components/User'
import { UserDetails } from './Components/UserDetails';


function App() {
  return (
    <>
    <Navbar />
   {/* <BrowserRouter> */}
      <Routes>
        <Route  path ='/' element={<Home />} />
        <Route path='About' element={<About />} />
         <Route path='NavOrderSummary' element={<NavOrderSummary/>} />




         <Route path='Product' element={<Product />}>
          <Route index element={<Feature />} />
          <Route path='Feature' element={<Feature />}/>
          <Route path='New' element={<New />} />
         </Route>

             
             <Route path='User' element={<User />} >
             {/* <Route path='User/1' element={<UserDetails />} /> */}

             {/* <Route path='User/:UserId' element={<UserDetails />} /> */}
             <Route path=':UserId' element={<UserDetails />} />
                      </Route>


         <Route path='*' element={<NoMatchFound />}/>
         
      </Routes >
      {/* </BrowserRouter> 
       */}
      </>
  );
}

export default App;
