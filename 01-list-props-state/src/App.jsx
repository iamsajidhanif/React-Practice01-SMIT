
import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import List from './components/List';

function App() {
  return (
    <>
      <div className='App'>
        <h1>01 | List-Props-State</h1>
        <List />
        <img src={logo} alt='react-logo' srcset='' />
      </div>
    </>
  );
}

export default App;
