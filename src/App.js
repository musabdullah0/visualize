import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from './components/Stack'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Stack Visualizer</h1>
      </header>
      <Stack />
    </div>
  );
}

export default App;
