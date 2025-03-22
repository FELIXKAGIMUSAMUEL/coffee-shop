import React from "react";
import { Link } from 'react-router-dom';
import "../AuthSignUp/SignUp.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const SignUp = ({ closeModal }) => {
  // Close modal when clicking outside the box
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay") && closeModal) {
      closeModal();  // Only call closeModal if it's available
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <form>
        <h1>Robinah's Coffee Shop.</h1>
          <h1>Sign Up</h1>
          
          <div className="input-box name-fields">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Create Password" required />
            <FaLock className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Re-type Password" required />
            <FaLock className="icon" />
          </div>

          <button type="submit">Sign Up</button>

          <div className="register-link">
          <p>
             Already have an account? <Link to="/signin">Sign In</Link>
        </p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
