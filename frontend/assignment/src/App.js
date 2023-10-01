import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Popper from 'popper.js';
import $ from 'jquery';
import './App.css';
import './index.css';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Form from './pages/Form';
import Try from './pages/try';
import Dashboard from './pages/dashboardpages/Dashboard';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      
      <Route path="/" element={<Home/>} />
     <Route path="/add" element={<Form/>} />
     <Route path="/try" element={<Try/>} />
     <Route path="/activate/:token" element={<Dashboard/>} />
    </Routes>
   </>
  );
}

export default App;
