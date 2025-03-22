import React from 'react';
import './Blogs.css';
import blog1 from '../../Assets/blog-1.jpeg';
import blog2 from '../../Assets/blog-2.jpg';
import blog3 from '../../Assets/blog-3.avif';

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading"> our <span>blogs</span> </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={blog1} alt="Blog 1"/>
          </div>
          <div className="content">
            <a href="#" className="title">Tasty and Refreshing Coffee</a>
            <span>by admin / 21st Jan 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={blog2} alt="Blog 2"/>
          </div>
          <div className="content">
            <a href="#" className="title">Tasty and Refreshing Coffee</a>
            <span>by admin / 21st Jan 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={blog3} alt="Blog 3"/>
          </div>
          <div className="content">
            <a href="#" className="title">Tasty and Refreshing Coffee</a>
            <span>by admin / 21st Jan 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
            <a href="#" className="btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
