import React, { useState, useEffect } from 'react';

function OpenStatus() {
  const [status, setStatus] = useState({ open: true, text: '' });

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const hour = now.getHours();
      const isOpen = hour >= 7 && hour < 22;
      setStatus({
        open: isOpen,
        text: isOpen ? 'Open Now' : 'Closed — Opens 7:00 AM',
      });
    };
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`open-badge ${status.open ? 'is-open' : 'is-closed'}`}>
      <span className="dot"></span> {status.text}
    </span>
  );
}

export default OpenStatus;