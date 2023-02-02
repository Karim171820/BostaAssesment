import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Console } from 'console';
import Nav from './components/navigation/Nav';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ShipmentTrackInput from './components/shipmentTrackInput/ShipmentTrackInput';
import HighLineText from './components/highLineText/HighLineText';

function App() {
return(
  <div>
  <Nav></Nav>
  <HighLineText></HighLineText>
  <ShipmentTrackInput></ShipmentTrackInput>
  </div>
);
    }

export default App;
