# SaaS CRM - Production Grade

A powerful, modern SaaS CRM built with React, Node.js, and PostgreSQL.

## 🚀 Features
- **Dashboard**: Real-time analytics and revenue tracking using Recharts.
- **Kanban Pipeline**: Drag-and-drop lead management (UI).
- **Authentication**: JWT-based auth with Role-Based Access Control (RBAC).
- **REST API**: Clean Express.js backend with Sequelize ORM.
- **Dockerized**: One-command deployment using Docker Compose.

## 🛠 Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons, Recharts, Framer Motion.
- **Backend**: Node.js, Express, Sequelize, PostgreSQL, JWT.
- **Infrastructure**: Docker, Nginx.

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose (Optional)

### Local Development

1. **Clone the repository**
2. **Setup Backend**
   ```bash
   cd server
   npm install
   cp .env.example .env
   # Update .env with your DB credentials
   npm run dev
   ```
3. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```

### Running with Docker
```bash
docker-compose up --build
```

## 📁 Project Structure
- `client/`: React frontend.
- `server/`: Node.js Express backend.
- `docker-compose.yml`: Local orchestration.
