import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import MyNavBar from './main/Navbar'
import Footer from './main/Footer'

function App() {
  return (
    <div className="App">
      <Router>
         <MyNavBar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
