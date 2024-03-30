import React from 'react';
import { HouseFill, FolderFill, CalendarFill, PersonFill, GearFill } from 'react-bootstrap-icons';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>TaskGenius: My Todo List</h1>
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <HouseFill />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <FolderFill />
         Category
          </a>
        </li>
        <li>
          <a href="#">
            <CalendarFill />
            Calendar
          </a>
        </li>
        <li>
          <a href="#">
            <PersonFill />
            User Profile
          </a>
        </li>
        <li>
          <a href="#">
            <GearFill />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;