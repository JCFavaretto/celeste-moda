import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Button,
  CardHeader,
} from "reactstrap";

const Item = () => {
  return (
    <>
      <Card className="border-info mb-2">
        <CardImg
          top
          width="100%"
          height="200px"
          src="https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Conjunto1.png?alt=media&token=1100c4bb-8d80-4b82-8aa5-2097dd32d6df"
          alt="Conjunto 1"
        />
        <CardHeader tag="h5">Card title</CardHeader>
        <CardBody>
          <CardText>Some quick example text to build on the card.</CardText>
          <Button color="info">Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default Item;
