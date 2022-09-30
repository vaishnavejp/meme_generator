import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Boxes from './components/Boxes';
import boxesData from './components/boxesData';
import React from 'react';
import Jokes from './components/Jokes';
import JokesData from './components/JokesData';
import Forms from './components/Forms';
import Forms2 from './components/Forms2';
import Apis from './components/Apis';

function App() {

  return (
    <div>
      <Header />
      <Inputs />
      {/* <Apis /> */}
    </div>
  );
}

export default App;
