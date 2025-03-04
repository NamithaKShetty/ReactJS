<<<<<<< Updated upstream
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h1>🏠 Home Page</h1>;
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
import React, { useState } from 'react';
 
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
 
  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill out both fields.');
      return;
    }
 
    // Simulate login logic
    if (email === 'user@example.com' && password === 'password') {
      setErrorMessage('');
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid credentials.');
    }
  };
 
  return (
<div>
<h2>Login</h2>
<input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
<input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
<button onClick={handleLogin}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
</div>
  );
};
 
export default LoginForm;
>>>>>>> Stashed changes
