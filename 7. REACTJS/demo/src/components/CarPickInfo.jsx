import React, { Component } from "react";

export default class CarPickInfo extends Component {
  render() {
    return (
      <div className="container">
        <h2>Choose Car Infomation</h2>
        <div className="main">
          <div className="img"></div>
          <div className="pick_color"></div>
        </div>
        <div className="list_car">
            <h3></h3>
            <table className="table" border={1}>
                <tr>
                    <th scope="col">1</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2</td>
                </tr>
                <tr>
                    <th>1</th>
                    <td>2</td>
                </tr>
            </table>
        </div>
      </div>
    );
  }
}
