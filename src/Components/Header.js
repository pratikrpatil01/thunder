import React from "react";
import { GetProductData } from "../Store/Reducers/productDataReducer";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Container, Image, Navbar } from "react-bootstrap";

function Header() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetProductData());
  }, []);
  const { cardData } = useSelector((state) => state?.card);
  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Thunder</Navbar.Brand>
          <Navbar.Brand href="/card">
            <Button variant="secondry">
              Card <Badge bg="secondary">{cardData?.length}</Badge>{" "}
            </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
