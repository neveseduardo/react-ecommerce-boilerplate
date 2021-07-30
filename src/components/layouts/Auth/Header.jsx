import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <header className="header">
          <nav className="row">
                <div className="container">
                    <ul>
                        <li><NavLink to={"/home"}>home </NavLink></li>
                        <li><NavLink to={"/home/contact"}>Contato</NavLink></li>
                    </ul>
                </div>
            </nav>
      </header>
  )
}

export default Header;