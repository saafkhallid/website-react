import React from 'react'

const Service = () => {
  return (
    <div>
      <section id="questions" class="p-5">
        <div class="container">
          <h2 class="text-center mb-4 text-dark ">
            Frequently Asked Questions
          </h2>
          <div class="accordion accordion-flush" id="questions">
            <div class="accordion-item">
              <h2 class=" accordion-header ">
                <button
                  class="accordion-button collapsed text-dark bg-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Where exactly are you located?
                </button>
              </h2>
              <div
                id="question-one"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  How much does it cost to attend?
                </button>
              </h2>
              <div
                id="question-two"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed bg-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  What do I need to Know?
                </button>
              </h2>
              <div
                id="question-three"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  How Do I sign up?
                </button>
              </h2>
              <div
                id="question-four"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class=" accordion-button  bg-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  Do you help me find a job?
                </button>
              </h2>
              <div
                id="question-five"
                class="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam beatae fuga animi distinctio perspiciatis adipisci
                  velit maiores totam tempora accusamus modi explicabo
                  accusantium consequatur, praesentium rem quisquam molestias at
                  quos vero. Officiis ad velit doloremque at. Dignissimos
                  praesentium necessitatibus natus corrupti cum consequatur
                  aliquam! Minima molestias iure quam distinctio velit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="instructors" className="p-5 bg-warning">
        <div className="container">
          <h2 className="text-center text-dark">Our Instructors</h2>
          <p className="lead text-center text-dark fw-bold mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Jane Doe</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Steve Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Sara Smith</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                  <a href="#">
                    <i className="bi bi-twitter text-dark mx-3"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-facebook text-dark mx-3"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin text-dark mx-3"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram text-dark mx-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service
