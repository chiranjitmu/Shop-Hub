import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../components/Login.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
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
      <section className="form-main">
        <Form className="form-login">
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Login
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="abc@example.com"
              className="login-email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={!active ? "password" : "text"} />
            {!active ? (
              <AiFillEyeInvisible onClick={showpassword} className="closeeye" />
            ) : (
              <AiFillEye onClick={showpassword} className="openeye" />
            )}
          </Form.Group>

          <button className="login-button" type="submit">
            Login
          </button>
        </Form>
      </section>
      <p className="copyright-login">
        Copyright &copy; 2023 | All Rights Reserved.
      </p>
    </main>
  );
}

export default Login;
