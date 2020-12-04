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
      <Card className="border-secondary mb-2">
        <CardImg
          top
          width="100%"
          height="150px"
          src="https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Conjunto3.png?alt=media&token=33d04916-344f-4c7c-af10-41d001ba8323"
          alt="Conjunto 1"
        />
        <CardHeader tag="h5">Card title</CardHeader>
        <CardBody>
          <CardText>Some quick example text to build on the card.</CardText>
          <Button color="secondary">Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default Item;
