import React, { useState } from 'react';

function Reservation() {
  const [party, setParty] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setParty(2);
  };

  return (
    <section>
      <div className="container-narrow">
        <h1>Reserve a Table</h1>
        <form className="res-form" onSubmit={handleSubmit}>
          <label>Full name</label>
          <input type="text" className="form-control" required />

          <label>Phone number</label>
          <input type="tel" className="form-control" required />

          <label>Date</label>
          <input type="date" className="form-control" required />

          <label>Party size</label>
          <div className="party-stepper">
            <button type="button" onClick={() => setParty(p => Math.max(1, p - 1))}>−</button>
            <span>{party}</span>
            <button type="button" onClick={() => setParty(p => Math.min(20, p + 1))}>+</button>
          </div>

          <button type="submit" className="btn-primary-qb border-0 w-100">Confirm Reservation</button>

          {submitted && (
            <div className="res-confirm" style={{ display: 'block' }}>
              ✓ Thanks! Your table request has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Reservation;