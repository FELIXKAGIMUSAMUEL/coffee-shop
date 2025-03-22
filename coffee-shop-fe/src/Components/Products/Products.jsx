import React from 'react'
import './Products.css'
import product1 from '../../Assets/product-1.webp'
import product2 from '../../Assets/product-2.jpg'
import product3 from '../../Assets/product-3.avif'

const Products = () => {
  return (
    <section className="products" id="products">

            <h1 className="heading" id="products"> our <span>products</span> </h1>

            <div className="box-container">

                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={product1} alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> $15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={product2} alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> $15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={product3} alt=""/>
                    </div>
                    <div className="content">
                        <h3>fresh coffee</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price"> $15.99 <span>$20.99</span></div>
                    </div>
                </div>

            </div>
           </section>
  )
}

export default Products