import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Ausa from "./pages/Ausa/Ausa";
import Navbar from "./components/Navbar";


class App extends Component {
  render (){
    return (
      <>
      <Navbar/>
      <Ausa/>
      </>
    );
  }
  
}

export default App;
