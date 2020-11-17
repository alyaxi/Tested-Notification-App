import React from 'react'
// import logo from './logo.svg';
import './App.css';
import { initNotification } from './services/firebaseService'

function App() {
  return (
    <div className="App">
      
      <h1>Hello</h1>
      <button onClick={initNotification}> Configuration Notification</button>
    </div>
  );
}

export default App;
