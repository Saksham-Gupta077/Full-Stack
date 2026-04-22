import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// ── Request Interceptor: Attach JWT Bearer token ──────────────────────────────
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ── Response Interceptor: Handle global errors ────────────────────────────────
API.interceptors.response.use(
    (response) => response,
    (error) => {
        // If 401 Unauthorized, clear auth and redirect to login
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default API;
