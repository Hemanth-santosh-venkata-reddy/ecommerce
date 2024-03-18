import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hero_first from "../assets/hero-first.png";
import emojji from "../assets/hand-emojji.png";
import "./Hero.scss";
import Button from "react-bootstrap/Button";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <>
      <div className="pink-gradiant">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-start justify-content-center flex-column">
              <p>NEW ARRIVALS ONLY</p>
              <h1>
                new
                <span>
                  <img src={emojji} alt="emojji" width={40} height={40} />
                </span>
              </h1>
              <h1>collections</h1>
              <h1>for everyone</h1>
              <Button variant="primary" size="lg" className="mt-5 collection">
                Latest collection<span><HiOutlineArrowSmallRight /></span>
              </Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="w-100">
              <img src={hero_first} alt="herofirst" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;
