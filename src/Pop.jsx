import React, { useState } from "react";
import "./Popup.css";

const Pop = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    alert("Confirmed!");
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup">
          <button className="popup-close" onClick={handleClose}>
            &times;
          </button>
          <div className="popup-content">
            <div className="popup-icon">?</div>
            <h2 className="popup-title">Confirmation</h2>
            <p className="popup-message">Do you want to continue?</p>
            <div className="popup-actions">
              <button className="popup-btn confirm" onClick={handleConfirm}>
                Ok
              </button>
              <button className="popup-btn cancel" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Pop;
