import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    //<header>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Link to="/">
          <Navbar.Brand>ProShop</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/cart" style={{ color: "white" }}>
              <i
                className="fas fa-shopping-cart m-2"
                style={{ color: "white" }}
              ></i>
              Cart
            </Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">
              <i className="fas fa-user m-2" style={{ color: "white" }}></i>
              Login
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    //</header>
  );
};

export default Header;
