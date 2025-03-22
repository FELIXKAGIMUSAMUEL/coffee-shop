import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure this is added
import React, { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Review from './Components/Review/Review';
import SignUp from './Components/AuthSignUp/SignUp';
import SignIn from './Components/AuthSignIn/SignIn';

// Layout Component to include Navbar and Footer for all pages
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const openModal = () => setShowSignUpModal(true);
  const closeModal = () => setShowSignUpModal(false);

  return (
    <Router> {/* Wrapping the routes with Router */}
      <Routes>
        <Route path="/" element={<Layout><Home openModal={openModal} /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/review" element={<Layout><Review /></Layout>} />
        <Route path="/contacts" element={<Layout><Contacts /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        
        {/* Add SignUp and SignIn routes here */}
        <Route path="/signup" element={<SignUp closeModal={closeModal} />} />
        <Route path="/signin" element={<SignIn closeModal={closeModal} />} />
      </Routes>

       {/* Only show the modal when it is specifically triggered */}
       {showSignUpModal && (
        <div className="modal-overlay">
          <SignUp closeModal={closeModal} />
        </div>
      )}
      

      {/* Render SignUp modal conditionally */}
      {showSignUpModal && <SignUp closeModal={closeModal} />}
    </Router>
  );
};

export default App;
