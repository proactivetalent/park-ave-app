# Park Ave Electrical — Developer Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Routing & Pages](#routing--pages)
5. [Key Features](#key-features)
6. [Contact Form Details](#contact-form-details)
7. [Backend API](#backend-api)
8. [Setup & Installation](#setup--installation)
9. [Customization & Extending](#customization--extending)
10. [Contact & Support](#contact--support)

---

## 1. Project Overview

**Park Ave Electrical** is a web application for an electrical services company in New York. The site provides information about services, company background, legal policies, and allows users to contact the company via a form. The frontend is built with React and Tailwind CSS, and the backend is a Node.js/Express server handling contact form submissions.

---

## 2. Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router
- **Backend:** Node.js (Express), Nodemailer
- **Other:** dotenv, cors

---

## 3. Project Structure

```
Park Ave/
  ├── assets/                  # Static assets (images, etc.)
  ├── backend/                 # Node.js backend (Express server)
  │   ├── server.js
  │   ├── package.json
  │   └── ...
  ├── public/                  # Public assets for the frontend
  ├── src/
  │   ├── components/          # React components (Header, Footer, Pages, Forms, etc.)
  │   │   ├── HomePage.jsx
  │   │   ├── ServicesPage.jsx
  │   │   ├── AboutPage.jsx
  │   │   ├── ContactPage.jsx
  │   │   ├── PrivacyPolicyPage.jsx
  │   │   ├── TermsPage.jsx
  │   │   ├── ContactForm.jsx
  │   │   └── ... (other UI components)
  │   ├── App.jsx              # Main React app entry, routing setup
  │   ├── main.jsx             # ReactDOM render entry
  │   └── ...
  ├── package.json             # Frontend dependencies
  ├── tailwind.config.js       # Tailwind CSS config
  ├── vite.config.js           # Vite config
  └── README.md                # (This file)
```

---

## 4. Routing & Pages

Routing is handled in `src/App.jsx` using `createBrowserRouter` from React Router.  
**Main routes:**
- `/` — HomePage (Header, Hero, Main, Why Choose Us, PreFooter, Footer)
- `/services` — ServicesPage (Header, Hero, MainServices, Features, Why Choose Us, PreFooter, Footer)
- `/about` — AboutPage (Header, Hero, MainAbout, Why Choose Us, PreFooter, Footer)
- `/contact` — ContactPage (Header, Hero, ContactForm, Footer)
- `/privacypolicy` — PrivacyPolicyPage (Header, Hero, MainPrivacyPolicy, Footer)
- `/terms` — TermsPage (Header, Hero, MainTerms, Footer)

Each page is composed of modular components for easy editing and extension.

---

## 5. Key Features

- **Responsive Design:** Built with Tailwind for mobile and desktop.
- **Page Routing:** Uses React Router for navigation.
- **Contact Form:** Validates input and sends data to backend.
- **Section Navigation:** Supports hash-based navigation (e.g., `/contact#contact-form` scrolls to the form).
- **Customizable Content:** All text and images are easily editable in components and assets.

> **Note:** There is currently **no dark mode or theme toggle** implemented.

---

## 6. Contact Form Details

- The contact form is in `src/components/ContactForm.jsx`.
- Validates name, surname (min 3 chars), and email (regex).
- On submit, sends a POST request to the backend `/send-email` endpoint.
- Shows success or error messages based on response.
- Contact info and service area are also displayed on the contact page.

---

## 7. Backend API

- Located in `backend/server.js`.
- **POST `/send-email`:** Accepts `{ name, surname, email, message }` and sends an email using Nodemailer (Gmail).
- Uses environment variables for email credentials (`EMAIL_USER`, `EMAIL_PASS`).
- CORS enabled for frontend-backend communication.
- Logs all requests and handles 404s.

---

## 8. Setup & Installation

**Frontend:**
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

**Backend:**
```bash
cd backend
npm install
node server.js
```
- The frontend runs on Vite's default port (usually 5173).
- The backend runs on the port specified in `backend/server.js` (default: 5000).

**Environment Variables:**  
Create a `.env` file in `backend/` with:
```
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

---

## 9. Customization & Extending

- **Add/Edit Pages:** Create or modify components in `src/components/`.
- **Change Navigation:** Update `App.jsx` for routes and navigation.
- **Styling:** Use Tailwind classes in JSX or update `tailwind.config.js`.
- **Assets:** Place new images in `public/assets/` or `assets/`.
- **Backend:** Update `backend/server.js` for API changes.

**Common Customizations:**
- To add a new page, create a new component and add a route in `App.jsx`.
- To change the contact form, edit `ContactForm.jsx`.
- To update company info, edit the relevant text in the components.

---

## 10. Contact & Support

- **Main Developer:** hamza@pbs.nyc
- **Company:** Park Ave Electrical
