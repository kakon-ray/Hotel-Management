import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://media.istockphoto.com/photos/businesswoman-standing-a-hotel-hallway-picture-id1191193130?b=1&k=20&m=1191193130&s=170667a&w=0&h=7IiGGIwhqqK1WAGHEt_tgE1cvGwNi005CY1SZxSfuAM="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://media.istockphoto.com/photos/digitally-rendered-view-of-a-beautiful-living-room-picture-id1284941025?b=1&k=20&m=1284941025&s=170667a&w=0&h=JfkOADW4trv6oQWATk6nuDQdBTEQig3c_u03pwM58PI="
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="https://media.istockphoto.com/photos/3d-render-of-wooden-style-lobby-and-reception-picture-id1326291893?b=1&k=20&m=1326291893&s=170667a&w=0&h=Gzz7CJZUCNS3LY6ObHUWi3JZpLQ2Qd-5Mw8UcBcptCU="
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
