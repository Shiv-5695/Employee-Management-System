import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Axios for API requests
import SplitBasicExample from "./components/buttondropdoswn";

const EmployeeDetails = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]); // State to store employee data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch employee data from backend API
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("https://localhost:7178/api/Employee");
        setEmployees(response.data); // Update state with fetched data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch employee details.");
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const newFrom = (e) => {
    e.preventDefault();
    // Navigate to the EmployeeDetails page after login
    navigate("/new-Form");
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    actionsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "left",
    },
    th: {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      border: "1px solid #ddd",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
    },
    button: {
      padding: "5px 10px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    newButton: {
      backgroundColor: "#28a745",
      color: "#fff",
    },
    printButton: {
      backgroundColor: "#007bff",
      color: "#fff",
    },
    searchInput: {
      padding: "5px",
      borderRadius: "5px",
      border: "1px solid #ddd",
    },
    checkbox: {
      marginRight: "10px",
    },
  };

  if (loading) {
    return <div style={styles.container}>Loading employee details...</div>;
  }

  if (error) {
    return <div style={styles.container}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>Employee</div>
      <div style={styles.actionsContainer}>
        <button style={{ ...styles.button, ...styles.newButton }} onClick={newFrom}>
          + New
        </button>
        <button style={{ ...styles.button, ...styles.printButton }}>Print</button>
        <input
          type="text"
          placeholder="Advance Search"
          style={styles.searchInput}
        />
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>
              <input type="checkbox" style={styles.checkbox} /> Name
            </th>
            <th style={styles.th}>Date Of Joining</th>
            <th style={styles.th}>Employee Code</th>
            <th style={styles.th}>Mobile Number</th>
            <th style={styles.th}>Created By</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td style={styles.td}>
                <input type="checkbox" style={styles.checkbox} />
                {employee.name}
              </td>
              <td style={styles.td}>{employee.dateOfJoining || "Not Specified"}</td>
              <td style={styles.td}>{employee.code || "Not Specified"}</td>
              <td style={styles.td}>{employee.mobile || "Not Specified"}</td>
              <td style={styles.td}>
                {employee.createdBy || "Not Specified"}
                <SplitBasicExample
                  style={{
                    marginLeft: "8px",
                    height: "auto",
                    fontSize: "20px",
                    zIndex: 87,
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
