import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DietForm = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const [dietData, setDietData] = useState({
    patientId: patientId || "",
    meals: {
      morning: { items: [], instructions: "" },
      evening: { items: [], instructions: "" },
      night: { items: [], instructions: "" },
    },
  });

  useEffect(() => {
    // Confirm patientId is set
    if (patientId) {
      setDietData((prevData) => ({ ...prevData, patientId }));
    }
  }, [patientId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [meal, field] = name.split(".");
    setDietData((prevData) => ({
      ...prevData,
      meals: {
        ...prevData.meals,
        [meal]: {
          ...prevData.meals[meal],
          [field]: field === "items" ? value.split(",") : value,
        },
      },
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting dietData:", dietData); // Debug log
      const response = await axios.post(
        "http://localhost:5000/api/dietcharts",
        dietData
      );
      console.log("API Response:", response.data);
      navigate("/admin");
    } catch (error) {
      console.error(
        "Error adding diet:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Diet for Patient</h2>
      <form onSubmit={handleFormSubmit}>
        {["morning", "evening", "night"].map((meal) => (
          <div key={meal}>
            <label>{meal.charAt(0).toUpperCase() + meal.slice(1)} Meal</label>
            <input
              type="text"
              name={`${meal}.items`}
              value={dietData.meals[meal].items.join(",")}
              onChange={handleInputChange}
              placeholder="Enter items, separated by commas"
              className="border px-4 py-2 w-full"
            />
            <textarea
              name={`${meal}.instructions`}
              value={dietData.meals[meal].instructions}
              onChange={handleInputChange}
              placeholder="Enter instructions"
              className="border px-4 py-2 w-full mt-2"
            />
          </div>
        ))}
        <button type="submit" className="p-2 bg-gray-500 rounded text-blue-50">
          Save Diet
        </button>
      </form>
    </div>
  );
};

export default DietForm;
