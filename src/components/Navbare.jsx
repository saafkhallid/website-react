import React from "react";
import { Link } from "react-router-dom";
const Navbare = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light  navbar-light py-2 fixed-top border-bottom border-warning">
        <div class="container ">
          <Link to="/" class="navbar-brand  text-dark text-uppercase fw-bold">
            Port<span class="text-warning">folio</span>
          </Link>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item ">
                <Link to="/" class="nav-link">
                  Accuill
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/service" class="nav-link">
                  Service
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/contact" class="nav-link">
                  Contact
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbare;
