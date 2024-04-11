import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { readData } from "../util";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
const url =
  "https://raw.githubusercontent.com/mkatay/json_products/main/products";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    readData(url, setProducts);
  }, []);
  console.log(products);
  return (
    <div className="container bg-light">
      <h2>Our Products</h2>
      <div className="products gap-2 justify-content-center">
        {products.map((obj) => (
          <Card key={obj.id}
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={obj.thumbnail} />
            <CardBody>
              <CardTitle tag="h5">{obj.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {obj.category}
              </CardSubtitle>
              <CardText>
                {obj.description}
              </CardText>
              <CardText>
                Price: {obj.price} €
              </CardText>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
