import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import "./Detail.css";


const Detail = () => {
  const location = useLocation(); // Get the data passed via navigation
  const formData = location.state || {}; // Ensure state is defined

  const navigate = useNavigate();
 
  const newFro = (e) => {
    e.preventDefault();
    // Navigate to the EmployeeDetails page after login
    navigate("/new-Form");
  };

  return (
    <div className="detail-container">
      <header>
        <h1>Basic</h1>
        <div className="actions">
          <button onClick={newFro}>New</button>
          <button>Print</button>
          <button>Manage Team</button>
          <button>Geography Mapping</button>
        </div>
      </header>

      <div className="tabs">
        <button className="active-tab">Details Page</button>
      </div>

      <h2>Key Information</h2>
      <div className="details-grid">
        <div>
          <p><strong>Name:</strong> {formData.name || "Not Specified"}</p>
          <p><strong>Short Name:</strong> {formData.shortName || "Not Specified"}</p>
          <p><strong>Date Of Joining:</strong> {formData.dateOfJoining || "Not Specified"}</p>
          <p><strong>Email ID:</strong> {formData.email || "Not Specified"}</p>
          <p><strong>Mobile:</strong> {formData.mobile || "Not Specified"}</p>
          <p><strong>Phone:</strong> {formData.phone || "Not Specified"}</p>
        </div>
        <div>
          <p><strong>Birthday:</strong> {formData.birthday || "Not Specified"}</p>
          <p><strong>Department:</strong> {formData.department || "Not Specified"}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
