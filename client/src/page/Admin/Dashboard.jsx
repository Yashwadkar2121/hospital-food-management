import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Modal Component
const DietModal = ({ patient, closeModal, updateDiet }) => {
  const [diet, setDiet] = useState(patient.meals);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedDiet = { meals: diet };
    await updateDiet(patient._id, updatedDiet);
    closeModal(); // Close modal after submitting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl mb-4">Edit Diet for {patient.name}</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Morning Meal:</label>
            <input
              type="text"
              value={diet.morning.items.join(", ")}
              onChange={(e) =>
                setDiet({
                  ...diet,
                  morning: { items: e.target.value.split(", ") },
                })
              }
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Afternoon Meal:</label>
            <input
              type="text"
              value={diet.evening.items.join(", ")}
              onChange={(e) =>
                setDiet({
                  ...diet,
                  evening: { items: e.target.value.split(", ") },
                })
              }
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Night Meal:</label>
            <input
              type="text"
              value={diet.night.items.join(", ")}
              onChange={(e) =>
                setDiet({
                  ...diet,
                  night: { items: e.target.value.split(", ") },
                })
              }
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save Changes
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="ml-2 bg-gray-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

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

  const openModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const updateDiet = async (patientId, updatedDiet) => {
    try {
      await axios.put(
        `http://localhost:5000/api/dietcharts/${patientId}/meals`,
        updatedDiet
      );
      const updatedPatients = patients.map((patient) =>
        patient._id === patientId
          ? { ...patient, meals: updatedDiet.meals }
          : patient
      );
      setPatients(updatedPatients);
    } catch (error) {
      console.error("Error updating diet:", error);
    }
  };

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
                <button
                  className="p-2 bg-gray-500 rounded text-blue-50"
                  onClick={() => openModal(patient)}
                >
                  Edit Diet
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <DietModal
          patient={selectedPatient}
          closeModal={closeModal}
          updateDiet={updateDiet}
        />
      )}
    </div>
  );
};

export default Dashboard;
