import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Ausa from "./pages/Ausa/Ausa";
import DoctorDashboard from "./pages/doc"
import Consult from "./pages/call"
import Login from "./pages/login"

function App()  {
  
    return (
      <>
      <Router>
        <Routes>
        <Route path='/' element={<Ausa/>} />
        <Route path='/dashboard' element={<DoctorDashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/tele/consultation' element={<Consult/>} />
        </Routes>
      </Router>

      </>

    );
  }


export default App;
