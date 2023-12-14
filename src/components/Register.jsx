import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../components/Register.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Register() {
  const [active, setActive] = useState(false);

  const showpassword = () => {
    setActive(!active);
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
      <section className="form-main-register">
        <Form className="form-register">
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Sign Up
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="abc@example.com"
              className="register-email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={!active ? "password" : "text"} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type={!active ? "password" : "text"} />
            {!active ? (
              <AiFillEyeInvisible onClick={showpassword} className="closeeye-register" />
            ) : (
              <AiFillEye onClick={showpassword} className="openeye-register" />
            )}
          </Form.Group>

          <button className="register-button" type="submit">
            Sign Up
          </button>
        </Form>
      </section>
      <p className="copyright-register">
        Copyright &copy; 2023 | All Rights Reserved.
      </p>
    </main>
  );
}

export default Register;
