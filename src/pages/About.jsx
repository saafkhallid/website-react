import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="images/fundamentals.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md p-5">
              <h2 className="text-warning ">Learn The Fundamentals</h2>
              <p className="text-dark">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p className="text-hide">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <Link href="#" className="btn btn-dark mt-3">
                <i className="bi bi-chevron-right text-warning"></i> Read More
              </Link>
            </div>
          </div>
        </div>
          </section>
          
      <section id="learn" class="p-5 bg-warning text-light">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md p-5">
              <h2 class="text-dark">Learn React</h2>
              <p class="text-dark">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p class="text-dark">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <a href="#" class="btn btn-light mt-3 bg-dark text-white">
                <i class="bi bi-chevron-right text-warning"></i> Read More
              </a>
            </div>
            <div class="col-md">
              <img src="images/react.svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
          </section>
          
      
    </div>
  );
};

export default About;
