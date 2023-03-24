
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import * as React from "react"; 
import {Route, Routes} from "react-router-dom"; 
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Beatboxer from './pages/Beatboxer/Beatboxer';
const App = () => {
  return (    
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/create' element={<Create />} /> 
        <Route path='/beatboxer/:id' element={<Beatboxer />} /> 
      </Routes>
    </Router>
  );
}

export default App;
