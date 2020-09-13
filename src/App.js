import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from './components/Stack'
import Queue from './components/Queue'
import LinkedList from './components/LinkedList'



let dslist = ['Stack', 'Queue', 'LinkedList']


function DS(props) {
  switch (props.whichDS) {
    case 'Stack':
      return <Stack />
    case 'Queue':
      return <Queue />
    case 'LinkedList':
      return <LinkedList />
    default:
      return <h1>DS not found :(</h1>
  }
}

function DSPicker(props) {
  return (
    <div className="dsPicker">
      {dslist.map((ds) => <button key={ds} className="dsChoice" onClick={() => props.setWhichDS(ds)}>{ds}</button>)}
    </div>
  )
}


function App() {

  const [whichDS, setWhichDS] = useState('choosing')


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{whichDS === 'choosing' ? 'Pick a Data Structure' : whichDS + ' Visualizer'}</h1>
        <i className="fa fa-home" onClick={() => setWhichDS('choosing')}></i>
      </header>

      {whichDS === 'choosing' ? <DSPicker setWhichDS={setWhichDS} /> : <DS whichDS={whichDS} />}

    </div>
  );
}

export default App;
