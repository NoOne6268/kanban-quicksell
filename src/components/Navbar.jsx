import React, { useState } from "react";
import Display from "../assets/display.svg";
import Down from "../assets/down.svg";
import "../styles/navbar.css";

const NavBar = ({ setGroup, setOrder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getGroup = localStorage.getItem("group") || "user";
  const getOrder = localStorage.getItem("order") || "priority"; 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupChange = (e) => {
    setGroup(e.target.value);
    localStorage.setItem("group", e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
    localStorage.setItem("order", e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="dropdown-container">
        <button
          className={`dropdown-button ${isOpen && "open"}`}
          onClick={toggleDropdown}
        >
          <img src={Display} alt="Logo" className="logo" />
          Display
          <span>
            <img src={Down} alt="Dropdown arrow" className={`logo ${isOpen && "invert"}`} />
          </span>
        </button>

        {isOpen && (
          <div className="dropdown-content">
            <div className="dropdown-option">
              <span className="dropdown-text">Grouping</span>
              <select
                className="dropbox"
                value={getGroup}
                onChange={handleGroupChange}
              >
                <option value="user">User</option>
                <option value="status">Status</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="dropdown-option">
              <span className="dropdown-text">Ordering</span>
              <select
                className="dropbox"
                value={getOrder}
                onChange={handleOrderChange}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;