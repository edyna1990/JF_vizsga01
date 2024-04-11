import React from "react";
import { featuredProducts } from "../data";
import { Card, CardBody, CardTitle } from "reactstrap";

export const FeaturedProducts = () => {
  console.log(featuredProducts);
  return (
    <div className="featured">
      {featuredProducts.map((obj) => (
        <Card key={obj.id} style={{width: "18rem"}}>
          <CardBody>
            <CardTitle className="title" tag="h5">{obj.title}</CardTitle>
            <img alt="Card cap" src={obj.thumbnail} width="100%"/>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
