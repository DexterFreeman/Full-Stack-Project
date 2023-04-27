
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import * as React from "react"; 
import {Route, Routes} from "react-router-dom"; 
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Beatboxer from './pages/Beatboxer/Beatboxer';
import Routines from './pages/Routines/Routines';
import Edit from './pages/Edit/Edit';
const App = () => {
  return (    
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} /> 
        <Route path='/create' element={<Create />} /> 
        <Route path='/beatboxer/:id' element={<Beatboxer />} /> 
        <Route path='/routines' element={<Routines />}/>
        <Route path='/edit' element={<Edit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
