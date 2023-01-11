import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import './css/Nav.css';

const NavBar = ()=> {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#0a0a0a") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("8rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>

    <Navbar expand="lg" fixed="top" style={{
      backgroundColor: navColor,
      height: navSize,
      transition: "all 1s"
    }}>
    <Container fluid>
      <Navbar.Brand style={{fontSize:"2rem"}} href="/">Online Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-lg-0"
          style={{ maxHeight: '200px'}}
          navbarScroll
        ><Nav.Link>
          <Link to={"/Shop"}>Shop</Link>
          <Link to={"/Mens-clothing"}>Men's Clothing</Link>
          <Link to={"/Jewelery"}>Jewellery</Link>
          <Link to={"/Electronics"}>Electronics</Link>
          <Link to={"/WomensClothings"}>women's clothing</Link>
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Outlet />
  </>
  );
}

export default NavBar;