import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <section className="footer">

                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                            <a href="#" className="fab fa-pinterest"></a>
                        </div>

                        <div className="links">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#menu">Menu</a>
                            <a href="#products">Products</a>
                            <a href="#review">Review</a>
                            <a href="#contact">Contact</a>
                            <a href="#blogs">Blogs</a>
                        </div>


                        <div className="credit">
                            created by 
                                <a href="http://portfolio.local" target="_blank" rel="noopener norefferer"> 
                                    <span> KAGIMU FELIX SAMUEL </span> 
                                </a>
                             | all rights reserved
                        </div>

                    </section>
  )
}

export default Footer