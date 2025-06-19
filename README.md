
# 💬 Chat App Backend

This is the backend service for the Chat Application, built using Node.js, Express, and TypeORM with MySQL as the database. It handles user registration, authentication, real-time messaging, and chat list management.

---

## 🛠️ Features

- JWT-based user authentication
- Real-time messaging via WebSocket (Socket.IO)
- Group and private chat support
- Scalable architecture with modular structure
- TypeORM for database interaction
- Environment-based configuration

---

## 📁 Folder Structure

```
├── uploads/           # Add uploads folder for test in local to store file
├── src/               # Application source code
│   ├── controllers/   # Route controllers
│   ├── services/      # Business logic
│   ├── entities/      # TypeORM entities (database models)
│   ├── middlewares/   # Express middlewares
│   ├── utils/         # Utility functions
│   ├── gateways/      # Socket.IO gateways
│   └── main.ts        # Application entry point
├── tests/             # Unit and integration tests
├── .env               # Example environment configuration
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

---

## ✅ Prerequisites

Before starting the project, ensure the following are installed:

- Node.js (v18 or above)
- MySQL Server
- npm (Node Package Manager)

---

## ⚙️ Environment Configuration

Before running the app, create a `.env` file in the root directory based on the provided `.env.example`. Below is an example:

```env
# App
PORT=3000

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# TypeORM MySQL Database Config
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=chat_app_database

# TypeORM SQLite Database Config
STORAGE_DRIVER=local
LOCAL_UPLOAD_PATH=./uploads/profile
```

Make sure the database specified in `DB_DATABASE` exists, or modify the name accordingly.

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/chat-app-backend.git
cd chat-app-backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment variables:**

Create a `.env` file using the `.env.example` as a template.

4. **Run database migrations (if any):**

```bash
npm run typeorm migration:run
```

5. **Start the development server:**

```bash
npm start
```

---

## 🧪 Running Tests

To run the test suite:

```bash
npm test
```

---

## 📫 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Created and maintained by [Mings606](https://github.com/Mings606).

---

Let me know if you want to include API documentation or socket events in this `README.md` as well!
