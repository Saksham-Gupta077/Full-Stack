import { useEffect, useState, useCallback } from 'react';
import API from '../services/api.js';
import { useNavigate } from 'react-router-dom';
import '../App.css';

// ── Tiny helpers ──────────────────────────────────────────────────────────────
const getUsername = () => localStorage.getItem('username') || 'User';

const formatTime = (date) =>
    date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

const getInitials = (name) =>
    name.slice(0, 2).toUpperCase();

// ── Sub-Views ─────────────────────────────────────────────────────────────────

const AnalyticsView = ({ habits, sessionHistory }) => {
    const totalCompleted = sessionHistory.length;
    const efficiency = habits.length === 0 && totalCompleted === 0
        ? 0
        : Math.round((totalCompleted / (totalCompleted + habits.length)) * 100) || 0;

    const metrics = [
        { label: 'Active Objectives', val: habits.length },
        { label: 'Completed This Session', val: totalCompleted },
        { label: 'Efficiency Score', val: `${efficiency}%` },
        { label: 'Session Status', val: 'Active' },
    ];

    return (
        <div>
            <div className="workspace-topbar" style={{ marginBottom: '2rem' }}>
                <div className="workspace-title-block">
                    <div className="workspace-greeting">Analytics</div>
                    <div className="workspace-title">Performance</div>
                </div>
            </div>

            <div className="analytics-grid">
                {/* Progress Bars */}
                <div className="analytics-card">
                    <div className="analytics-card-title">Session Progress</div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar-label">
                            <span>Task Completion Rate</span>
                            <span>{efficiency}%</span>
                        </div>
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill" style={{ width: `${efficiency}%` }} />
                        </div>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar-label">
                            <span>Daily Efficiency</span>
                            <span>85%</span>
                        </div>
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill green" style={{ width: '85%' }} />
                        </div>
                    </div>
                    <div className="progress-bar-wrap">
                        <div className="progress-bar-label">
                            <span>Weekly Streak</span>
                            <span>72%</span>
                        </div>
                        <div className="progress-bar-track">
                            <div className="progress-bar-fill" style={{ width: '72%' }} />
                        </div>
                    </div>
                </div>

                {/* KPI Table */}
                <div className="analytics-card">
                    <div className="analytics-card-title">Key Metrics</div>
                    {metrics.map((m) => (
                        <div className="kpi-row" key={m.label}>
                            <span className="kpi-name">{m.label}</span>
                            <span className="kpi-val">{m.val}</span>
                        </div>
                    ))}
                </div>

                {/* Session History inside analytics */}
                <div className="analytics-card" style={{ gridColumn: '1 / -1' }}>
                    <div className="analytics-card-title">Completed This Session</div>
                    {sessionHistory.length === 0 ? (
                        <div className="empty-state" style={{ padding: '1.5rem 0' }}>
                            <div className="empty-state-sub">No tasks completed yet this session.</div>
                        </div>
                    ) : (
                        sessionHistory.map((h) => (
                            <div className="history-item" key={`${h.id}-${h.completedAt}`}>
                                <div className="history-check">✓</div>
                                <div>
                                    <div className="history-title">{h.title}</div>
                                    <div className="history-time">Completed at {h.completedAt}</div>
                                </div>
                                <div className="history-badge">Done</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

const SettingsView = ({ theme, onToggleTheme, username, onLogout }) => {
    const settings = [
        {
            label: 'Dark Mode',
            sub: 'Switch between light and dark interface',
            action: (
                <div className="toggle-switch" onClick={onToggleTheme}>
                    <div className={`toggle-track ${theme === 'dark' ? 'on' : ''}`} />
                    <div className={`toggle-thumb ${theme === 'dark' ? 'on' : ''}`} />
                </div>
            ),
        },
        {
            label: 'Desktop Notifications',
            sub: 'Receive reminders for scheduled objectives',
            action: (
                <div className="toggle-switch">
                    <div className="toggle-track" />
                    <div className="toggle-thumb" />
                </div>
            ),
        },
        {
            label: 'Auto-Sync Interval',
            sub: 'How often to refresh your task list',
            action: (
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                    Every 60s
                </span>
            ),
        },
    ];

    return (
        <div>
            <div className="workspace-topbar" style={{ marginBottom: '2rem' }}>
                <div className="workspace-title-block">
                    <div className="workspace-greeting">Configuration</div>
                    <div className="workspace-title">Settings</div>
                </div>
            </div>

            <div className="card-section">
                <div className="settings-section-title">Account</div>
                <div className="settings-row">
                    <div>
                        <div className="settings-row-label">Signed in as</div>
                        <div className="settings-row-sub">@{username}</div>
                    </div>
                    <span className="badge badge-indigo">Active</span>
                </div>
                <div className="settings-row">
                    <div>
                        <div className="settings-row-label">Session Token</div>
                        <div className="settings-row-sub">JWT — stored in localStorage</div>
                    </div>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--text-faint)' }}>
                        HS256 · Active
                    </span>
                </div>
            </div>

            <div className="card-section">
                <div className="settings-section-title">Preferences</div>
                {settings.map((s) => (
                    <div className="settings-row" key={s.label}>
                        <div>
                            <div className="settings-row-label">{s.label}</div>
                            <div className="settings-row-sub">{s.sub}</div>
                        </div>
                        {s.action}
                    </div>
                ))}
            </div>

            <div className="card-section">
                <div className="settings-section-title">Danger Zone</div>
                <div className="settings-row">
                    <div>
                        <div className="settings-row-label">Sign Out</div>
                        <div className="settings-row-sub">Clear your session and return to login</div>
                    </div>
                    <button className="btn-danger-outline" onClick={onLogout}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

// ── Habit Row with Inline Confirmation ────────────────────────────────────────
const HabitRow = ({ habit, onComplete }) => {
    const [confirmMode, setConfirmMode] = useState(false);
    const [completing, setCompleting] = useState(false);

    const handleConfirm = async () => {
        setCompleting(true);
        // Brief delay for animation to play
        setTimeout(() => onComplete(habit), 350);
    };

    return (
        <div className={`habit-row-pro ${confirmMode ? 'confirming' : ''} ${completing ? 'completing' : ''}`}>
            <div className="habit-info">
                <div className="habit-title">{habit.title}</div>
                <div className="habit-desc">{habit.description || 'Active objective'}</div>
            </div>

            <div className="habit-actions">
                {confirmMode ? (
                    <div className="inline-confirm-panel">
                        <span className="confirm-text">Mark as complete?</span>
                        <button className="btn-confirm-complete" onClick={handleConfirm}>
                            ✓ Confirm
                        </button>
                        <button className="btn-cancel" onClick={() => setConfirmMode(false)}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button className="btn-complete-trigger" onClick={() => setConfirmMode(true)}>
                        Complete
                    </button>
                )}
            </div>
        </div>
    );
};

// ── Overview View ─────────────────────────────────────────────────────────────
const OverviewView = ({ habits, sessionHistory, onAddHabit, onComplete, loading }) => {
    const [newHabit, setNewHabit] = useState({ title: '', description: '' });
    const [creating, setCreating] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newHabit.title.trim()) return;
        setCreating(true);
        await onAddHabit(newHabit);
        setNewHabit({ title: '', description: '' });
        setCreating(false);
    };

    const totalDone = sessionHistory.length;
    const efficiency = habits.length === 0 && totalDone === 0
        ? 0
        : Math.round((totalDone / (totalDone + habits.length)) * 100) || 0;

    return (
        <div>
            {/* Stats */}
            <div className="stat-group">
                <div className="stat-card-elevated">
                    <div className="stat-label">Pending Tasks</div>
                    <div className="stat-value">{loading ? '—' : habits.length}</div>
                    <div className="stat-trend">↑ Active</div>
                </div>
                <div className="stat-card-elevated">
                    <div className="stat-label">Completed Today</div>
                    <div className="stat-value green">{totalDone}</div>
                    {totalDone > 0 && <div className="stat-trend">✓ This session</div>}
                </div>
                <div className="stat-card-elevated">
                    <div className="stat-label">Efficiency</div>
                    <div className="stat-value indigo">{efficiency}%</div>
                    <div className="stat-trend">↑ On track</div>
                </div>
            </div>

            {/* Add Habit Form */}
            <div className="card-section">
                <div className="card-section-header">
                    <div className="card-section-title">New Objective</div>
                </div>
                <form onSubmit={handleSubmit} className="add-habit-form">
                    <input
                        className="input-field-dashboard"
                        placeholder="Define a new objective..."
                        value={newHabit.title}
                        onChange={e => setNewHabit({ ...newHabit, title: e.target.value })}
                        required
                    />
                    <input
                        className="input-field-dashboard"
                        style={{ maxWidth: '220px' }}
                        placeholder="Description (optional)"
                        value={newHabit.description}
                        onChange={e => setNewHabit({ ...newHabit, description: e.target.value })}
                    />
                    <button type="submit" className="btn-create" disabled={creating}>
                        {creating ? <span className="spinner" style={{ borderTopColor: 'white', width: 16, height: 16 }} /> : '+ Add'}
                    </button>
                </form>
            </div>

            {/* Active Objectives */}
            <div className="card-section">
                <div className="card-section-header">
                    <div className="card-section-title">Active Objectives</div>
                    <div className="card-section-meta">{habits.length} task{habits.length !== 1 ? 's' : ''}</div>
                </div>

                {loading ? (
                    <div className="empty-state">
                        <div className="spinner" style={{ borderTopColor: 'var(--primary)', borderColor: 'var(--border)', width: 28, height: 28, margin: '0 auto 1rem' }} />
                        <div className="empty-state-sub">Fetching objectives...</div>
                    </div>
                ) : habits.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-state-icon">🎯</div>
                        <div className="empty-state-title">All Clear</div>
                        <div className="empty-state-sub">No pending objectives. Add one above to get started.</div>
                    </div>
                ) : (
                    habits.map((h) => (
                        <HabitRow key={h.id} habit={h} onComplete={onComplete} />
                    ))
                )}
            </div>

            {/* Session History */}
            {sessionHistory.length > 0 && (
                <div className="card-section">
                    <div className="card-section-header">
                        <div className="card-section-title">Session History</div>
                        <div className="card-section-meta">{sessionHistory.length} completed</div>
                    </div>
                    {sessionHistory.map((h) => (
                        <div className="history-item" key={`${h.id}-${h.completedAt}`}>
                            <div className="history-check">✓</div>
                            <div>
                                <div className="history-title">{h.title}</div>
                                <div className="history-time">Completed at {h.completedAt}</div>
                            </div>
                            <div className="history-badge">Done</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

// ── Main Dashboard ────────────────────────────────────────────────────────────
const Dashboard = () => {
    const [habits, setHabits] = useState([]);
    const [sessionHistory, setSessionHistory] = useState([]);
    const [view, setView] = useState('overview');
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const username = getUsername();

    // Apply theme on mount + change
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const fetchHabits = useCallback(async () => {
        try {
            const res = await API.get('/habits');
            setHabits(res.data);
        } catch (err) {
            // api.js interceptor handles 401
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchHabits(); }, [fetchHabits]);

    const handleToggleTheme = () =>
        setTheme(prev => prev === 'light' ? 'dark' : 'light');

    const handleAddHabit = async (newHabit) => {
        try {
            await API.post('/habits', newHabit);
            await fetchHabits();
        } catch (err) {
            console.error('Failed to create habit:', err);
        }
    };

    const handleComplete = async (habit) => {
        try {
            await API.delete(`/habits/${habit.id}`);
            setHabits(prev => prev.filter(h => h.id !== habit.id));
            setSessionHistory(prev => [
                { ...habit, completedAt: formatTime(new Date()) },
                ...prev,
            ]);
        } catch (err) {
            console.error('Failed to complete habit:', err);
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    // ── Nav Items ────────────────────────────────────────────────────────────
    const navItems = [
        { id: 'overview',   label: 'Overview',    icon: '◻' },
        { id: 'analytics',  label: 'Performance', icon: '◈' },
        { id: 'settings',   label: 'Settings',    icon: '◎' },
    ];

    return (
        <div className="app-shell">
            {/* ── Sidebar ─────────────────────────────────────────────────── */}
            <aside className="sidebar-brand">
                <div className="sidebar-logo-area">
                    <span className="sidebar-logo-text">HabitSync</span>
                    <span className="sidebar-logo-badge">Pro</span>
                </div>

                <div className="sidebar-section-label">Navigation</div>

                <nav>
                    {navItems.map(item => (
                        <div
                            key={item.id}
                            className={`nav-pill ${view === item.id ? 'active' : ''}`}
                            onClick={() => setView(item.id)}
                        >
                            <span className="nav-pill-icon">{item.icon}</span>
                            {item.label}
                        </div>
                    ))}
                </nav>

                {/* Bottom section */}
                <div className="sidebar-bottom">
                    <div className="sidebar-user-area" onClick={() => setView('settings')}>
                        <div className="sidebar-avatar">{getInitials(username)}</div>
                        <div>
                            <div className="sidebar-user-name">{username}</div>
                            <div className="sidebar-user-role">Pro Member</div>
                        </div>
                    </div>

                    <div
                        className="nav-pill"
                        style={{ color: 'var(--text-muted)' }}
                        onClick={handleToggleTheme}
                    >
                        <span className="nav-pill-icon">{theme === 'light' ? '◑' : '○'}</span>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </div>

                    <div
                        className="nav-pill"
                        style={{ color: '#ef4444' }}
                        onClick={handleLogout}
                    >
                        <span className="nav-pill-icon">⇥</span>
                        Sign Out
                    </div>
                </div>
            </aside>

            {/* ── Main Workspace ───────────────────────────────────────────── */}
            <main className="main-workspace">
                <div className="workspace-inner">
                    {/* Top header only shown on overview */}
                    {view === 'overview' && (
                        <div className="workspace-topbar">
                            <div className="workspace-title-block">
                                <div className="workspace-greeting">Welcome back, {username}</div>
                                <div className="workspace-title">Daily Productivity</div>
                            </div>
                            <div className="topbar-actions">
                                <button className="topbar-btn" onClick={fetchHabits}>
                                    ↻ Refresh
                                </button>
                                <button className="topbar-btn" onClick={() => setView('analytics')}>
                                    ◈ Analytics
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ── View Router ─────────────────────────────────────── */}
                    {view === 'overview' && (
                        <OverviewView
                            habits={habits}
                            sessionHistory={sessionHistory}
                            onAddHabit={handleAddHabit}
                            onComplete={handleComplete}
                            loading={loading}
                        />
                    )}

                    {view === 'analytics' && (
                        <AnalyticsView
                            habits={habits}
                            sessionHistory={sessionHistory}
                        />
                    )}

                    {view === 'settings' && (
                        <SettingsView
                            theme={theme}
                            onToggleTheme={handleToggleTheme}
                            username={username}
                            onLogout={handleLogout}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
