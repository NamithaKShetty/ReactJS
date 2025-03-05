import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter all fields.");
    } else {
      setError("");
      alert("Login successful! (Authentication not implemented yet)");
    }
  };

  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider} (Implement authentication later)`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign In</h2>
        {error && <p className="alert alert-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
        </div>

        <hr />

        <p className="text-center">Or login with</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-light border w-100 me-2" onClick={() => handleSocialLogin("Google")}>
            <FaGoogle className="text-danger" /> Google
          </button>
          <button className="btn btn-light border w-100 me-2" onClick={() => handleSocialLogin("Facebook")}>
            <FaFacebook className="text-primary" /> Facebook
          </button>
          <button className="btn btn-light border w-100" onClick={() => handleSocialLogin("GitHub")}>
            <FaGithub className="text-dark" /> GitHub
          </button>
        </div>

        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
