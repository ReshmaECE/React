// import logo from './logo.svg'; 
import './App.css';
 import {BrowserRouter,Routes,Route } from 'react-router-dom'
 import {Home} from './Pages/Home'
 import {Books} from './Pages/Books'
import {FavBooks} from './Pages/FavBooks';
import Error  from './Pages/Error';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/Books' element={<Books />} />
         <Route path='Books/:BooksId' element={<FavBooks />}/>
        <Route path='*' element={<Error />} />
       </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
