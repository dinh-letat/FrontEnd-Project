import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
export default class ArrayCarData extends Component {
  ArrayCar = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/77/c4/03/77c40399de0f9ab702d80ea95eb8ddeb.jpg",
      name: "Ford Mustang Shelby GT500H",
      color: "White",
      quantity: "3",
      price: "$80.000",
      horse_power: "900 hp",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/15/3e/69/153e69b51686edbb2070c62b34ddb80c.jpg",
      name: "Audi R8 V10",
      color: "White",
      quantity: "5",
      price: "$253.290",
      horse_power: "602 hp",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/f6/cd/da/f6cdda0a89082fcbe41e430de0d20a34.jpg",
      name: "Mercedes AMG S65",
      color: "Dark",
      quantity: "2",
      price: "$265.745",
      horse_power: "621 hp",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/2b/f3/a2/2bf3a286c6ff10caaecf27493522e8e1.jpg",
      name: "BMW M5 Competition",
      color: "Dark Blue",
      quantity: "5",
      price: "$100.000",
      horse_power: "1200 hp",
    },
  ];
  renderArrayCar = () => {
    let contentTable = [];
    for (let index = 0; index < this.ArrayCar.length; index++) {
      let car = this.ArrayCar[index];
      let trTable = (
          <tr key={index}>
            <td>{car.id}</td>
            <td><img src={car.img} alt={car.name} width={50} height={50} /></td>
            <td>{car.name}</td>
            <td>{car.color}</td>
            <td>{car.quantity}</td>
            <td>{car.price}</td>
            <td>{car.horse_power}</td>
          </tr>
      );
      contentTable.push(trTable);
    }
    return contentTable;
  };

  addCar = () => {
    <input type="text" />
   
  }
  render() {
    return (
      <div className="container">
        <h2>Array Car</h2>
        <Button onClick={this.addCar}>Add Car</Button>
        <table className="table" border={1}>
          <thead>
            <tr border={1}>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Horse Power</th>
            </tr>
          </thead>
          <tbody>
            {this.renderArrayCar()}
          </tbody>
        </table>
      </div>
    );
  }
}
