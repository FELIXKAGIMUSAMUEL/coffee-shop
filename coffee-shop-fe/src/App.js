import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Products from './Components/Products/Products';
import Contacts from './Components/Contacts/Contacts';
import Review from './Components/Review/Review';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/AuthSignUp/SignUp';
import SignIn from './Components/AuthSignIn/SignIn';

const App = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar />
      <Home openSignUp={() => openModal('signup')} />
      <About/>
      <Menu/>
      <Products/>
      <Review/>
      <Contacts/>
      <Blogs/>
      <Footer />

      {activeModal === 'signup' && <SignUp switchToSignIn={() => openModal('signin')} closeModal={closeModal} />}
      {activeModal === 'signin' && <SignIn switchToSignUp={() => openModal('signup')} closeModal={closeModal} />}
    </>
  );
};

export default App;
