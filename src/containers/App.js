import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header/Header';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
