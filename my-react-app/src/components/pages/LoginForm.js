import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './loginform.css';
import "bootstrap/dist/css/bootstrap.min.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    const userConfirmed = window.confirm("Do you want to go to Homepage?");
    if (userConfirmed) {
      navigate('/');
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, password };

    try {
      const response = await axios.post("http://localhost:5000/login", user);
      alert(response.data.message);
      navigate('/about');
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
      alert("Error logging in.");
    }
  };

  return (
    <div className="container1 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-hed">Login</div>
            <div className="card-bod">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Login
                </button>

                <button onClick={handleLoginRedirect}>Go to Home</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
