import React from "react";
import styled from "styled-components";
import Features from "./Features";
import Fifth from "./Fifth";
import Footer from "./Footer";
import Fouth from "./Fouth";
import Header from "./Header";
import Home from "./Home";
import Third from "./Third";

const Main = () => {
  return (
    <Container>
      <Header />
      <Home />
      <Features />
      <Third />
      <Fouth />
      <Fifth />
      <Footer />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
