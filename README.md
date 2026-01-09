# Frontend Application

A React + Vite application featuring protected routing, login validation, and a clean dashboard interface.

## Live Demo

🔗 [auth-api-demo-zzfa.vercel.app](https://auth-api-demo-zzfa.vercel.app)

##  Demo Credentials

- **Username:** `sentraWorld`
- **Password:** *(any value)*

##  Features

- Branded login page with `sentra.world` header
- Protected dashboard route using `ProtectedRoute`
- Error feedback for missing fields (e.g. "Password is required")
- Clean UI with responsive layout
- Vercel deployment with GitHub integration

## Tech Stack

- React
- Vite
- React Router DOM
- CSS Modules

## Folder Structure
auth-api-demo/
├── public/
│   └── vite.svg
├── src/
│   ├── routes/
│   │   ├── login.jsx
│   │   ├── dashboard.jsx
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── index.html         
├── package.json
├── vite.config.js
├── README.md
├── .gitignore


##  Getting Started

Clone the repo and run locally:

```bash
git clone https://github.com/Kausalya-t/auth-api-demo.git
cd auth-api-demo
npm install
npm run dev
