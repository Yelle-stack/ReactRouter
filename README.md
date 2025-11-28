# 🌐 React Job Board – Multi-Page Web App with React Router
This project is a React-based multi-page application built with Vite and powered by React Router v6.
It demonstrates routing, nested layouts, dynamic routes, loaders, error handling, and a clean UI inspired by modern job listing websites.

## ✨ Features
🧭 Full navigation system with react-router-dom

📄 Multiple pages: Home, Products, About, Contact, Jobs

🧱 Nested Layouts (Root layout, Contact layout, Jobs layout)

📬 Contact page with two sections:

Contact information

Contact form

📚 Jobs listing with:

Dynamic job details pages (/jobs/:id)

Data fetched through route loaders

Error handling for failed fetches

❌ 404 page (NotFound) for invalid routes

⚠️ Custom error boundary for the Jobs section

🎨 Simple, modern user interface with clean navigation

## 🛠️ Tech Stack
⚛️ React 18

🚦 React Router v6.22 (loaders, nested routes, errorElement)

⚡ Vite (fast dev environment)

🧩 CSS styling (custom design)

🗂 Modular component architecture

## 📁 Main Components
Navbar – navigation with NavLink and dynamic styling

ContactForm & ContactInfo – nested routes inside /contact

Jobs – page that loads job offers from a local JSON API

JobDetails – dynamic route with loader (/jobs/:id)

Error.jsx – custom error page using useRouteError()

NotFound.jsx – fallback route for unknown pages

Layouts – RootLayout, ContactLayout, JobsLayout for structure

## 🚀 Purpose of the Project
This project is designed to practice and demonstrate:

Advanced React Router features

Dynamic routes and route loaders

Error boundaries

Component composition & layout nesting

Working with a local API (e.g., JSON Server)

Clean, minimalist UI with modern navigation
