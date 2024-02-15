import React from 'react'
import Nav from './Header/Nav'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Study from './Study Group/Study';
import Voice from './Voice Connection/Voice';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Coach from './Coach/Coach';
import Rely from './Reliable/Rely';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>
    <Nav/>
    <Study/>
      <Voice/>
      <Coach/>
    <Rely/>
    <Footer/>
    </>
  )
}

export default App
