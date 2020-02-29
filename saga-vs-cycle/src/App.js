import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './containers/Cart';
import Item from './containers/Item';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import HotelIcon from '@material-ui/icons/Hotel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React<img src={logo} className="App-logo" alt="logo" />Travel Agency
        
          <Cart />
          <div>
          <Item name="WRO-KEF"><FlightLandIcon /></Item>
          <Item name="Bus"><AirportShuttleIcon /></Item> 
          <Item name="Hotel ***"><HotelIcon /></Item> 
          <Item name="Bus"><AirportShuttleIcon /></Item> 
          <Item name="KEF-WRO"><FlightTakeoffIcon /></Item>
          </div>  
      </header>
      
    </div>
  );
}

export default App;
