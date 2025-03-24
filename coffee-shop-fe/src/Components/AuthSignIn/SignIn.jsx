import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../AuthSignIn/SignIn.css";

const SignIn = ({ closeModal, setShowSignIn }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay") && closeModal) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <form>
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
            <p><a href="#">Forgot Password?</a></p>
          </div>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <span onClick={() => setShowSignIn(false)} style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
