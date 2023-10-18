import React, { Component } from "react";

export default class BindingData extends Component {
  renderImg = () => {
    return (
      <img
        width={500}
        height={300}
        src="https://www.themanual.com/wp-content/uploads/sites/9/2022/08/2022-Shelby-GT500-H.jpg?p=1"
        alt=""
      />
    );
  };
  renderText = () => {
    return "Ford Mustang Shelby Gt500 H";
  };
  renderInfo = () => {
    const infoCar = {
      id: 1,
      name: "Ford Mustang Shelby GT500 H",
      price: "$70.000",
      color: "Black",
      horsepw: "780hp",
    };
    return (
      <div>
        <p>id: {infoCar.id}</p>
        <p>name: {infoCar.name}</p>
        <p>price: {infoCar.price}</p>
        <p>color: {infoCar.price}</p>
        <p>horse power: {infoCar.horsepw}</p>
      </div>
    );
  };
  reply = (content) => {
    alert(content);
  };
  render() {
    return (
      <div>
        <h3>BindingData</h3>

        {this.renderImg()}
        {this.renderText()}
        {this.renderInfo()}
        <button
          onClick={() => {
            this.reply("next!");
          }}
        >
          Thông tin của xe
        </button>
      </div>
    );
  }
}
