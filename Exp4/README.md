
---

# Unit-4: Implement State Management using Redux / Context API

This project demonstrates two different approaches to managing global state in a React application: the built-in **Context API** and the **Redux Toolkit** library.

## 🚀 Overview

The purpose of this unit is to solve the problem of "Prop Drilling" by implementing centralized state containers.
1.  **Experiment-1**: Uses React's native Context API for lightweight global state.
2.  **Experiment-2**: Uses Redux Toolkit for robust, predictable, and scalable state management.

---

## 🛠️ Software Requirements

*   **Node.js**: JavaScript runtime environment.
*   **React**: Modern UI library.
*   **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development.
*   **React-Redux**: Official Redux bindings for React.
*   **Code Editor**: VS Code.
*   **Web Browser**: For testing and debugging.

---

## 🧪 Experiments Implementation

### Experiment-1: Global State Management Using React Context API

**Aim:** To implement global state management in a Single Page Application using the React Context API.

**Theory:** 
In React applications, passing data through multiple components using props can become complex (known as **prop drilling**). The Context API provides a way to share global data—such as themes, user information, or application settings—across components without passing props manually at every level.

**Procedure:**
1.  **Create a React application**: Set up the environment.
2.  **Create a Context**: Use `createContext()` to initialize the state container.
3.  **Wrap with Provider**: Use the `.Provider` component at a high level in the component tree.
4.  **Store/Update State**: Define the data and functions inside the Provider.
5.  **Consume State**: Use the `useContext()` hook in child components to access the data.

### Output
<img width="916" height="673" alt="image" src="https://github.com/user-attachments/assets/71844541-55b0-4fbf-b986-c8114d2965a3" />

---

### Experiment-2: State Management Using Redux (Counter Application)

**Aim:** To implement centralized state management using Redux in a React application.

**Theory:**
Redux is a predictable state container for JavaScript applications. It stores the application state in a single global **Store** and updates it using **Actions** and **Reducers**. **Redux Toolkit (RTK)** is the modern way to write Redux, simplifying the implementation by reducing boilerplate code.

**Key Steps Taken:**
1.  **Configure Store**: Created a central store using `configureStore`.
2.  **Create a Slice**: Defined the initial state and reducers (logic) for the counter using `createSlice`.
3.  **Provide Store**: Wrapped the main application with the `<Provider>` from `react-redux`.
4.  **Dispatch & Select**: Used `useSelector` to read the state and `useDispatch` to trigger actions (increment/decrement).

### Output
<img width="1058" height="656" alt="image" src="https://github.com/user-attachments/assets/4d05a0db-06a7-45ca-b12b-6a50ea206fe3" />

---

## 📁 Project Structure

```text
src/
├── context/
│   └── ThemeContext.jsx    # Context API logic (Exp 1)
├── redux/
│   ├── store.js            # Redux Store configuration (Exp 2)
│   └── counterSlice.js     # Counter logic and actions
├── components/
│   ├── UserProfile.jsx     # Consumes Context
│   └── Counter.jsx         # Consumes Redux State
├── App.jsx
└── main.jsx                # Wraps App with Providers
```

---

## 💻 How to Run

1.  **Install dependencies:**
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 📝 Code Comparison

### Context API (Exp 1)
```javascript
const UserContext = createContext();
// Usage
const user = useContext(UserContext);
```

### Redux Toolkit (Exp 2)
```javascript
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
// Usage
<button onClick={() => dispatch(increment())}>Add</button>
```

---

## 🏁 Conclusion

By completing these experiments, we have mastered how to manage state globally. **Context API** is ideal for simple data like themes or auth states, while **Redux** is preferred for complex logic and large-scale applications with frequent state updates.
