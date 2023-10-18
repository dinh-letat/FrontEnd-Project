import React, { Component } from "react";

export default class VirtualGlasses extends Component {
  name = "Lê Tất Định";

  render() {
    return (
      <div className="container text-center">
        <h2>Hello {this.name}</h2>

        <div className="main">
            <p>TRY GLASSES APP ONLINE</p>
          <div className="glass_app d-flex justify-content-between align-items-center">
            <div className="glass_list bg-dark"></div>
            <div className="glass_model"></div>
          </div>
        </div>
      </div>
    );
  }
}
