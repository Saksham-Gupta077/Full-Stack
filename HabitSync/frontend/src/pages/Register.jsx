import { useState } from 'react';
import API from '../services/api.js';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Register = () => {
    const [fields, setFields] = useState({ username: '', password: '', confirm: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setError('');
        setFields({ ...fields, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!fields.username.trim() || !fields.password.trim()) {
            setError('All fields are required.');
            return;
        }
        if (fields.username.length < 3) {
            setError('Username must be at least 3 characters.');
            return;
        }
        if (fields.password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (fields.password !== fields.confirm) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            await API.post('/auth/register', {
                username: fields.username,
                password: fields.password,
            });
            setSuccess('Account created successfully! Redirecting...');
            setTimeout(() => navigate('/login'), 1800);
        } catch (err) {
            const msg = err.response?.data?.message || 'Username already taken. Try another.';
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
                <div className="auth-brand">Get Started</div>
                <p className="auth-tagline">Initialize your HabitSync Pro workspace.</p>

                {error   && <div className="auth-error">⚠ {error}</div>}
                {success && <div className="auth-success">✓ {success}</div>}

                <form onSubmit={handleRegister} noValidate>
                    <label className="auth-label">Username</label>
                    <input
                        className="input-field-pro"
                        type="text"
                        name="username"
                        placeholder="choose_username"
                        value={fields.username}
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
                        placeholder="min. 6 characters"
                        value={fields.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                    />

                    <label className="auth-label">Confirm Password</label>
                    <input
                        className="input-field-pro"
                        type="password"
                        name="confirm"
                        placeholder="repeat password"
                        value={fields.confirm}
                        onChange={handleChange}
                        autoComplete="new-password"
                        required
                    />

                    <button type="submit" className="btn-indigo-pro" disabled={loading || !!success}>
                        {loading ? <><span className="spinner" /> Creating Account...</> : 'Create Account →'}
                    </button>
                </form>

                <p className="auth-footer-text">
                    Already have an account?{' '}
                    <span className="auth-footer-link" onClick={() => navigate('/login')}>
                        Sign In
                    </span>
                </p>

                <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', textAlign: 'center' }}>
                        Passwords are stored with BCrypt encryption
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
