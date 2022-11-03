import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

function NavigationBar(props:any) {
  const [searchMeal, setSearchMeal] = useState<any>("")

  const handleChange=(e:any)=>{
    setSearchMeal(e.target.value)
  }

  const handleSearch=()=>{
    if (searchMeal) {
      props.handleMeal(searchMeal);
      setSearchMeal("")
    }
  }

  const navLinks = [
    { path: "/", name: "Meal Catagories" },
    { path: "a-z", name: "All Meals" },
    { path: "random", name: "Random Meal" }
  ]

  return (
    <Navbar bg="light" expand="lg" sticky='top' >
      <Container fluid>
        <Navbar.Brand href="#"> 
         Meal DB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {navLinks.map((item, index) => <NavLink autoCorrect={item.name}
              key={index}
              to={item.path}
              className={'normal-link'}
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : { fontWeight: "normal" }
              }
            >
              {item.name}
            </NavLink>)}

          </Nav>
          <Form className="d-flex">
            <Form.Control
              value={searchMeal}
              type="search"
              placeholder="Search Meal"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <NavLink className={'normal-link'} to={'search'} >
              <Button variant="outline-success" onClick={handleSearch} >
                Search
              </Button>
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;