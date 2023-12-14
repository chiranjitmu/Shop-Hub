import Card from "react-bootstrap/Card";
import "../components/Home.css";
import React, { useEffect, useState, useRef } from "react";
import { BsFillBagCheckFill, BsArrowsFullscreen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcart } from "../Redux/cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import products from "./product.json";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxDataRef = useRef({
    productPrice: "",
    productTitle: "",
    productImage: "",
    productCount: "",
  });

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
    <main
      style={{ marginTop: "3%", backgroundColor: "#f8d4bd", height: "100%" }}
    >
      <section className="mainheader">
        <h1 className="page-header-display">
          Home /{" "}
          <span
            style={{
              color: "#14222b",
              paddingLeft: "3px",
              fontWeight: "500",
            }}
          >
            Shop
          </span>
        </h1>
        <b className="shop-home-header">Shop</b>
      </section>
      {/* main */}
      <section className="cards-main">
        <div className="cards-division">
          {products.map((product, index) => (
            <Card
              key={index}
              className="cards"
              style={{ borderRadius: "40px" }}
            >
              <div className="icons-hero">
                <BsArrowsFullscreen className="zoom-icon-hero" />
                <BsFillBagCheckFill
                  className="cart-icon-hero"
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
                className="product-image"
                alt="product-image"
              />
              <Card.Body>
                <Card.Title
                  className="product-title"
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
      </section>
      {/* related */}
      <section className="related-main">
        <h4 className="related-header">Related Products</h4>
        <div className="cards-related">
          <div className="cards-division">
            {products.map((product, index) => (
              <Card
                key={index}
                className="cards"
                style={{ borderRadius: "40px" }}
              >
                <div className="icons-hero">
                  <BsArrowsFullscreen className="zoom-icon-hero" />
                  <BsFillBagCheckFill
                    className="cart-icon-hero"
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
                  className="product-image"
                  alt="product-image"
                />
                <Card.Body>
                  <Card.Title
                    className="product-title"
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
        <p className="copyright">
          Copyright &copy; 2023 | All Rights Reserved.
        </p>
      </section>
    </main>
  );
}

export default Home;
