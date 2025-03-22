import React, { useState } from 'react';
import './Home.css';
import SignUp from '../AuthSignUp/SignUp.jsx';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Fresh coffee in the morning</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore,
          sint cupiditate distinctio tempoora reiciendis.
        </p>
        {/* Open Modal on Click */}
        <button className="btn" onClick={() => setShowModal(true)}>Sign Up</button>
        <a href="#" className="btn">Get Yours Now</a>
      </div>

      {/* Render the Modal if showModal is true */}
      {showModal && <SignUp closeModal={() => setShowModal(false)} />}
    </section>
  );
};

export default Home;
