import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../components/Myaccount.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Myaccount() {
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
      <section className="form-main-myaccount">
        <Form className="form-myaccount">
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Update Password
          </h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="abc@example.com"
              className="myaccount-email"
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Current Password</Form.Label>
            <Form.Control type={!active ? "password" : "text"} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type={!active ? "password" : "text"} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type={!active ? "password" : "text"} />
            {!active ? (
              <AiFillEyeInvisible onClick={showpassword} className="closeeye-myaccount" />
            ) : (
              <AiFillEye onClick={showpassword} className="openeye-myaccount" />
            )}
          </Form.Group>

          <button className="myaccount-button" type="submit">
            Update Password
          </button>
        </Form>
      </section>
      <p className="copyright-myaccount">
        Copyright &copy; 2024 | All Rights Reserved.
      </p>
    </main>
  );
}

export default Myaccount;
