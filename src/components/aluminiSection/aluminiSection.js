import React from "react";
import "./alumini.css";
import OwlCarousel from "react-owl-carousel";
import { Card } from "react-bootstrap";
import ImageOne from "../../assets/images/1.webp";
import ImageTwo from "../../assets/images/2.jpg";
import ImageThree from "../../assets/images/3.webp";
import ImageFour from "../../assets/images/4.webp";
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const AluminiSection = (props) => {
 
  const { fullpageApi } = props;
  return (
    <div className="section">
     

      <h1>Testimonials</h1>
      <div>
        <OwlCarousel className="owl-theme testimonial" loop={true} center={true} autoplay={true} margin={10} nav={false}
        responsive={{
            // breakpoint from 0 up
            0 : {
              // stagePadding: 0,
              loop: true,
              center: true,
              autoplay: true,
              // responsiveClass: true,
              // dots: false,
              nav: true,
              // autoHeight: true,
              items: 1
            },
            // breakpoint from 768 up
            768 : {
              items: 3
            }
          }}
        >
          <div class="item">
            <Card class="cards"
             
            ><div className="imgholder">
              <img className="photo" src={ImageOne}></img></div>
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
              
            >
              <div className="imgholder">
              <img
                className="photo"
                src={ImageTwo}
              ></img>
              </div>
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
             
            >
             <div className="imgholder">
              <img
                className="photo"
                src={ImageThree}
              ></img>
              </div>
              
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
          
            > 
            <div className="imgholder">
              <img
                className="photo"
                src={ImageFour}
              ></img> 
              </div>
              <Card.Body>
                <Card.Title className="head"><h5>Card Title</h5></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </OwlCarousel>
      </div>
      <button
        class="bt1 testBtn d-md-block d-none endButtonContainer"
        onClick={() => fullpageApi.moveSectionDown()}
      >
       <div className="endButton"></div>
      </button>
    </div>
  );
};

export default AluminiSection;
