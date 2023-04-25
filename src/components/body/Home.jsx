import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export class Home extends Component {
  render() {
    document.title = "PlatePal | Home";

    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Salmon Matsuri</h3>
            <p>Succulent salmon slices served with a savory vegetable soup.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Grilled Steak</h3>
            <p>
              Juicy and flavorful grilled steak served with charred asparagus
              and sweet cherry tomatoes for a delicious and healthy meal.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Spring Mix Salad</h3>
            <p>Spring Greens with ooasted pine nuts and soft-boiled egg.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
