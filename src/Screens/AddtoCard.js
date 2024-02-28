import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductData } from "../Store/Reducers/productDataReducer";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "../Components/Card";
import CalculationsOfCard from "../Components/CalculationsOfCard";

function CardScreen() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetProductData());
  }, []);

  const { cardData } = useSelector((state) => state?.card);
 
  return (
    <React.Fragment>
      <h1>Card Items</h1>
      <Container>
        <Row>
          {cardData &&
            cardData?.map((item, index) => (
              <Col xs={12} sm={6} md={4} lg={3}>
                <CardComponent key={index} data={item} type={"remove"} />
              </Col>
            ))}
        </Row>
      <CalculationsOfCard />
      </Container>
    </React.Fragment>
  );
}

export default CardScreen;
