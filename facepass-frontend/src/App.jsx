
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import * as React from "react"; 
import {Route, Routes} from "react-router-dom"; 
import Home from './pages/Home/Home';
const App = () => {
  return (    
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
