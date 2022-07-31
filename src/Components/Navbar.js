import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getMovies } from "../redux/feature/movieSlice";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const [name, setName] = useState("spider");
  const {
    movies: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <>
      {" "}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setName(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {error && <h4>{error}</h4>}
    </>
  );
};

export default Header;
