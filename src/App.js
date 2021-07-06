import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import MyNavBar from './main/Navbar'
import Footer from './main/Footer'

function App() {
  const coordinates = [];
  
  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      data => {
        coordinates.push([data.coords.latitude, data.coords.longitude]);
        window.localStorage.setItem('coordinates', JSON.stringify(coordinates));
      });
  }

  componentDidMount();

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
