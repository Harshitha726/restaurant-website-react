import React from 'react';
import { NavLink } from 'react-router-dom';
import OpenStatus from './OpenStatus';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg qb-navbar">
      <div className="container-narrow">
        <NavLink className="navbar-brand" to="/">
          <svg className="ring" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="17" stroke="#C97A3D" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="10" stroke="#C97A3D" strokeWidth="2" />
          </svg>
          QuickBrew
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/chef">Chef</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/events">Events</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item d-none d-lg-block"><OpenStatus /></li>
            <li className="nav-item ms-lg-2">
              <NavLink className="btn-reserve nav-link" to="/reservation">Reserve a Table</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;