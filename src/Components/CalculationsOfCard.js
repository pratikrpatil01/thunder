import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";

function CalculationsOfCard() {
  const { cardData } = useSelector((state) => state?.card);
  const total = cardData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
 
  return (
    <React.Fragment>
      <Card style={{ margin: "20px" }}>
        <Card.Body>
          <Card.Title>All Item ({cardData.length})</Card.Title>

          <Card.Text>
            <div></div>

            <div>
              <b>Total : </b>
              {total}
            </div>
            <div>
              <b>GST : </b>
              {(total * 28) / 100} (28%)
            </div>
            <div>
              <b>Shipping charge : </b>
              {cardData?.length * 10}
            </div>
            <div>
              <b>Grand total : </b>
              {cardData?.length * 10 + (total * 28) / 100 + total}
            </div>
          </Card.Text>
          <Button variant="primary" className="m-1 pl-2 pr-2">
            Buy
          </Button>
        </Card.Body>
      </Card>
      {/* {cardData} */}
    </React.Fragment>
  );
}

export default CalculationsOfCard;
