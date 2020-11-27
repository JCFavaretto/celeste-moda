import ItemList from "components/ItemList";
import Slider from "components/Slider";
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

function Home() {
  return (
    <>
      <Link to="/contact">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/celeste-moda.appspot.com/o/Revendedoras.png?alt=media&token=83a20556-88e4-49d2-88ae-4bbd662ac04e"
          alt="Sumate a nuestro equipo"
          width="100%"
          height="300px"
        />
      </Link>
      <Container className="jumbotron">
        <h3>Nuestros destacados</h3>
        <Slider />
      </Container>
    </>
  );
}

export default Home;
