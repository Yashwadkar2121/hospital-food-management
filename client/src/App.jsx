import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./page/Auth/Login";
import Signup from "./page/Auth/Signup";
import Navbar from "./components/Navbar";
import DashboardAdmin from "./page/Admin/Dashboard";
import DashboardPantryStaff from "./page/PantryStaff/Dashboard";
import DashboardDeliveryP from "./page/DeliveryPersonnel/Dashboard";
import PatientForm from "./page/Admin/PatientForm";
import DietFrom from "./page/Admin/DietFrom";
import PrivateRoute from "./service/PrivateRoute";
import Error from "./components/Error";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/error" element={<Error />} />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DashboardAdmin />
              </PrivateRoute>
            }
          />
          <Route
            path="/addpatient"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <PatientForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/adddiet/:patientId"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <DietFrom />
              </PrivateRoute>
            }
          />

          {/* Pantry Staff routes */}
          <Route
            path="/pentrystaff"
            element={
              <PrivateRoute allowedRoles={["pantry"]}>
                <DashboardPantryStaff />
              </PrivateRoute>
            }
          />

          {/* Delivery routes */}
          <Route
            path="/delivery"
            element={
              <PrivateRoute allowedRoles={["delivery"]}>
                <DashboardDeliveryP />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
