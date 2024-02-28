import { Button, Card, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataToCard,
  removeDataToCard,
} from "../Store/Reducers/cardDataReducer";
import { useNavigate } from "react-router";

function CardComponent({ data, type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cardData } = useSelector((state) => state?.card);
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }; 
  return (
    <Card style={{ height: "auto", margin: "20px" }}>
      <Card.Body>
        <div
          onClick={() => {
            handleClick(data?.id);
          }}
        >
          {" "}
          <Card.Title>{data?.title}</Card.Title>
          <Card.Img variant="top" height={"300px"} src={data?.images[0]} />
          <Card.Text>
            <Stack direction="horizontal" gap={5}>
              <div>
                {" "}
                <b>$ {data?.price}</b>
              </div>

              <div> {data?.stock} left</div>
            </Stack>

            <div>
              <b>Rating : </b>
              {data?.rating}
            </div>
            <div>
              <b>Stock : </b>
              {data?.stock}
            </div>
            <div>
              <b>Off : </b>
              {data?.discountPercentage}%
            </div>
          </Card.Text>
        </div>
        {type === "remove" ? (
          <Button
            variant="primary"
            className="m-1"
            onClick={() => {
              dispatch(removeDataToCard(data?.id));
            }}
          >
            Remove{" "}
          </Button>
        ) : (
          <Button
            variant="primary"
            className="m-1"
            onClick={() => {
              dispatch(addDataToCard(data));
            }}
          >
            Add To Card
          </Button>
        )}
        <Button variant="primary" className="m-1 pl-2 pr-2">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
