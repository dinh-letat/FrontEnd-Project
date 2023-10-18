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
          <div className="banner p-4 my-3 border border-primary">
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
          <div className="items_group d-flex align-items-center text-center d-block py-3">
            <div className="items border text-center mx-2 ">
              <div className="img">
                <img className="bg-dark" src="" alt="" />
              </div>
              <div className="items_content d-inline-block">
                <h3>Card title</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quam corporis sit, alias excepturi maiores!
                </span>
              </div>
              <div className="items_button p-3 border border-bottom-0">
                <Button>Find Out More!</Button>
              </div>
            </div>
            <div className="items border text-center mx-2 ">
              <div className="img">
                <img className="bg-dark" src="" alt="" />
              </div>
              <div className="items_content">
                <h3>Card title</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quam corporis sit, alias excepturi maiores!
                </span>
              </div>
              <div className="items_button p-3 border border-bottom-0">
                <Button>Find Out More!</Button>
              </div>
            </div>
            <div className="items border text-center mx-2 ">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="items_content">
                <h3>Card title</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quam corporis sit, alias excepturi maiores!
                </span>
              </div>
              <div className="items_button p-3 border border-bottom-0">
                <Button>Find Out More!</Button>
              </div>
            </div>
            <div className="items border text-center mx-2 ">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="items_content">
                <h3>Card title</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique quam corporis sit, alias excepturi maiores!
                </span>
              </div>
              <div className="items_button p-3">
                <Button>Find Out More!</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark p-3 text-white text-center">
        Copyright Your Website 2019
      </footer>
    </div>
  );
}
