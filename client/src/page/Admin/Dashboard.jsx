import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the patients data when the component mounts
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/patients");
        setPatients(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch patient data", err);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <p>Loading patient data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Patient Dashboard</h2>
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
            <th className="border px-4 py-2">Other Details</th>
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
              <td className="border px-4 py-2">{patient.otherDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
