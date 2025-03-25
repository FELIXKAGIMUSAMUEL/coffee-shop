import React from 'react'
import './Navbar.css'
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import cartItem0 from "../../Assets/logo.jpg"
import cartItem1 from "../../Assets/cart-item-1.jpg";
import cartItem2 from "../../Assets/cart-item-2.jpeg";
import cartItem3 from "../../Assets/cart-item-3.jpeg";
import cartItem4 from "../../Assets/cart-item-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    // Toggle search bar visibility
    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
        setShowCart(false); // Hide cart when search is activated
    };

    // Toggle cart visibility
    const [showCart, setShowCart] = useState(false);
    const toggleCart = () => {
        setShowCart(!showCart);
        setShowSearch(false); // Hide search bar when cart is activated
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
//-------------------------------------------------------------------------------------------------
//  Hide search and cart on click outside
const hideOnClickOutside = (e) => {
    if (
      !e.target.closest('.search-form') &&
      !e.target.closest('.cart-items-container') &&
      !e.target.closest('.search-icon') &&
      !e.target.closest('.cart-icon')
    ) {
      setShowSearch(false);
      setShowCart(false);
    }
  };
  
  // Hide search and cart on scroll
  const hideOnScroll = () => {
    setShowSearch(false);
    setShowCart(false);
  };
  
  // Event listeners for click and scroll
  // useEffect(() => {
  //   // Add click event listener to hide search and cart when clicking outside
  //   const handleClick = (e) => {
  //     if (
  //       !e.target.closest('.search-form') &&
  //       !e.target.closest('.cart-items-container') &&
  //       !e.target.closest('.search-icon') &&
  //       !e.target.closest('.cart-icon')
  //     ) {
  //       setShowSearch(false);
  //       setShowCart(false);
  //     }
  //   };
  
  //   // Add scroll event listener to hide search and cart when scrolling
  //   const handleScroll = () => {
  //     setShowSearch(false);
  //     setShowCart(false);
  //   };
  
  //   document.addEventListener('click', handleClick);
  //   document.addEventListener('scroll', handleScroll);
  
  //   return () => {
  //     document.removeEventListener('click', handleClick);
  //     document.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
    
//--------------------------------------------------------------------------------------------

  return (
    <header className="header">

    <a href="#" className="logo">
        <img src={cartItem0} alt=""/>
    </a>

    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#menu">Menu</a>
      <a href="#products">Products</a>
      <a href="#review">Reviews</a>
      <a href="#contacts">Contact</a>
      <a href="#blogs">Blogs</a>
    </nav>


    <div className="icons">
      <FontAwesomeIcon icon={faSearch} 
      className="icon" 
      onClick={toggleSearch} 
      id="search-btn" />

      <FontAwesomeIcon icon={faShoppingCart} 
      className="icon" 
      onClick={toggleCart} 
      id="cart-btn" />

      {window.innerWidth <= 768 && (
      <FontAwesomeIcon icon={faBars} 
      className="icon" 
      onClick={toggleMenu}
      id="menu-btn" />
      )}
      
    </div>

    <div className={`search-form ${showSearch ? 'active' : ''}`}>
        <input type="search" id="search-box" placeholder="Search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

    <div className={`cart-items-container ${showCart ? 'active' : ''}`}>
    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={cartItem1} alt=""/>
        <div className="content">
            <h3>Cart Item 01</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>

    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={cartItem2} alt=""/>
        <div className="content">
            <h3>Cart Item 02</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>

    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={cartItem3} alt=""/>
        <div className="content">
            <h3>Cart Item 03</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>

    <div className="cart-item">
        <span className="fas fa-times"></span>
        <img src={cartItem4} alt=""/>
        <div className="content">
            <h3>Cart Item 04</h3>
            <div className="price">$15.99/-</div>
        </div>
    </div>
        <a href="#" className="cart-btn">Check out</a>

    </div>

</header>

  )
}

export default Navbar