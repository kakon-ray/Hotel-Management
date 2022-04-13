import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const HeaderNav = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  console.log(user)
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Nav.Link href="/login">Login</Nav.Link>
              </Link>
              <Link to="/registation" style={{ textDecoration: "none" }}>
                <Nav.Link href="/registation">Registation</Nav.Link>
              </Link>

              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#about">About</Nav.Link>
              <Link to="/other" style={{ textDecoration: "none" }}>
                <Nav.Link href="other">Other</Nav.Link>
              </Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/login">
                {user ? (
                  <button className="btn btn-warning mx-2" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <button className="btn btn-warning mx-2">Login</button>
                )}
              </Link>
              <Link to="/registation">
                <button className="btn btn-warning mx-2">Register</button>
              </Link>
              <span className="mx-auto d-flex">
                <span>
                  <h4 className="ms-auto text-light">{user?.displayName}</h4>
                  <p className="ms-auto text-light">{user?.email}</p>
                </span>
                {user?.photoURL ? (
                  <img
                    className="img-fluid rounded"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginLeft: "20px",
                    }}
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
