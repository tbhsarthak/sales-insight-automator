# Sales Insight Automator

## Overview

Sales Insight Automator is a full-stack AI-powered tool that allows teams to upload sales CSV/Excel data and automatically generate a professional AI summary which is sent to a specified email.

The application includes:

* React SPA frontend
* Node.js backend API
* AI integration (Gemini)
* Email delivery service
* Docker containerization
* Swagger API documentation
* Cloud deployment

---

## Live Links

Frontend
https://sales-insight-automator.vercel.app

Backend API
https://sales-insight-automator-zi9z.onrender.com

---

## Features

* Upload CSV sales data
* AI-generated executive summary
* Email delivery of the report
* Swagger API testing interface
* Docker containerized environment

---

## Tech Stack

Frontend
React (Vite)

Backend
Node.js + Express

AI Engine
Google Gemini API

Deployment
Vercel (Frontend)
Render (Backend)

Containerization
Docker + docker-compose

---

## Running Locally

Clone repository

```
git clone https://github.com/tbhsarthak/sales-insight-automator
cd sales-insight-automator
```

Start services

```
docker-compose up --build
```

Backend will run on:

```
http://localhost:5000
```

Frontend will run on:

```
http://localhost:5173
```

---

## Environment Variables

Create `.env` file in `backend` folder:

```
GEMINI_API_KEY=
EMAIL_USER=
EMAIL_PASS=
```

---

## Security Measures

* File upload validation
* Input validation for email
* Environment variables for secrets
* CORS enabled only for frontend access

---

## Project Flow

User uploads CSV → Backend parses data → AI generates summary → Email sent to recipient.

CI/CD can be extended using GitHub Actions to validate builds on pull requests.
