import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { useParams } from "react-router";

function CardDetails() {
  let { id } = useParams();
  const { products } = useSelector((state) => state?.product?.data);

  const data = products.find((item) => item.id == id);
 
  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <Container>
        <Card style={{ height: "auto", margin: "20px" }}>
          <Card.Body>
            <div>
              {" "}
              <Card.Title>{data?.title}</Card.Title>
              <Card.Img variant="top" height={"300px"} src={data?.images[0]} />
              <Card.Text>
                <div><b>Brand : </b>{data?.brand}</div>
                <div><b>Rating : </b>{data?.rating}</div>
                <div><b>Stock : </b>{data?.stock}</div>
                <div><b>Discount : </b>{data?.discountPercentage}%</div>
               
                <div>{data?.description}</div>
                <Stack direction="horizontal" gap={5}>
                  <div>
                    {" "}
                    <b>Price: $ {data?.price}</b>
                  </div>

                  <div> {data?.stock} left</div>
                </Stack>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default CardDetails;
