import React from "react";
import { Row, Col } from "reactstrap";
import Item from "./Item";

function ItemList({ count = "16" }) {
  const items = [];

  let i = 0;
  for (i = 0; i < count; i++) {
    items.push(
      <Col>
        <Item />
      </Col>
    );
  }

  return (
    <div className="mt-5">
      <Row xs="1" sm="2" md="3" lg="4">
        {items}
      </Row>
    </div>
  );
}

export default ItemList;
