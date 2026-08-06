import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container-narrow">
        <div className="row g-4">
          <div className="col-md-4">
            <h6>QuickBrew Café</h6>
            <p style={{ fontSize: '0.88rem' }}>12 Lakeview Road, Hyderabad<br />Open daily, 7am – 10pm</p>
          </div>
          <div className="col-md-2">
            <h6>Explore</h6>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/events">Events</Link>
          </div>
          <div className="col-md-2">
            <h6>Visit</h6>
            <Link to="/reservation">Reservation</Link>
            <Link to="/chef">Chef</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col-md-4">
            <h6>Stay in touch</h6>
            <p style={{ fontSize: '0.88rem' }}>hello@quickbrew.cafe<br />+91 90000 12345</p>
          </div>
        </div>
        <div className="footer-bottom">© 2026 QuickBrew Café. Built with React, Bootstrap.</div>
      </div>
    </footer>
  );
}

export default Footer;