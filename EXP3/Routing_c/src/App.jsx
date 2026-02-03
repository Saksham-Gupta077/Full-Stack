import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'


function Home() {
  return <>
    <h1>Saksham Gupta</h1>
    <img src="img.png" width="320px" height="400px" alt="" />
    <h2><Link to="/profile"><button>Profile</button></Link></h2>
  </>

}

function Profile() {
  return <>
  <div>
    <marquee loop="5">
      <h1>Welcome to my profile</h1>
    </marquee>
  <h1>Saksham Gupta</h1>
  <h2>Full Stack project</h2>
  <h3><Link to="/dashboard"><button>Dashboard</button></Link></h3>
  </div>
  </>
}

function DashBoard() {
  return <><h1>Skills:</h1><h2>HTML</h2>
  <h2>CSS</h2><h2>React</h2>
  <h2>Javascript</h2><Link to="/profile"><button>Back to profile</button></Link></>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;