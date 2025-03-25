
import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import "../AuthSignUp/SignUp.css";
import SignIn from "../AuthSignIn/SignIn"; // Import SignIn component

const SignUp = ({ closeModal }) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay") && closeModal) {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        {!showSignIn ? (
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
                Already have an account?{" "}
                <span onClick={() => setShowSignIn(true)} style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
              </p>
            </div>
          </form>
        ) : (
          <SignIn closeModal={closeModal} setShowSignIn={setShowSignIn} />
        )}
      </div>
    </div>
  );
};

export default SignUp;

