import React, { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section>
      <div className="container-narrow">
        <h1>Contact</h1>
        <div className="row g-5">
          <div className="col-lg-5">
            <form className="res-form" onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" className="form-control" required />
              <label>Email</label>
              <input type="email" className="form-control" required />
              <label>Message</label>
              <textarea className="form-control" rows="4" required></textarea>
              <button type="submit" className="btn-primary-qb border-0 w-100">Send Message</button>
              {sent && <div className="res-confirm" style={{ display: 'block' }}>✓ Message sent!</div>}
            </form>
          </div>
          <div className="col-lg-7">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Banjara+Hills,Hyderabad,Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%" height="500" style={{ border: 0 }} loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;