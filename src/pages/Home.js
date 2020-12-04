import Banner from "components/Banner";
import Slider from "components/Slider";
import React from "react";
import { Container } from "reactstrap";

function Home() {
  return (
    <div className="jumbotron">
      <Banner />
      <Container
        style={{
          borderTop: "1px solid var(--secondary)",
          marginTop: "1rem",
          paddingTop: "1rem",
        }}
      >
        <h3>Nuestros destacados</h3>
        <Slider />
      </Container>
    </div>
  );
}

export default Home;
