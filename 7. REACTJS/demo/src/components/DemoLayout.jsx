import React from "react";
import Button from "react-bootstrap/Button";
export default function DemoLayout() {
  return (
    <div>
      <header className="bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center p-2">
          <div className="logo h5">Start Bootstrap</div>
          <div className="header_menu list-inline d-flex justify-content-center align-items-center">
            <li className="ps-5">Home</li>
            <li className="ps-5">About</li>
            <li className="ps-5">Services</li>
            <li className="ps-5">Contact</li>
          </div>
        </div>
      </header>

      <div className="body">
        <div className="container">
          <div className="banner p-2 my-2 border border-primary">
            <h2>A Warm Welcome!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              assumenda laboriosam eveniet dignissimos consectetur sint
              voluptatem rem soluta, placeat quasi?
            </p>
            <Button as="a" variant="primary">
              Call to action!
            </Button>
          </div>
          <div className="items_group">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </div>
        </div>
      </div>
      <footer className="bg-dark p-3 text-white">
        Copyright Your Website 2019
      </footer>
    </div>
  );
}
