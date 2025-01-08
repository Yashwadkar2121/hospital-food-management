import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Auth/Login";
import Signup from "./page/Auth/Signup";
import Navbar from "./components/Navbar";
import DashboardAdmin from "./page/Admin/Dashboard";
import DashboardPantryStaff from "./page/PantryStaff/Dashboard";
import DashboardDeliveryP from "./page/DeliveryPersonnel/Dashboard";
import PatientForm from "./page/Admin/PatientForm";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/addpatient" element={<PatientForm />} />
          <Route path="/pentrystaff" element={<DashboardPantryStaff />} />
          <Route path="/delivery" element={<DashboardDeliveryP />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
