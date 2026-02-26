🛒 E-Commerce Product API
Assignment 2 – Express.js (In-Memory)

A RESTful API built using Express.js to manage product listings for an e-commerce platform.
All data is stored in an in-memory JSON array (No database used).

🚀 Live Links

🔗 GitHub Repository:
https://github.com/Vachhani-Tapan/ServerAssignments/tree/main/Task-02

🌐 Render Deployment:
https://serverassignments-2.onrender.com/

📬 Postman Documentation:
https://documenter.getpostman.com/view/50841045/2sBXcGCeEC

📌 Objective

This API:

Implements 3 GET routes

Implements 1 POST route

Implements 3 PUT routes

Follows REST principles

Uses proper HTTP status codes

Uses in-memory JSON storage

No validation libraries

No authentication

No database

🧱 Tech Stack

Node.js

Express.js

CORS

Render (Deployment)

Postman (API Documentation)

📂 Project Structure
ecommerce-product-api/
│
├── server.js
├── package.json
└── README.md
🛍 Product Data Structure

Each product follows this format:

{
  id: 1,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 25,
  rating: 4.3
}
📌 API Routes
✅ GET Routes (3)
1️⃣ GET /products
➤ Description:

Returns all products.

➤ Success Response:

Status: 200 OK

Returns full products array

2️⃣ GET /products/:id
➤ Description:

Returns product by ID.

➤ Example:
GET /products/3
➤ Success:

Status: 200 OK

Returns product object

➤ Error:

Status: 404 Not Found

If product does not exist

3️⃣ GET /products/category/:categoryName
➤ Description:

Returns products filtered by category.

➤ Example:
GET /products/category/Electronics
➤ Success:

Status: 200 OK

Returns filtered array

➤ If none found:

Returns empty array []

✅ POST Route (1)
4️⃣ POST /products
➤ Description:

Adds a new product.

➤ Sample Request Body:
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}
➤ Success:

Status: 201 Created

Returns newly created product with auto-generated ID

✅ PUT Routes (3)
5️⃣ PUT /products/:id
➤ Description:

Replaces entire product (except ID).

➤ Success:

Status: 200 OK

Returns updated product

➤ Error:

Status: 404 Not Found

6️⃣ PUT /products/:id/stock
➤ Description:

Updates only stock field.

➤ Example:
PUT /products/2/stock
➤ Request Body:
{
  "stock": 60
}
➤ Success:

Status: 200 OK

Returns updated product

➤ Error:

Status: 404 Not Found

7️⃣ PUT /products/:id/price
➤ Description:

Updates only price field.

➤ Example:
PUT /products/3/price
➤ Request Body:
{
  "price": 1299
}
➤ Success:

Status: 200 OK

Returns updated product

➤ Error:

Status: 404 Not Found

⚙️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/Vachhani-Tapan/ServerAssignments/tree/main/Task-02
2️⃣ Install dependencies
npm install
3️⃣ Start server
node server.js

OR (if using nodemon):

npx nodemon server.js

Server runs on:

http://localhost:3000
📬 Postman Documentation

All 7 routes are documented with:

Sample requests

Sample responses

Proper status codes

Body examples

👉 View here:
https://documenter.getpostman.com/view/50841045/2sBXcGCeEC

🌍 Deployment

This API is deployed on Render.

👉 Live API Base URL:

https://serverassignments-2.onrender.com/

All routes are publicly accessible.

📌 HTTP Status Codes Used
Status Code	Meaning
200	Success
201	Resource Created
404	Resource Not Found
👨‍💻 Author

Vachhani-Tapan
Assignment 2 – REST API (Express.js)