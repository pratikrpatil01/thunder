import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductData } from "../Store/Reducers/productDataReducer";
import { Col, Container, Form, Row } from "react-bootstrap";
import CardComponent from "../Components/Card";

function Homepage() {
  const [search, setSearch] = React.useState({
    title: "",
    price: { min: 0, max: 0 },
    category: "",
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetProductData());
  }, []);

  const { products } = useSelector((state) => state?.product?.data);

  const handleFilter = (event) => {
    const { name, value } = event.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterPrice = (event) => {
    const { name, value } = event.target;
    const nimmaxValue = value.split("-");

    console.log(search, "minuinsduifi");
    setSearch((prev) => ({
      ...prev,
      [name]: { min: nimmaxValue[0], max: nimmaxValue[1] },
    }));
  };
  return (
    <React.Fragment>
      <div className="justify-content-between d-flex py-5">
        {" "}
        <h1>home page</h1>
        <div>
          <input
            placeholder="Search"
            onChange={handleFilter}
            name="title"
            value={search?.title}
            style={{ height: "60px" }}
          />
        </div>
        <Form.Select
          aria-label=""
          style={{ width: "200px" }}
          onChange={handleFilter}
          name="category"
          value={search?.category}
        >
          <option value={""}>Select Category</option>
          <option value="Skincare">Skincare</option>
          <option value="Home Decoration">Home Decoration</option>
          <option value="Groceries">Groceries</option>
        </Form.Select>{" "}
        <Form.Select
          aria-label=""
          style={{ width: "200px" }}
          onChange={handleFilterPrice}
          name="price"
          value={search?.price}
        >
          <option value={""}>Select Price Range</option>
          <option value="1-100"> $1-$100</option>
          <option value="100-200">$100-$200</option>
          <option value="200-500">$200-$500</option>
          <option value="500-1000">$500-$1000</option>
          <option value="1000-100000000">$1000+</option>
        </Form.Select>
      </div>
      <Container>
        <Row>
          {products &&
            products
              ?.filter(
                (item, index) =>
                  ((search.title === "" ||
                    item.title
                      .toLowerCase()
                      .includes(search.title?.toLowerCase())) &&
                    (search.category === "" ||
                      item.category.includes(search.category)) &&
                    (search.price?.min === 0 ||
                      item.price > search.price?.min)) ||
                  search.price.max === 0 ||
                  item.price < search.price?.max
              )

              .map((item, index) => (
                <Col xs={12} sm={6} md={4} lg={3}>
                  <CardComponent key={index} data={item} type={"add"} />
                </Col>
              ))}
        </Row>
      </Container>
      products
    </React.Fragment>
  );
}

export default Homepage;
