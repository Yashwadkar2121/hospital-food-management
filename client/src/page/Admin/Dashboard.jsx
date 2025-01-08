import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/patients");
        const patientsData = await Promise.all(
          response.data.map(async (patient) => {
            const dietChartResponse = await axios.get(
              `http://localhost:5000/api/dietcharts/${patient._id}/meals`
            );
            return { ...patient, meals: dietChartResponse.data.meals };
          })
        );
        setPatients(patientsData);
      } catch (err) {
        setError("Failed to fetch patient data");
      }
    };

    const fetchAllData = async () => {
      setLoading(true);
      await fetchPatients();
      setLoading(false);
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <p>Loading patient data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-semibold">Patient Dashboard</h2>
        <button className="p-2 bg-gray-500 rounded text-blue-50">
          <Link to="/addpatient">Add Patient</Link>
        </button>
      </div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Diseases</th>
            <th className="border px-4 py-2">Allergies</th>
            <th className="border px-4 py-2">Room Number</th>
            <th className="border px-4 py-2">Bed Number</th>
            <th className="border px-4 py-2">Floor Number</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Contact Info</th>
            <th className="border px-4 py-2">Emergency Contact</th>
            <th className="border px-4 py-2">Morning Meal</th>
            <th className="border px-4 py-2">Afternoon Meal</th>
            <th className="border px-4 py-2">Night Meal</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td className="border px-4 py-2">{patient.name}</td>
              <td className="border px-4 py-2">
                {patient.diseases.join(", ")}
              </td>
              <td className="border px-4 py-2">
                {patient.allergies.join(", ")}
              </td>
              <td className="border px-4 py-2">{patient.roomNumber}</td>
              <td className="border px-4 py-2">{patient.bedNumber}</td>
              <td className="border px-4 py-2">{patient.floorNumber}</td>
              <td className="border px-4 py-2">{patient.age}</td>
              <td className="border px-4 py-2">{patient.gender}</td>
              <td className="border px-4 py-2">{patient.contactInfo}</td>
              <td className="border px-4 py-2">{patient.emergencyContact}</td>
              <td className="border px-4 py-2">
                {patient.meals.morning
                  ? patient.meals.morning.items.join(", ")
                  : "N/A"}
              </td>
              <td className="border px-4 py-2">
                {patient.meals.evening
                  ? patient.meals.evening.items.join(", ")
                  : "N/A"}
              </td>
              <td className="border px-4 py-2">
                {patient.meals.night
                  ? patient.meals.night.items.join(", ")
                  : "N/A"}
              </td>
              <td className="border px-4 py-2">
                <button className="p-2 bg-gray-500 rounded text-blue-50">
                  <Link to={`/adddiet/${patient._id}`}>Add Diet</Link>
                </button>
                <button className="p-2 bg-gray-500 rounded text-blue-50">
                  Edit Diet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
