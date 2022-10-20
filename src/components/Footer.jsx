import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="p-5 bg-dark text-white text-center position-relative">
        <div className="container">
          <p className="lead text-uppercase">
            Copyright &copy; 2021 port<span className="text-warning ">folio</span>
          </p>

          <a href="#" className="position-absolute bottom-0 end-0 p-5 ">
            <i className="bi bi-arrow-up-circle h1 text-warning"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default footer;
