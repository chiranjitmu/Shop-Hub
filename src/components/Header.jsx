import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import "../components/Header.css";
import { BsFillBagCheckFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { PiDotsSix } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/");
    const lastSegment = segments[segments.length - 1];
    if (currentPath == "/") {
      setActiveLink("home");
    } else {
      setActiveLink(lastSegment);
    }
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNavClick = (link) => {
    redirect(link);
    setActiveLink(link);
  };

  const redirect = (link) => {
    const navigatetime = setTimeout(() => {
      if (link === "home") {
        navigate("/");
        setExpanded(false);
      } else {
        navigate(`/${link}`);
        setExpanded(false);
      }
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
      <section style={{ marginLeft: "auto" }}>
        <Navbar expanded={expanded} collapseOnSelect expand="lg">
          <Container>
            <a href="/" aria-label="redirected to home">
              <PiDotsSix className="main-icon" />
            </a>
            <Navbar.Brand href="/" className="main">
              shophub
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={handleToggle}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" variant="pills">
                <Nav.Link
                  className="home"
                  active={activeLink === "home"}
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="shop"
                  active={activeLink === "shop"}
                  onClick={() => handleNavClick("shop")}
                >
                  Shop
                </Nav.Link>
                <Nav.Link
                  className="blog"
                  active={activeLink === "blog"}
                  onClick={() => handleNavClick("blog")}
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  className="contact"
                  active={activeLink === "contact"}
                  onClick={() => handleNavClick("contact")}
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  className="login"
                  active={activeLink === "login"}
                  onClick={() => handleNavClick("login")}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  className="signup"
                  active={activeLink === "signup"}
                  onClick={() => handleNavClick("signup")}
                >
                  SignUp
                </Nav.Link>
                <Nav.Link
                  className="myaccount"
                  active={activeLink === "myAccount"}
                  onClick={() => handleNavClick("myAccount")}
                >
                  MyAccount
                </Nav.Link>

                <Nav.Link
                  active={activeLink === "cart"}
                  onClick={() => handleNavClick("cart")}
                >
                  <BsFillBagCheckFill
                    className="cart-icon"
                    active={activeLink === "myAccount"}
                    onClick={() => handleNavClick("myAccount")}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <BiSearch className="search-bar" onClick={handleShow} />
      <section>
        <Modal show={show} onHide={handleClose} className="modal-search">
          <input
            type="text"
            placeholder="Search by Keyword"
            className="search-input"
          ></input>

          <button onClick={handleClose} className="search-button">
            Search
          </button>
        </Modal>
      </section>
    </>
  );
}

export default Header;
