import React from 'react'
import './Menu.css'
import menu1 from '../../Assets/menu-1.webp'
import menu2 from '../../Assets/menu-2.jpg'
import menu3 from '../../Assets/menu-3.png'
import menu4 from '../../Assets/menu-4.avif'
import menu5 from '../../Assets/menu-5.jpg'
import menu6 from '../../Assets/menu-6.jpg'

const Menu = () => {
  return (
    <section className="menu" id="menu">
            
            <h1 className="heading"> our <span>menu</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={menu1} alt=""/>
                    <h3>tasty and healthy</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>

                <div className="box">
                    <img src={menu2} alt=""/>
                    <h3>tasty and healthy</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>

                <div className="box">
                    <img src={menu3} alt=""/>
                    <h3>tasty and healthy</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>

                <div className="box">
                   <img src={menu4} alt=""/>
                    <h3>tasty and healthy</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>

                <div className="box">
                    <img src={menu5} alt=""/>
                    <h3>tasty and healthy</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>

                <div className="box">
                    <img src={menu6} alt=""/>
                    <h3>tasty and healthy</h3>
                    <div className="price">$15.99 <span>20.99</span></div>
                    <a href="#" className="btn">add to cart</a>
                </div>
            </div>
           </section>
  )
}

export default Menu