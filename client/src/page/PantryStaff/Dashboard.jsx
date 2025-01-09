import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dietCharts, setDietCharts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDietCharts();
  }, []);

  const fetchDietCharts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/pantry/patientsWithMeals"
      );
      setDietCharts(data.dietCharts);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching diet charts:", error);
      setLoading(false);
    }
  };

  const updateMealStatus = async (dietChartId, mealTime, newStatus) => {
    try {
      await axios.post("http://localhost:5000/api/pantry/updateMealStatus", {
        dietChartId,
        mealTime,
        status: newStatus,
      });
      fetchDietCharts(); // Refresh data
    } catch (error) {
      console.error("Error updating meal status:", error);
    }
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Patient Meals Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dietCharts.map((chart) => (
          <div
            key={chart._id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Patient: {chart.patientId.name}
            </h2>
            {["morning", "evening", "night"].map((mealTime) => (
              <div key={mealTime} className="mb-4">
                <h3 className="text-lg font-medium text-gray-600 capitalize mb-2">
                  {mealTime}
                </h3>
                <ul className="list-disc list-inside text-gray-500">
                  {chart.meals[mealTime]?.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                  Instructions: {chart.meals[mealTime]?.instructions || "N/A"}
                </p>

                {/* Displaying the status */}
                <p className="text-sm mt-2">
                  <strong>Status:</strong>{" "}
                  <span
                    className={`${
                      chart.meals[mealTime]?.status === "Ready"
                        ? "text-green-500"
                        : chart.meals[mealTime]?.status === "Pending"
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                  >
                    {chart.meals[mealTime]?.status || "N/A"}
                  </span>
                </p>

                {/* Button to update status */}
                <button
                  onClick={() => updateMealStatus(chart._id, mealTime, "Ready")}
                  className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                  Mark as Ready
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
