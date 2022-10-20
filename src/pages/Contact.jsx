import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="p-5 section-contact">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <h1 className="text-center font-weight-bold text-warning">
                Contact Us
              </h1>
              <form>
                <div className="mb-3 ">
                  <label for="exampleInputEmail1" className="form-label   ">
                    Nom & prénon
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom & prenon"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label ">
                    Télephone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Télephone"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows="3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning text-light px-4 py-2 "
                >
                  Envoyer
                </button>
              </form>
            </div>

            <div className="col-md p-2 ">
              <h2 className="text-center mb-4 font-weight-bold text-warning">
                Information
              </h2>
              <ul class="list-group list-group-flush lead">
                <li class="list-group-item">
                  <span className="fw-bold">Main Location:</span> Quartier Smara Rue
                  30 N° 50
                </li>
                <li class="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (+212) 6 90 45
                  62 12
                </li>
                <li class="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (+212) 6 90 45 62
                  12
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span>
                  khaliid.saaf@gmail.com
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>
                  khaliid.saaf@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
