import React, { useEffect, useState } from "react";
import "../components/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { deleteCart, updateCountplus, updateCountminus } from "../Redux/cartSlice";

function Cart() {
  const [data, setData] = useState([]);
  const [counts, setCounts] = useState({});
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(cart);
    // Initialize counts with default values based on the length of data
    const initialCounts = {};
    data.forEach((_, index) => {
      initialCounts[index] = cart[index].productCount; // Initialize count to 1 for each product
    });
    setCounts(initialCounts);
  }, [cart, data]);


  const truncated = (str, length) => {
    if (typeof str !== "string") {
      return str;
    }

    return str.slice(0, length);
  };

  const incrementCount = (index) => {
    dispatch(updateCountplus(index));
  };

  const decrementCount = (index) => {
    if (counts[index] > 1) {
     dispatch(updateCountminus(index))
    } else if (counts[index] === 1) {
      dispatch(deleteCart(index));
      location.reload()
    }
  };

  const calculateTotal = () => {
    const total = data.reduce(
      (acc, product, index) =>
        acc + product.productPrice * (counts[index] || 0),
      0
    );

    // Limit the total to three decimal places
    return total.toFixed(3);
  };

  return (
    <main
      style={{
        marginTop: "3%",
        backgroundColor: "#f8d4bd",
        height: "auto",
        paddingBottom: "8px",
      }}
    >
      <section className="cart-main">
        <h4 className="shoppingcart-header">Shopping Cart New</h4>
        {/* cart list */}
        <div>
          {data.map((product, index) => (
            <div key={index} className="cart-list">
              <div className="image-cover">
                <img
                  src={product.productImage}
                  className="product-image-cart"
                  alt="product-image"
                />
              </div>
              <h5>{truncated(product.productTitle, 11)}</h5>
              <div className="counter">
                <button
                  onClick={() => decrementCount(index)}
                  className="minus-cart"
                >
                  -
                </button>
                <span>{counts[index]}</span>
                <button
                  onClick={() => incrementCount(index)}
                  className="plus-cart"
                >
                  +
                </button>
              </div>
              <span>
                <FaIndianRupeeSign /> {product.productPrice}
              </span>
            </div>
          ))}
        </div>
        {/* product-price */}
        <div className="shipping-details">
          <h4>
            Total:
            <span style={{ fontWeight: "300" }}>
              <FaIndianRupeeSign /> {calculateTotal()}
            </span>
          </h4>
          <h4>
            Shipping: <span style={{ fontWeight: "300" }}>Free Shipping</span>
          </h4>
          <button className="cart-button">Proceed to Checkout</button>
        </div>
      </section>
      <p className="copyright-cart">
        Copyright &copy; 2024 | All Rights Reserved.
      </p>
    </main>
  );
}

export default Cart;
