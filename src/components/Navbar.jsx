import React from 'react';
import { HouseFill, PlusCircleFill, PersonFill, Search } from 'react-bootstrap-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-item">
          <HouseFill />
        </div>
        <div className="navbar-item">
          <PlusCircleFill />
        </div>
      </div>
      <div className="navbar-center">
        <h1>TaskGenius</h1>
      </div>
      <div className="navbar-right">
        <div className="navbar-item">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-item">
          <PersonFill />
          <span>Welcome, User!</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;