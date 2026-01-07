import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        <span className="toggle-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
      </button>
      <h1>Theme Toggle SPA</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Click the toggle button to switch between light and dark themes
      </p>
    </>
  )
}

export default App
