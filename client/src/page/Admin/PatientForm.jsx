import { useState } from "react";
import axios from "axios";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    diseases: "",
    allergies: "",
    roomNumber: "",
    bedNumber: "",
    floorNumber: "",
    age: "",
    gender: "Male",
    contactInfo: "",
    emergencyContact: "",
    otherDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/patients",
        formData
      );
      alert("Patient created successfully");
      setFormData({
        name: "",
        diseases: "",
        allergies: "",
        roomNumber: "",
        bedNumber: "",
        floorNumber: "",
        age: "",
        gender: "Male",
        contactInfo: "",
        emergencyContact: "",
        otherDetails: "",
      });
      console.log(response);
    } catch (err) {
      console.error("Error creating patient:", err);
      alert("Failed to create patient");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Patient Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="diseases" className="block text-sm font-medium">
          Diseases
        </label>
        <input
          type="text"
          id="diseases"
          name="diseases"
          value={formData.diseases}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="allergies" className="block text-sm font-medium">
          Allergies
        </label>
        <input
          type="text"
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="roomNumber" className="block text-sm font-medium">
          Room Number
        </label>
        <input
          type="text"
          id="roomNumber"
          name="roomNumber"
          value={formData.roomNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bedNumber" className="block text-sm font-medium">
          Bed Number
        </label>
        <input
          type="text"
          id="bedNumber"
          name="bedNumber"
          value={formData.bedNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="floorNumber" className="block text-sm font-medium">
          Floor Number
        </label>
        <input
          type="text"
          id="floorNumber"
          name="floorNumber"
          value={formData.floorNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          min="0"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="contactInfo" className="block text-sm font-medium">
          Contact Info
        </label>
        <input
          type="text"
          id="contactInfo"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="emergencyContact" className="block text-sm font-medium">
          Emergency Contact
        </label>
        <input
          type="text"
          id="emergencyContact"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="otherDetails" className="block text-sm font-medium">
          Other Details
        </label>
        <input
          type="text"
          id="otherDetails"
          name="otherDetails"
          value={formData.otherDetails}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default PatientForm;
