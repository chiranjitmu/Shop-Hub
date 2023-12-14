import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { BsFillBagCheckFill, BsArrowsFullscreen } from "react-icons/bs";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "../components/Shop.css";
import { addcart } from "../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import products from "./product.json";

function Shop() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxDataRef = useRef({
    productPrice: "",
    productTitle: "",
    productImage: "",
    productCount: "",
  });

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(products.length - 1);
    }
  };

  const handleNext = () => {
    if (index < products.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const truncated = (str, length) => {
    if (typeof str !== "string") {
      return str;
    }

    return str.slice(0, length);
  };

  const redirect = () => {
    const navigatetime = setTimeout(() => {
      navigate("/cart");
      dispatch(addcart(reduxDataRef.current));
    }, 500);
    return () => clearTimeout(navigatetime);
  };

  return (
    <>
      <style>
        {`
          /* Custom CSS to change the color of the active pill to red */
          .nav-pills .nav-link.active {
            background-color: #f8d4bd; /* Change to the desired background color */
            color: red; /* Change to the desired text color */
          },
        `}
      </style>
      <main
        style={{ marginTop: "3%", backgroundColor: "#f8d4bd", height: "100%" }}
      >
        <section className="mainheader-shop">
          <h1 className="page-header-display-shop">
            Home /
            <span
              style={{
                color: "#14222b",
                paddingLeft: "3px",
                fontWeight: "500",
              }}
            >
              Product Details
            </span>
          </h1>
          <b className="shop-header">Product Details</b>
          <div className="navigate">
            <span className="carousel-prev" onClick={handlePrev}>
              <FaLessThan />
            </span>
            <span className="carousel-next" onClick={handleNext}>
              <FaGreaterThan />
            </span>
          </div>
        </section>
        {/* Carousel */}

        <section className="carousel-main">
          <Container>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
              slide={false}
              className="carousel"
            >
              {products.map((product, index) => (
                <Carousel.Item key={index}>
                  <Row>
                    <Col md={4}>
                      <h1 className="product-title">{product.title}</h1>
                    </Col>
                    <Col xs={9} md={9}>
                      <p className="product-desc">
                        Beyond products, we offer an experience. Welcome to our
                        shop-hub, where every visit tells a story.
                      </p>
                    </Col>
                  </Row>
                  <Card
                    className="cards-shop-carousel"
                    style={{ borderRadius: "250px" }}
                  >
                    <Card.Img
                      src={product.images}
                      className="product-image-shop-carousel"
                      alt="product-image"
                    />
                    <Card.Body>
                      <Card.Text
                        className="product-price-shop"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <FaIndianRupeeSign />
                        {product.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
          <div className="shop-details">
            <b className="shop-review">Reviews: 4.5</b>
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BiSolidStarHalf />
            </div>
          </div>
          <button className="addtocart">Add to Cart</button>
        </section>

        {/* Related Products */}
        <section>
          <h4 className="related-header-shop">Related Products</h4>
          <div className="cards-related-shop">
            <div className="cards-division-shop">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="cards-shop"
                  style={{ borderRadius: "40px" }}
                >
                  <div className="icons-shop">
                    <BsArrowsFullscreen className="zoom-icon-shop" />
                    <BsFillBagCheckFill
                      className="cart-icon-shop"
                      onClick={() => {
                        reduxDataRef.current = {
                          productPrice: `${product.price}`,
                          productTitle: `${product.title}`,
                          productImage: `${product.images}`,
                          productCount: 1,
                        };
                        redirect();
                      }}
                    />
                  </div>
                  <Card.Img
                    src={product.images}
                    className="product-image-shop"
                    alt="product-image"
                  />
                  <Card.Body>
                    <Card.Title
                      className="product-title-shop"
                      style={{ color: "#0f4e8c" }}
                    >
                      {truncated(product.title, 11)}
                    </Card.Title>
                    <Card.Text
                      className="product-price-shop"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FaIndianRupeeSign />
                      {product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
          <p className="copyright-shop">
            Copyright &copy; 2023 | All Rights Reserved.
          </p>
        </section>
      </main>
    </>
  );
}

export default Shop;
