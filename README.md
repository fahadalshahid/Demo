<<<<<<< HEAD
# Demo
MERN stack project 
=======
# 🔥 Get Hyped – MERN Stack Clone

A full MERN stack clone of [gethyped.nl](https://www.gethyped.nl) — a social-first content agency website.

---

## 📁 File Structure

```
gethyped/
├── package.json              ← Root scripts (run both servers)
├── .gitignore
│
├── backend/                  ← Express + MongoDB API
│   ├── server.js             ← Entry point
│   ├── .env.example          ← Copy to .env and fill in
│   ├── package.json
│   ├── models/
│   │   └── Contact.js        ← Mongoose schema
│   ├── routes/
│   │   └── contactRoutes.js
│   └── controllers/
│       └── contactController.js
│
└── frontend/                 ← React app
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js           ← React entry
        ├── App.js             ← Root component
        ├── assets/css/
        │   └── global.css     ← CSS variables + reset
        └── components/
            ├── Navbar.jsx / .css
            ├── Hero.jsx / .css
            ├── About.jsx / .css
            ├── Expertises.jsx / .css
            ├── Work.jsx / .css
            ├── Brands.jsx / .css
            ├── CTA.jsx / .css
            ├── ContactModal.jsx / .css
            └── Footer.jsx / .css
```

---

## 🛠️ Prerequisites

Make sure you have these installed:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18+ | https://nodejs.org |
| npm | v9+ | comes with Node |
| MongoDB | v6+ | https://www.mongodb.com/try/download/community |

---

## 🚀 How to Run Locally

### Step 1 — Clone / Download the project

```bash
# If using git
git clone <your-repo-url>
cd gethyped

# Or just unzip the project folder and open terminal inside it
cd gethyped
```

---

### Step 2 — Set up the Backend environment

```bash
cd backend
cp .env.example .env
```

Open `backend/.env` in any text editor and fill in:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/gethyped
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> **Note:** `EMAIL_USER` and `EMAIL_PASS` are optional — the contact form saves to MongoDB even without email setup.

---

### Step 3 — Install all dependencies

**Option A — Install everything at once from root:**

```bash
# From the gethyped/ root folder
npm install
npm run install-all
```

**Option B — Install manually:**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

### Step 4 — Start MongoDB

Make sure MongoDB is running locally:

```bash
# macOS (with Homebrew)
brew services start mongodb-community

# Windows — Start MongoDB service from Services panel
# Or run manually:
mongod --dbpath="C:\data\db"

# Linux
sudo systemctl start mongod
```

---

### Step 5 — Run both servers

**Option A — Run both at once from root (recommended):**

```bash
# From the gethyped/ root folder
npm run dev
```

This starts:
- Backend at `http://localhost:5000`
- Frontend at `http://localhost:3000`

**Option B — Run separately in two terminals:**

```bash
# Terminal 1 — Backend
cd backend
npm run dev

# Terminal 2 — Frontend
cd frontend
npm start
```

---

### ✅ Open in browser

```
http://localhost:3000
```

---

## 🧩 Pages & Features

| Section | Description |
|---------|-------------|
| **Navbar** | Fixed nav with scroll effect, mobile hamburger menu |
| **Hero** | Animated headline, stats (10M+ views, 30+ brands), CTA buttons |
| **About** | Mission statement with feature cards |
| **Expertises** | Interactive 4-tab section (Social Strategy, Content Creation, Activation, Data) |
| **Work** | Portfolio grid with 3 client case cards |
| **Brands** | Infinite scrolling brand ticker/marquee |
| **CTA** | Full-width call to action section |
| **Contact Modal** | Form with validation → saves to MongoDB |
| **Footer** | Links, social icons, contact info |

---

## 🗃️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit contact form |
| `GET` | `/api/contact` | Get all submissions (admin) |

### POST /api/contact — Request Body

```json
{
  "name": "Jan de Vries",
  "email": "jan@bedrijf.nl",
  "phone": "+31 6 0000 0000",
  "message": "Hallo, ik wil graag samenwerken!",
  "acceptedPrivacy": true
}
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary font | Syne (Display) |
| Body font | DM Sans |
| Background | `#0a0a0a` |
| Accent Pink | `#ff3c78` |
| Accent Blue | `#1a1aff` |
| Accent Green | `#00e676` |

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, CSS Modules |
| Backend | Node.js, Express 4 |
| Database | MongoDB + Mongoose |
| Dev Tools | Nodemon, Concurrently |

---

## ⚠️ Common Issues

**MongoDB not connecting?**
- Make sure MongoDB service is running
- Check your `MONGO_URI` in `.env`
- The server will still start without DB (for frontend development)

**Port already in use?**
```bash
# Change port in backend/.env
PORT=5001
# Change proxy in frontend/package.json
"proxy": "http://localhost:5001"
```

**React not starting?**
```bash
cd frontend
rm -rf node_modules
npm install
npm start
```
>>>>>>> 14f255d (Initial commit: MERN stack project setup)
//ff