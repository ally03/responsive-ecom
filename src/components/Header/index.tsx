import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand href="#" className="brand-icon ">
          <img src="/joulesIcon.png" alt="logo" style={{ width: 130 }} />
        </Navbar.Brand>

        <Nav.Item className="nav-icons">
          <FontAwesomeIcon icon={faSearch} />
        </Nav.Item>
        <Nav.Item className="nav-icons">
          <FontAwesomeIcon icon={faHeart} />
        </Nav.Item>
        <Nav.Item className="nav-icons">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default Header;
