import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <div className="container-narrow text-center">
        <div className="section-eyebrow">Error 404</div>
        <h1>This table isn't set.</h1>
        <p className="lead mx-auto">The page you're looking for doesn't exist — but the menu does.</p>
        <Link to="/" className="btn-primary-qb">Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;