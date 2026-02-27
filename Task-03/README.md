🇮🇳 State Statistics Management API

A complete REST API built using Express.js to manage statistical data of Indian states using an in-memory JSON array.

This project demonstrates proper REST architecture including:

GET

POST

PUT

PATCH

DELETE

No database used.
No authentication.
No external validation libraries.

🚀 Live Deployment

🔗 Render Deployment Link
https://your-render-link.onrender.com

📂 GitHub Repository

🔗 GitHub Repo Link
https://github.com/your-username/state-statistics-api

📬 Postman API Documentation

🔗 Postman Documentation Link
https://documenter.getpostman.com/view/your-doc-id

Includes:

All 13 routes

Sample requests

Sample responses

Status codes

📌 Project Objective

This API manages statistical data of Indian states.

It demonstrates:

REST principles

Dynamic route handling

Proper HTTP methods

Difference between PUT and PATCH

Resource deletion logic

Server-side data computation using arrays

🛠️ Tech Stack

Node.js

Express.js

CORS

JavaScript (ES6)

📊 Data Structure

Each state follows this structure:

{
  id: 1,
  name: "Gujarat",
  population: 63872399,
  literacyRate: 78.03,
  annualBudget: 243965,
  gdp: 21000000
}
🔥 API Routes Overview

Base URL:

https://your-render-link.onrender.com
✅ A. GET Routes
1️⃣ GET /states

Returns full list of states
Status: 200

2️⃣ GET /states/:id

Returns state by ID
Status:

200 → If found

404 → If not found

3️⃣ GET /states/highest-gdp

Returns the state with highest GDP
Status: 200

✅ B. POST Route
4️⃣ POST /states

Creates a new state

Status:

201 → Created

Auto-generates unique ID.

✅ C. PUT Routes (Full Replacement)
5️⃣ PUT /states/:id

Replaces entire state record (except id)

6️⃣ PUT /states/:id/budget

Replaces annualBudget

7️⃣ PUT /states/:id/population

Replaces population

Status:

200 → Success

404 → If state not found

✅ D. PATCH Routes (Partial Update)
8️⃣ PATCH /states/:id/literacy

Updates literacyRate only

9️⃣ PATCH /states/:id/gdp

Updates gdp only

🔟 PATCH /states/:id

Partially updates provided fields

Example:

{
  "annualBudget": 280000
}

Status:

200 → Success

404 → If not found

✅ E. DELETE Routes
1️⃣1️⃣ DELETE /states/:id

Deletes state by ID
Status:

204 → Success

404 → Not found

1️⃣2️⃣ DELETE /states/name/:stateName

Deletes state by name (case-insensitive)

1️⃣3️⃣ DELETE /states/low-literacy/:percentage

Deletes all states with literacyRate less than given value.

Returns:

{
  "deletedCount": 2
}
⚙️ Installation & Setup

Clone the repository:

git clone https://github.com/your-username/state-statistics-api.git

Navigate to project folder:

cd state-statistics-api

Install dependencies:

npm install

Start server:

node index.js

Server runs on:

http://localhost:3000
📌 Status Codes Used

200 → Success

201 → Resource Created

204 → No Content (Delete Success)

404 → Resource Not Found

📚 Key Concepts Demonstrated

REST Architecture

Route Parameters

Express Middleware Order

In-Memory Data Manipulation

Array Methods (find, filter, reduce, map)

PUT vs PATCH Difference

Proper HTTP Semantics

👨‍💻 Author

Tapan Vachhani