import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Router from './routes/router';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import './App.css';
function App() {
  return (
      <div className="App">
        <Header/>
        <Router/>
        <Footer/>
      </div>
  );
}

export default App;
