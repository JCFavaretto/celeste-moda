import React from "react";
import ItemList from "components/ItemList";
import { Container } from "reactstrap";

function Products() {
  return (
    <Container className="jumbotron">
      <h2>Nuestros Productos</h2>
      <ItemList />
    </Container>
  );
}

export default Products;
