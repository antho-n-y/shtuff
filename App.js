import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { Home } from './home';
import { Login } from './login';
import { Rec } from './rec';
import './App.css';
import { rec } from './rec';
function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/Login"> Login</Link>
        </li>
        <li>
          <Link to = "/Rec"> Rec</Link>
        </li>
      </ul>
    </nav>



    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rec" element={<Rec />} />
    </Routes>
    </>
  );
}

export default App;
