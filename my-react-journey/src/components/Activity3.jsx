import React, { useState } from "react";

const Activity3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="container">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>You Opened This Modal</h2>
            <p>This is a simple modal popup.</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Activity3;
