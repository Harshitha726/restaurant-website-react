import React from 'react';

const events = [
  { date: '14 Aug', title: 'Coffee Cupping Session', desc: 'Taste four single-origin roasts side by side.', time: '6:00 PM' },
  { date: '21 Aug', title: 'Latte Art Workshop', desc: 'Hands-on class on steaming milk and pour patterns.', time: '4:00 PM' },
  { date: '30 Aug', title: "Chef's Table", desc: 'A 5-course tasting menu.', time: '7:30 PM' },
];

function Events() {
  return (
    <section>
      <div className="container-narrow">
        <h1>Events</h1>
        {events.map((ev, i) => (
          <div className="event-row" key={i}>
            <div className="event-date">{ev.date}</div>
            <div className="info">
              <h5>{ev.title}</h5>
              <p>{ev.desc}</p>
              <span className="time">{ev.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;