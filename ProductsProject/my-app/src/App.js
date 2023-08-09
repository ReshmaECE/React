// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import{Products} from './Pages/Products'
import { SingleProducts } from './Pages/SingleProducts';

import { Locdata } from './Pages/Locdata';
import{Task} from './Pages/Task';
import {Error} from './Pages/Error'

import Header from './Components/Header';
import { Task1 } from './Pages/Task1';




function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
       <Header />
     
       <Routes>
        {/* <Route path='/' element={<Home />}  /> */}
          <Route path='/Products' element={<Products />} />
           <Route path='Products/:ProductsId' element={<SingleProducts />} />
           <Route path='/Locdata'  element={ <Locdata />} /> 
           {/* <Route path='/Task' element={<Task />} />
          <Route path='Task/:id' element={<Task1 />} />
           */}
           <Route path='*' element={<Error />} />
           
             </Routes>
        
     
       </BrowserRouter>


       
      
    </div>
  );
}

export default App;
