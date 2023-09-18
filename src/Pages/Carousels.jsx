import React from 'react'
import { Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../images_assets/background.jpg";

 const Carousels = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={background} style={{ width: "100vw", height: "500px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={background}
            style={{ width: "100vw", height: "500px" }}
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carousels;