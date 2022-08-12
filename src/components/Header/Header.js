import React from "react";
import './Header.css';
import Link from "../Link/Link";

const Header = ({ logo }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Link url="https://holoplot.com" title="Holoplot" />
  </header>
)

export default Header;