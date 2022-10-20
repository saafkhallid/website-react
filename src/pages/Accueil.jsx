import React from "react";

const Accueil = () => {
  return (
    <div className="">
      <section class=" text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start ">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 class="text-dark">
                Become a <span class="text-warning"> Web Developer </span>
              </h1>
              <p class="lead my-4 text-dark">
                I'm looking to develop technical skills through training and
                practical projects with the aim of improving and be operational
                in line with web development!
              </p>
              <button
                class="btn btn-warning btn-lg text-white"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                {" "}
                start the Projet
              </button>
            </div>

            <img
              class="img-fluid w-50 d-none d-sm-block"
              src="images/showcase.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section class="bg-warning text-light p-5 ">
        <div class="container">
          <div class="d-md-flex justify-content-between align-items-center">
            <h3 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button class="btn btn-dark btn-lg" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="p-5 bg-light">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md">
              <div class="card  text-dark">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop text-warning"></i>
                  </div>
                  <h3 class="card-title mb-3">Virtual</h3>
                  <p class="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card  text-dark">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-laptop text-warning"></i>
                  </div>
                  <h3 class="card-title mb-3">Virtual</h3>
                  <p class="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md">
              <div class="card text-dark">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-person-square text-warning"></i>
                  </div>
                  <h3 class="card-title mb-3">Hybrid</h3>
                  <p class="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="card text-dark">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <i class="bi bi-people text-warning"></i>
                  </div>
                  <h3 class="card-title mb-3">In Person</h3>
                  <p class="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" class="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
