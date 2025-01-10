# Hospital Food Management System

## Overview

The **Hospital Food Management System** is a web-based application designed to streamline the process of managing patient meals in a hospital setting. It provides an efficient solution for creating diet charts, assigning meals, tracking delivery statuses, and monitoring pantry staff tasks. This system ensures patients receive the right meals as per their dietary needs, improving overall hospital operations.

## Features

- **Patient Management**: Add, update, and retrieve patient details, including dietary restrictions and allergies.
- **Diet Chart Creation**: Create personalized diet plans with morning, evening, and night meals, along with specific instructions.
- **Meal Assignment**: Assign meals to pantry staff and track their preparation and delivery statuses.
- **Pantry Staff Management**: Manage pantry staff details, assign tasks, and track task completion.
- **Interactive Dashboard**: A user-friendly interface for staff to update meal statuses and monitor tasks in real-time.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Libraries**: Axios, Mongoose,bcrypt,cors,dotenv,jsonwebtoken,react-router-dom

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Yashwadkar2121/hospital-food-management.git

Patients
POST /api/patients - Create a new patient.
GET /api/patients - Retrieve all patients.
Diet Charts
POST /api/dietCharts - Create a new diet chart.
GET /api/dietCharts/:patientId/meals - Retrieve meals for a specific patient.
PUT /api/dietCharts/:patientId/meals - Update meals for a specific patient.
Pantry Staff
POST /api/pantryStaff/create - Add new pantry staff.
GET /api/pantryStaff/patientsWithMeals - Retrieve all patients with their assigned meals.
POST /api/pantryStaff/updateMealStatus - Update the status of a specific meal.
Dashboard
The dashboard allows pantry staff to:

Mark meals as "Ready."
View assigned tasks and update their status.
Track daily, evening, and night meal assignments.
Contribution
Contributions are welcome! Fork the repository and create a pull request for new features, bug fixes, or improvements.

License
This project is licensed under the MIT License.

Author
Yashwadkar2121