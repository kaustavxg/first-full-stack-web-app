# My First Full-Stack Application: Simple User Authentication

This project is my first complete full-stack application, featuring a simple user authentication system. It includes a frontend built with HTML, CSS, and JavaScript, and a backend API built with Node.js and Express.

---

### ✨ Live Demo

[**https://full-stack-new.vercel.app/**](https://full-stack-new.vercel.app/)

---

### 🚀 Project Overview

This application demonstrates fundamental concepts of full-stack development. The primary goal was to learn how to build a secure, decoupled application and deploy it to modern cloud platforms.

#### Key Features:
* **User Signup:** New users can create an account.
* **User Signin:** Existing users can sign in to receive a JSON Web Token (JWT).
* **Authenticated Data:** Users can access protected information by providing their JWT.
* **Decoupled Architecture:** The frontend and backend are completely separate applications, communicating via a REST API.

---

### 💻 Tech Stack

#### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Authentication:** JSON Web Tokens (JWT)
* **CORS:** `cors` middleware

#### Frontend
* **Structure:** HTML5
* **Styling:** CSS3
* **Logic:** JavaScript (ES6+)
* **API Requests:** Axios (via CDN)

#### Deployment
* **Backend Hosting:** Render
* **Frontend Hosting:** Vercel

---

### 🏗️ Project Architecture

To follow modern development practices, this project is structured as a monorepo with two distinct parts:

* `frontend/`: A completely static site containing all the client-side code. It is deployed on **Vercel**.
* `backend/`: A Node.js server that exposes a REST API for user management. It is deployed on **Render**.

This separation allows for independent development, scaling, and deployment of the client and server.

---

### 🔧 Running Locally

To run this project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd first-full-stack-web-app
    ```

2.  **Set up the Backend:**
    ```bash
    cd backend
    npm install
    npm start 
    # The server will start on http://localhost:8080
    ```

3.  **Run the Frontend:**
    * Navigate to the `frontend` directory.
    * Open the `index.html` file directly in your browser.

---

### 🌟 Key Learnings

This project was a fantastic learning experience. The main concepts I focused on were:
* Building a RESTful API with Node.js and Express.
* Implementing token-based authentication using JWT.
* Managing Cross-Origin Resource Sharing (CORS) between two different domains.
* Structuring a project into separate frontend and backend applications.
* Deploying a Node.js server to Render and a static site to Vercel.

---