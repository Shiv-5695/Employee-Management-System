import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import EmployeeDetails from "./EmployeeDetails";
import NewDetail from "./NewDetail";
 import Pop from "./Pop";
import Detail from "./Detail";
 
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
        <Route path="/new-form" element={<NewDetail />} />
        <Route path="/detail" element={<Detail />} />

      </Routes>
    </Router>
    </>
  );
}
 
export default App;
