🎓 Student CGPA API
REST API using Express.js (In-Memory JSON Database)
📌 Project Objective

The Student CGPA API is a RESTful backend application built using Express.js that manages student academic performance records stored in an in-memory JSON array.

This project demonstrates:

REST API design principles

Static and dynamic GET routes

Server-side filtering and aggregation

Proper HTTP status handling

API deployment and documentation

No external database is used. All data is stored inside the project.

🚀 Live Deployment

🔗 Render Deployment:
https://serverassignments-1.onrender.com/

🔗 Postman API Documentation:
https://documenter.getpostman.com/view/50841045/2sBXcGCeEC

🔗 GitHub Repository:
https://github.com/Vachhani-Tapan/ServerAssignments/tree/main/Task-01

🛠️ Tech Stack

Node.js

Express.js

CORS

In-Memory JSON Data

📂 Project Structure

student-cgpa-api/
│
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── index.js

📊 Sample Student Data

Each student record contains:

{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}

}

Minimum 10 student records are maintained in an in-memory JSON array.


📌 Implemented Routes
🔹 1. GET /students

Returns all students.

Status Code: 200
Response: Full JSON array

Example:

GET /students
🔹 2. GET /students/topper

Returns the student with the highest CGPA.

Status Code:

200 → If student exists

404 → If no students available

Example:

GET /students/topper
🔹 3. GET /students/average

Returns the average CGPA of all students.

Response Format:

{
  "averageCGPA": 8.45
}

Status Code: 200

Example:

GET /students/average
🔹 4. GET /students/count

Returns total number of students.

Response Format:

{
  "totalStudents": 10
}

Status Code: 200

Example:

GET /students/count
🔁 Dynamic Routes
🔹 5. GET /students/:id

Returns a student by ID.

Example:

GET /students/3

Status Code:

200 → If student found

404 → If student not found

🔹 6. GET /students/branch/:branchName

Returns all students from a specific branch.

Example:

GET /students/branch/CSE

Behavior:

Returns array of matching students

Case-insensitive filtering handled

Returns empty array if no students found

Status Code: 200

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Vachhani-Tapan/ServerAssignments/tree/main/Task-01
cd student-cgpa-api
2️⃣ Install Dependencies
npm install
3️⃣ Run the Server
node index.js

or (if nodemon installed)

npm run dev

Server runs on:

https://serverassignments-1.onrender.com/
🌍 Deployment (Render)

The API is deployed on Render and publicly accessible.

Make sure:

No hardcoded localhost URLs

Proper PORT usage:

const PORT = process.env.PORT || 3000;
📬 Postman Documentation

The Postman collection includes:

All 6 required routes

Sample requests

Sample responses

Expected status codes

Proper API descriptions

🔗 Public Documentation Link:
https://documenter.getpostman.com/view/50841045/2sBXcGCeEC

✅ HTTP Status Codes Used
Status Code	Meaning
200	Success
404	Resource Not Found
500	Server Error (if applicable)

🎯 Learning Outcomes

After completing this project, the following concepts were implemented:

RESTful API Design

Static & Dynamic Routing

Route Parameters (req.params)

Array Filtering & Aggregation

Clean Route Structure

Proper Middleware Order

Professional Deployment

API Documentation

👨‍💻 Author

Tapan Vachhani