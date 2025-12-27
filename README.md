**📝 MERN Task Manager Application**

**1️. About the Project**

This is a simple full-stack Task Manager application built using the MERN stack.
The project demonstrates how a React frontend communicates with a Node.js and Express backend through REST APIs, with data stored in MongoDB Atlas.

Users can create, view, update, and delete tasks in real time.
This project is intended for learning full-stack development fundamentals such as CRUD operations, frontend-backend integration, and database connectivity.

**2️. Features**

➕ Add new tasks

📋 View all tasks

✅ Mark tasks as completed

❌ Delete tasks

🌐 RESTful API backend

☁️ MongoDB Atlas cloud database

🔄 Real-time UI updates using React state

**3️. Technologies Used**
🛠️ Frontend

React

Vite

Axios

CSS

🛠️ Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv

cors

**4️. Local Setup**
⚙️ Environment Variables

Create a .env file inside the backend folder:

PORT=5000
DbString=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager


⚠️ Make sure MongoDB Atlas allows access from your IP
(use 0.0.0.0/0 during development).

▶️ Run the Backend
cd backend
npm install
npm run dev


Expected output:

MongoDB is connected
Server running on port 5000


Backend URL:

http://localhost:5000

▶️ Run the Frontend

Open a new terminal:

cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/app/api/Tasks	Fetch all tasks
POST	/app/api/Add	Add a new task
PATCH	/app/api/update/:id	Update a task
DELETE	/app/api/delete/:id	Delete a task

**5. Future Enhancements**

🔐 User authentication (JWT)

🎨 Improved UI (Tailwind / Material UI)

📱 Mobile responsiveness

🚀 Deployment (Netlify + Render)

**6. Conclusion**

This project helped reinforce:

MERN stack fundamentals

REST API design

React hooks and Axios

MongoDB Atlas integration

Frontend-backend communication
