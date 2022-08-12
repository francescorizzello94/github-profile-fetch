import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from '../../components/Header/Header';
import Profile from '../Profile/Profile';
import Repos from '../Repos/Repos';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
      <Repos />
    </div>
  );
}

export default App;
