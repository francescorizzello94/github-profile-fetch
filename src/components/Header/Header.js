import React from "react";
import './Header.css';

const Header = ({ logo }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <a
      className="App-link"
      href="https://holoplot.com"
      target="_blank"
      rel="noopener noreferrer">
      Learn about Holoplot
    </a>
    </header>
)

export default Header;