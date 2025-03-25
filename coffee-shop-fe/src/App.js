// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import React, { useState } from 'react';
// import './App.css';
// import About from './Components/About/About';
// import Blogs from './Components/Blogs/Blogs';
// import Contacts from './Components/Contacts/Contacts';
// import Footer from './Components/Footer/Footer';
// import Home from './Components/Home/Home';
// import Menu from './Components/Menu/Menu';
// import Navbar from './Components/Navbar/Navbar';
// import Products from './Components/Products/Products';
// import Review from './Components/Review/Review';
// import SignUp from './Components/AuthSignUp/SignUp';
// import SignIn from './Components/AuthSignIn/SignIn';

// // Layout Component to include Navbar and Footer for all pages
// const Layout = ({ children }) => (
//   <>
//     <Navbar />
//     {children}
//     <Footer />
//   </>
// );

// const App = () => {
//   const [showSignUpModal, setShowSignUpModal] = useState(false);

//   const openModal = () => setShowSignUpModal(true);
//   const closeModal = () => setShowSignUpModal(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout><Home openModal={openModal} /></Layout>} />
//         <Route path="/about" element={<Layout><About /></Layout>} />
//         <Route path="/menu" element={<Layout><Menu /></Layout>} />
//         <Route path="/products" element={<Layout><Products /></Layout>} />
//         <Route path="/review" element={<Layout><Review /></Layout>} />
//         <Route path="/contacts" element={<Layout><Contacts /></Layout>} />
//         <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        
//         {/* SignUp and SignIn are treated as pages */}
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>

//       {/* Render SignUp as a modal only if triggered from Home */}
//       {showSignUpModal && (
//         <div className="modal-overlay">
//           <SignUp closeModal={closeModal} />
//         </div>
//       )}
//     </Router>
//   );
// };

// export default App;


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
