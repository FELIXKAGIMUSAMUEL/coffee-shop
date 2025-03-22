import React from "react";
import { Link } from "react-router-dom";
import "../AuthSignIn/SignIn.css";
import { FaEnvelope, FaLock } from "react-icons/fa";

const SignIn = ({ closeModal }) => {
  // Close the modal when clicking outside the content area
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <form>
          <h1>Robinah's Coffee Shop</h1>
          <h1>Sign In</h1>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <button type="submit">Sign In</button>

          <div className="forgot-password-link">
            <p>
              <a href="#">Forgot password?</a>
            </p>
          </div>

          <div className="register-link">
            <p>
              You don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
