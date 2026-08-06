import React from 'react';

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a href="https://wa.me/919000012345" target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" aria-label="Chat on WhatsApp">
        💬
      </a>
      <a href="tel:+919000012345" className="fab fab-call" aria-label="Call restaurant">
        📞
      </a>
    </div>
  );
}

export default FloatingActions;