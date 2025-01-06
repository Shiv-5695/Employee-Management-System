import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewDetail.css";

const NewDetail = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formValues = Object.fromEntries(data.entries());

    // Validate dateOfJoining
    const dateOfJoining = formValues.dateOfJoining;
    let formattedDateOfJoining;
    if (dateOfJoining) {
      try {
        formattedDateOfJoining = new Date(dateOfJoining).toISOString();
      } catch {
        setError("Invalid Date of Joining format. Please select a valid date.");
        return;
      }
    } else {
      setError("Date of Joining is required.");
      return;
    }

    // Construct payload
    const payload = {
      CreatedBy: "Admin", // Replace with dynamic user data if needed
      dateOfJoining: formattedDateOfJoining,
      email: formValues.email,
      mobile: formValues.mobile,
      phone: formValues.phone,
      birthday: formValues.birthday,
      department: formValues.department,
      employee: {
        title: formValues.title,
        firstName: formValues.firstName,
        middleName: formValues.middleName,
        lastName: formValues.lastName,
        shortName: formValues.shortName,
      },
    };

    try {
      const response = await fetch("https://localhost:7178/api/Employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        navigate("/detail", { state: payload });
      } else {
        const errorMessage = await response.text();
        setError(`Failed to save details. Server responded with: ${errorMessage}`);
      }
    } catch (err) {
      setError("Unable to connect to the server.");
      console.error("Error during submission:", err);
    }
  };

  return (
    <div className="form-container">
      <header>
        <h1>Basic</h1>
        <nav>
          <a href="/home">Home</a> &gt; <a href="/new">New</a>
        </nav>
      </header>

      <div className="tabs">
        <button className="active-tab">Details</button>
      </div>

      <h2>User Details</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group full-width">
            <label>Name</label>
            <div className="name-fields">
              <select name="title">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input type="text" name="firstName" placeholder="First Name" />
              <input type="text" name="middleName" placeholder="Middle Name" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label>Short Name</label>
            <input type="text" name="shortName" placeholder="Short Name" />
          </div>
          <div className="form-group">
            <label>Date of Joining</label>
            <input type="date" name="dateOfJoining" />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input type="email" name="email" placeholder="Email ID" />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <input type="text" name="mobile" placeholder="Mobile Number" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" name="birthday" />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input type="text" name="department" placeholder="Department" />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate("/new")}>
            Save & New
          </button>
          <button type="button" onClick={() => navigate("/home")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewDetail;
