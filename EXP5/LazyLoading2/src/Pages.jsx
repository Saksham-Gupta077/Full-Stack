import React from "react";

export function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <p>Welcome to the Home page.</p>
    </div>
  );
}

export function About() {
  return (
    <div className="page">
      <h2>About Page</h2>
      <p>This page is loaded lazily for better performance.</p>
    </div>
  );
}

export function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <p>This page is also loaded lazily.</p>
    </div>
  );
}