import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <section className="contact" id="contact">

                <h1 className="heading"> <span>contact</span> us </h1>

                <div className="row">

                    <iframe 
                    className="map" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.507683211412!2d32.5812222775263!3d0.3257391190576027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb9d9eb77ae9%3A0x92cb04349b29240b!2sGolden%20Tulip%20Canaan%20Kampala!5e0!3m2!1sen!2sug!4v1740675269043!5m2!1sen!2sug" 
                    width="600" 
                    height="450" 
                    style={{border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                    <form action="">
                        <h3>get in touch</h3>
                        <div className="inputBox">
                            <span className="fas fa-user"></span>
                            <input type="text" placeholder="Name"/>
                        </div>

                        <div className="inputBox">
                            <span className="fas fa-envelope"></span>
                            <input type="email" placeholder="Email"/>
                        </div>

                        <div className="inputBox">
                            <span className="fas fa-phone"></span>
                            <input type="number" placeholder="Number"/>
                        </div>

                        <input type="submit" value="contact now" className="btn"/>
                    </form>
                   
                </div>

            

            </section>
  )
}

export default Contacts