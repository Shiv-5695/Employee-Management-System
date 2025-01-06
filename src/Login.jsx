import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost:7178/api/Login/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "Login successful") {
          navigate("/employee-details");
        } else {
          setError(data.message || "Login failed. Please try again.");
        }
      } else if (response.status === 401) {
        setError("Invalid credentials. Please check your username and password.");
      } else {
        setError("Server error occurred. Please try again later.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      if (err.name === "TypeError") {
        setError("Unable to connect to the server. Please check your backend service.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    inputField: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      marginBottom: "15px",
    },
    loginButton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#ff007a",
      color: "#fff",
      fontSize: "16px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    errorMessage: {
      color: "red",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Login</h1>
        {error && <div style={styles.errorMessage}>{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.inputField}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.inputField}
            required
          />
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
