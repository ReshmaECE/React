import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header    from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import {Home} from './Pages/Home.jsx'
import{About} from './Pages/About.jsx'
import {Product} from './Pages/Product.jsx'
import {SingleProduct} from './Pages/SingleProduct.jsx'
import {Error} from './Pages/Error.jsx'
function App() {
  return (
    <div className="App">
    <BrowserRouter >
    < Header />
    <Routes>
      <Route   path='/' element={<Home />}/>
      <Route path='About' element={<About />} />
       <Route path='Product' element={<Product />} />
      <Route  path='Product/:ProductId' element={<SingleProduct />}/>
      <Route path='*' element={<Error/>} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
