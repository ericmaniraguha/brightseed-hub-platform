# BrightSeed Hub Ltd – Platform Architecture & Plan

**Prepared by:** BrightSeed Hub Ltd  
**Purpose:** Define the structure, pages, design, functionality, and data engineering strategy of the company website and platform.

---

## 1. Overview
**Company Name:** BrightSeed Hub Ltd  
**Industry:** IT Solutions, AI & Data Analytics, Data Engineering, Research, Innovation  
**Target Audience:** Businesses, organizations, and clients looking for IT, AI, and data analytics solutions.

### Website Goals:
- Showcase company services and solutions.
- Share research and project updates dynamically.
- Enable potential clients to contact the company.
- Highlight capabilities in Data Engineering and Data Migration.

---

## 2. Recommended Pages & Structure

| Page | Purpose | Key Features | Estimated Content Length |
|------|---------|--------------|--------------------------|
| **1. Home** | First impression, highlight services and projects | Hero banner, CTA buttons, featured services, brief about section, latest project highlights | 1 page |
| **2. About Us** | Introduce company, mission, vision, and team | Company history, mission, values, team profiles with social links | 1 page |
| **3. Services** | Detail all services offered | IT Solutions, AI & Data Analytics, Data Engineering, Business Intelligence; icon grid layout | 1-2 pages |
| **4. Projects** | Showcase ongoing or completed projects | Dynamic project cards: title, description, image, link to details | Dynamic (Admin managed) |
| **5. Research** | Highlight R&D and tech initiatives | Artificial Intelligence in Healthcare, Data Science research, etc. | 1 page |
| **6. Careers** | List open positions for the company | Dynamic list of jobs fetched from backend; "Apply Now" buttons | Dynamic (Admin managed) |
| **7. Contact** | Provide ways for clients to reach the company | Functional dynamic contact form, email & phone, location details | 1 page |

---

## 3. Data Engineering & Migration Expertise
BrightSeed Hub excels in handling large-scale data systems. Our platform will prominently feature our core competencies in:

- **Data Engineering & Architecture:** Designing highly scalable ETL/ELT pipelines, data lakes, and real-time streaming infrastructure to process unstructured and structured data.
- **Seamless Data Migration:** Strategizing and executing secure migrations from legacy on-premise databases to modern cloud environments (AWS, GCP, Azure) ensuring zero data loss and minimal downtime.
- **Business Intelligence Integration:** Building the foundation required to power our AI and Data Analytics dashboards.

---

## 4. Design & Style Guidelines

### Color Palette
- **Primary:** Bright Blue (`#007BFF`)
- **Secondary:** Light Green (`#00C853`)
- **Accent:** Dark Gray (`#2E2E2E`)
- **Background:** White (`#FFFFFF`)

### Typography
- **Headings:** Montserrat / Poppins
- **Body:** Roboto / Open Sans

### Visual Aesthetics
- Hero banners with modern AI/Tech illustrations.
- Glassmorphism effects (`.glass` CSS classes) on cards and modules.
- Smooth micro-animations on hover for buttons, avatars, and project cards.

---

## 5. Dynamic Features & Admin Dashboard
The platform includes a custom-built secure Admin Dashboard (`/admin`) for content management:
- **Contact Form:** Sends inquiries directly to the backend database and triggers automated email responses via SMTP.
- **Careers Management:** Add, edit, or close job postings directly from the dashboard.
- **Project & Blog Updates:** Dynamically add new projects and insights without touching the codebase.
- **Authentication:** JWT-secured admin routes backed by SQLite/PostgreSQL.

---

## 6. Technology Stack

### Option Chosen: Fully Custom Full-Stack Development
- **Frontend:** React.js + Vite + Vanilla CSS (Custom modern styling)
- **Backend:** Node.js + Express.js
- **Database:** SQLite (Portable for local development) / PostgreSQL (For production) + Sequelize ORM
- **Email:** Nodemailer (SMTP integration for SendGrid/Gmail)
- **Containerization:** Docker & Docker Compose configured for single-container deployment

---

## 7. Folder Architecture

```text
brightseed-hub/
├── docker-compose.yml
├── Dockerfile
├── .dockerignore
├── backend/
│   ├── config/
│   │   └── db.js                      # Database connection (SQLite/PostgreSQL)
│   ├── controllers/
│   │   ├── contactController.js       # Handles contact form submissions & emails
│   │   ├── adminController.js         # Admin login, add/update/delete content
│   │   └── careerController.js        # Dynamic jobs APIs
│   ├── models/
│   │   ├── AdminUser.js               
│   │   ├── Career.js                 
│   │   ├── Blog.js                    
│   │   └── Message.js                 
│   ├── routes/
│   ├── utils/
│   │   └── sendEmail.js               # Email sending logic
│   ├── middleware/
│   │   └── authMiddleware.js          # JWT auth middleware
│   ├── server.js                      # Express server entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/                # Reusable UI (Navbar, Footer, Table, etc.)
│   │   ├── pages/                     # Public pages (Home, About, Contact, Research, Career)
│   │   ├── admin/                     # Admin dashboard pages (ManageCareers, Login, etc.)
│   │   ├── App.jsx                    # React Router setup
│   │   └── index.css                  # Global styles and design system
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 8. Development Credentials
- **Admin Login:** `admin@brightseedhub.com`
- **Admin Password:** `admin123`

---

## 9. How to Test & Run the Application

Follow these steps to run the platform on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Step 1: Clone and Install
First, install the dependencies for both the frontend and backend.
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: Configure Environment Variables
In the `backend` folder, duplicate the `.env.example` file and rename it to `.env`.
```bash
cd backend
cp .env.example .env
```
*(The default settings in `.env.example` will work out of the box because the database uses SQLite locally).*

### Step 3: Start the Development Servers
You need to run both the backend API and the frontend React app simultaneously.

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
# The API will run on http://localhost:8003
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
# The Website will run on http://localhost:5173
```

### Step 4: Database Migrations
Because the backend is configured to use Sequelize ORM with `alter: true`, **database migrations happen automatically**. 
When you start the backend server (`npm run dev`), Sequelize will automatically:
- Connect to the SQLite database (or create `backend/database.sqlite` if it doesn't exist).
- Read all your Models (`AdminUser.js`, `Career.js`, etc.).
- Automatically generate or alter the database tables to match your models.

You do **not** need to run any manual migration commands!

### Step 5: Seed the Database
To create the root admin user so you can log into the dashboard, run this command in a new terminal window (or use Postman):
```bash
curl -X POST http://localhost:8003/api/v1/admin/seed
```
This reads `ADMIN_EMAIL` and `ADMIN_PASSWORD` from your `.env` file and creates the user securely in the database.

### Step 6: Testing the Application
Once both servers are running and the database is seeded, you can test the platform:

1. **Test the Public Site:** 
   Open [http://localhost:5173](http://localhost:5173) in your browser. Navigate through the pages (Home, About, Services).
2. **Test the Dynamic Careers Page:** 
   Go to [http://localhost:5173/career](http://localhost:5173/career). If there are no jobs, it will gracefully show "No open positions right now".
3. **Test the Admin Dashboard:** 
   Go to [http://localhost:5173/admin/login](http://localhost:5173/admin/login) and log in using the credentials from your `.env` file (Default: `admin@brightseedhub.com` / `admin123`).
4. **Test Data Creation:** 
   Inside the admin dashboard, click on **Careers**, click **Add Position**, fill out the form, and save. Then go back to the public Careers page to verify the job appears instantly!

---

### (Optional) Run with Docker
If you prefer running everything in a single container without installing Node.js locally:
```bash
# From the root brightseed-hub directory
docker-compose up --build
```
This builds both the frontend and backend and serves them together on **port 8003**. You can then access the app at [http://localhost:8003](http://localhost:8003).
