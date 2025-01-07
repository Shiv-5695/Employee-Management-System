import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Pop from "../Pop"; // Import the popup component
import "./buttondropdown.css"; // Import CSS for custom styling

function SplitBasicExample() {
  const [showPopup, setShowPopup] = useState(false);

  const handleEditClick = () => {
    setShowPopup(true); // Show the popup when Edit is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };

  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          split
          variant="success"
          id="dropdown-split-basic"
          className="vertical-dots-toggle"
        >
          <span className="vertical-dots">⋮</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Clone</Dropdown.Item>
          <Dropdown.Item onClick={handleEditClick}>Edit</Dropdown.Item>
          <Dropdown.Item href="#/action-3">InActive</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Render the popup only if showPopup is true */}
      {showPopup && <Pop onClose={handleClosePopup} />}
    </>
  );
}

export default SplitBasicExample;
