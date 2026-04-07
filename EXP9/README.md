# 🔐 JWT Authentication Demo (Spring Boot)

A **Spring Boot REST API project** demonstrating **JWT (JSON Web Token) based authentication and authorization**.

This project implements a secure login system where users authenticate with credentials and receive a **JWT token** used to access protected endpoints.

---

## 📌 Features

* ✅ User Login Authentication
* ✅ JWT Token Generation
* ✅ JWT Token Validation
* ✅ Protected REST APIs
* ✅ Layered Architecture (Controller → Service → Repository)
* ✅ Spring Security Integration
* ✅ Clean Package Structure

---

## 🛠 Tech Stack

| Technology      | Purpose                        |
| --------------- | ------------------------------ |
| Java            | Programming Language           |
| Spring Boot     | Backend Framework              |
| Spring Security | Authentication & Authorization |
| JWT             | Token-Based Security           |
| Maven           | Dependency Management          |
| MySQL           | Database                       |
| Postman         | API Testing                    |

---

## 📁 Project Structure

```
JWT-DEMO
│
└── src/main/java
    │
    └── com.AML_2AJWT_DEMO
        │
        ├── config
        │   └── Security configuration classes
        │
        ├── controller
        │   └── REST API endpoints
        │
        ├── model
        │   └── Entity classes
        │
        ├── repository
        │   └── Database interaction interfaces
        │
        ├── security
        │   └── JWT utility and filters
        │
        ├── service
        │   └── Business logic layer
        │
        └── Application main class
```

---

## ⚙️ How JWT Authentication Works

1️⃣ User sends login credentials to the server
2️⃣ Server validates username and password
3️⃣ If valid, server generates a JWT token
4️⃣ Client stores the token
5️⃣ For protected APIs, client sends token in header

```
Authorization: Bearer <JWT_TOKEN>
```

6️⃣ Server validates token before allowing access

---

📸 POST Request Screenshot

<img width="1817" height="909" alt="image" src="https://github.com/user-attachments/assets/cd3c6c22-22db-41d9-a3d7-7d2599ca4f7b" />


📸 GET Request Screenshot

<img width="1814" height="799" alt="image" src="https://github.com/user-attachments/assets/fac7c6fe-254b-46af-975d-5bac75be7c50" />


## 🔒 Security Flow

```
User → Login API
     → JWT Generated
     → Client Stores Token
     → Token sent in Authorization Header
     → JWT Filter validates Token
     → Access Granted / Denied
```

---

## 🚀 Running the Project

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/jwt-demo.git
```

### 2️⃣ Navigate to Project

```
cd jwt-demo
```

### 3️⃣ Run the Application

```
mvn spring-boot:run
```

### 4️⃣ Application Runs On

```
http://localhost:8080
```

---

## 🧪 Testing APIs

You can test APIs using:

* Postman
* Insomnia
* Browser (for GET endpoints)

---

## 📌 Example JWT Token Usage

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📸 Screenshots

*Add your POST request / authentication screenshots here*

---

## 📚 Learning Outcome

After completing this project, you will understand:

* JWT-based authentication
* Spring Security integration
* REST API protection
* Token-based stateless authentication
