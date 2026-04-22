# 🚀 HabitSync Pro - Professional Productivity Suite

**HabitSync Pro** is a high-performance, full-stack habit tracking application designed for modern professionals. It moves beyond simple checklists, offering a "command center" experience for managing daily routines, tracking real-time efficiency, and securing user data with enterprise-grade encryption.

---

## 📸 Interface Preview

### 1. Authentication Portal
*Secure access with a modern, centered split-UI and high-density branding.*

<p align="center">
  <img width="950" height="900" alt="Screenshot 2026-04-15 104412" src="https://github.com/user-attachments/assets/018381ce-ab29-488c-918a-1a18007045af" />
</p>

### 2. Main Workspace (Dashboard)
*A wide-screen, data-rich overview of your daily protocols and productivity metrics.*

<p align="center">
  <img width="1791" height="908" alt="Screenshot 2026-04-15 104506" src="https://github.com/user-attachments/assets/19b79945-cd5f-48fa-916f-5b8d32bac59e" />
</p>

### 3. Performance Analytics
*In-depth session tracking, efficiency scores, and completion rates.*

<p align="center">
  <img width="1722" height="915" alt="Screenshot 2026-04-15 104545" src="https://github.com/user-attachments/assets/ee17b75f-b895-4175-9ace-b5628c8dc61b" />

### 4. System Settings & Dark Mode
*Full customization with a native Dark Mode toggle and JWT session management details.*

<p align="center">
  <img width="1805" height="913" alt="Screenshot 2026-04-15 104602" src="https://github.com/user-attachments/assets/8c34973b-4d04-4c4c-823e-5d7902108bc1" />
</p>

---

## ✨ Key Features

* **Encrypted Identity:** Secure authentication using **JWT (JSON Web Tokens)** and **BCrypt** password hashing.
* **Dynamic Efficiency Engine:** Real-time calculation of "Efficiency Scores" and "Task Completion Rates."
* **Single UI Architecture:** A seamless SPA experience that switches internal views (Overview, Performance, Settings) without page reloads.
* **Interactive Confirmation:** Integrated "In-Card" confirmation for finalizing habits to prevent accidental data loss.
* **Adaptive Theme Engine:** Deeply integrated **Dark Mode** toggle using CSS variables and data attributes.
* **Session Persistence:** Real-time synchronization with a **MySQL** database via a Spring Boot REST API.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React (Vite), Axios, React Router, Modern CSS3 |
| **Backend** | Java Spring Boot, Spring Security, JWT |
| **Database** | MySQL |
| **Tooling** | Eclipse IDE, VS Code, MySQL Workbench, Maven |

---

## 🛡️ Security & API Communication

HabitSync Pro uses an **Axios Interceptor** to manage security headers automatically. 

1.  **JWT Handling:** Upon login, a token is issued and stored in `localStorage`.
2.  **Request Interception:** Every outgoing API call is intercepted to inject the `Authorization: Bearer <token>` header.
3.  **Encrypted Storage:** Passwords are never stored in plain text; they are hashed using the **BCrypt** algorithm before entering the database.

---
