import { useState } from 'react';
import API from '../services/api.js';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setError('');
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!credentials.username.trim() || !credentials.password.trim()) {
            setError('Please fill in both fields.');
            return;
        }
        setLoading(true);
        try {
            const res = await API.post('/auth/login', credentials);
            localStorage.setItem('token', res.data.token);
            // Store username for display in dashboard
            localStorage.setItem('username', credentials.username);
            navigate('/dashboard');
        } catch (err) {
            const msg = err.response?.data?.message || 'Invalid username or password.';
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="full-page-auth">
            <div className="auth-bg-mesh" />
            <div className="auth-grid-pattern" />

            <div className="auth-card-wide">
                {/* Brand */}
                <div style={{ marginBottom: '0.4rem' }}>
                    <div className="auth-brand">HabitSync Pro</div>
                </div>
                <p className="auth-tagline">Welcome back. Access your daily workspace.</p>

                {/* Error Banner */}
                {error && <div className="auth-error">⚠ {error}</div>}

                {/* Form */}
                <form onSubmit={handleLogin} noValidate>
                    <label className="auth-label">Username</label>
                    <input
                        className="input-field-pro"
                        type="text"
                        name="username"
                        placeholder="your_username"
                        value={credentials.username}
                        onChange={handleChange}
                        autoComplete="username"
                        autoFocus
                        required
                    />

                    <label className="auth-label">Password</label>
                    <input
                        className="input-field-pro"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={credentials.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />

                    <button type="submit" className="btn-indigo-pro" disabled={loading}>
                        {loading ? <><span className="spinner" /> Authenticating...</> : 'Sign In →'}
                    </button>
                </form>

                <p className="auth-footer-text">
                    Don't have an account?{' '}
                    <span className="auth-footer-link" onClick={() => navigate('/register')}>
                        Create Account
                    </span>
                </p>

                {/* Divider */}
                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', textAlign: 'center' }}>
                        Secured with JWT · Data encrypted at rest
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
