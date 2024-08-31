import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navs() {
  return (
    <Navbar expand="lg" className="bg-primary px-3">
      <Navbar.Brand className="text-white">Shopping Cart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/new-product" className="nav-link">
            New Product
          </NavLink>
          <NavLink to="/product-list" className="nav-link">
            Product List
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navs;
