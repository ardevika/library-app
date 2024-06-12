
import './App.css';
import AddBook from './components/AddBook';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchBook from './components/SearchBook';
import ViewBook from './components/ViewBook';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element ={<AddBook/>}/>
    <Route path='/SearchBook' element ={<SearchBook/>}/>
   
    <Route path='/ViewBook' element ={<ViewBook/>}/>
    </Routes>
    </BrowserRouter>
    
    
  
  );
}

export default App;
