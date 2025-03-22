import React from 'react'
import './Review.css'
import quotemark from '../../Assets/quote-img.png'
import customer1 from '../../Assets/pic-1.jpeg'
import customer2 from '../../Assets/pic-2.jpeg'
import customer3 from '../../Assets/pic-3.jpeg'

const Review = () => {
  return (
    <section className="review" id="review">
            
            <h1 className="heading"> customer's <span>review</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={quotemark} className="quote" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amini nulla sit libero
                            nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium
                            consequuntur iste ex aliquam minus vel? Nemo.
                        </p>
                        <img src={customer1} className="user" alt=""/>
                        <h3>john deo</h3>
                        
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        
                    </div>

                    <div className="box">
                        <img src={quotemark} alt="" className="quote"/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amini nulla sit libero
                            nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium
                            consequuntur iste ex aliquam minus vel? Nemo.
                        </p>
                        <img src={customer2} className="user" alt="" />
                        <h3>john deo</h3>
                        
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        
                    </div>

                    <div className="box">
                        <img src={quotemark} alt="" className="quote"  />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amini nulla sit libero
                            nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium
                            consequuntur iste ex aliquam minus vel? Nemo.
                        </p>
                        <img src={customer3} className="user" alt="" />
                        <h3>john deo</h3>
                        
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        
                    </div>
                </div>
           </section>
  )
}

export default Review