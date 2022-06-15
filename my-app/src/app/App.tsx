import React from 'react';
// import $ from 'jquery';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Router from './routes/router';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import './App.css';
// import rootReducer from './reducers'
// import { createStore } from 'redux'

// const store = createStore(rootReducer)

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <Header/>
        <Router/>
        <Footer/>
      </div>
    //</Provider>
    
  );
}

export default App;
