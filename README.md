# Finance App
📊 Finance App Backend

🚀 Overview

This is the backend for the Finance App, providing secure and scalable APIs for financial data management, user authentication, and transactions. Built using Node.js, Express.js, and MongoDB, this backend ensures efficient handling of user data and financial records.

🔹 Features

✅ User Authentication (Signup/Login with JWT)✅ Transaction Management (Create, Read, Update, Delete)✅ Expense Tracking (Categorization & Summaries)✅ Secure API Endpoints (Middleware for authorization)✅ RESTful API Architecture✅ MongoDB for Data Storage✅ Environment Configuration using .env

🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)

Authentication: JWT (JSON Web Token)

Middleware: Express Middleware for security & validation

Hosting: Deployed on Vercel

📁 Folder Structure

finance-app-backend/
│-- src/
│   │-- controllers/        # Business logic
│   │-- models/             # Mongoose models
│   │-- routes/             # API routes
│   │-- middleware/         # Authentication & validation
│   │-- config/             # Database & environment setup
│   │-- index.js            # Entry point
│-- .env                    # Environment variables
│-- package.json            # Dependencies & scripts
│-- README.md               # Project documentation

🔧 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/your-repo/finance-app-backend.git
cd finance-app-backend

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4️⃣ Start the Server

npm start

The backend will run on http://localhost:5000

📌 API Endpoints

🔹 Authentication

POST /api/auth/signup → User Registration

POST /api/auth/login → User Login (JWT Token)

🔹 Transactions

GET /api/transactions → Get All Transactions

POST /api/transactions → Add a Transaction

PUT /api/transactions/:id → Update Transaction

DELETE /api/transactions/:id → Delete Transaction

🚀 Deployment

This backend is deployed on Vercel. You can access it at:🔗 Finance App Backend

📝 License

This project is open-source and available for modification and distribution.



## Created By Pragati🩷
# Deployment Link 
Vercel deployment: [Finance Manager App](https://finance-app-three-ashen.vercel.app/)
