import React, { useEffect, useState, useRef } from "react";
import { BsFillBagCheckFill, BsArrowsFullscreen } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "../components/Blog.css";
import { useNavigate } from "react-router-dom";
import { addcart } from "../Redux/cartSlice";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import products from "./product.json";

function Blog() {
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
      style={{ marginTop: "3%", backgroundColor: "#f8d4bd", height: "auto" }}
    >
      <section className="cards-main-blog">
        <div className="cards-division-blog">
          {products.map((product, index) => (
            <Card
              key={index}
              className="cards-blog"
              style={{ borderRadius: "40px" }}
            >
              <div className="icons-blog">
                <BsArrowsFullscreen className="zoom-icon-blog" />
                <BsFillBagCheckFill
                  className="cart-icon-blog"
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
                className="product-image-blog"
                alt="product-image"
              />
              <Card.Body>
                <Card.Title
                  className="product-title-blog"
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
      <p className="copyright-blog">
        Copyright &copy; 2023 | All Rights Reserved.
      </p>
    </main>
  );
}

export default Blog;
