import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Container id="sixth">
      <Curve />
      <Main>
        <LogoHolder>
          <Logo src="/images/logo.png" />
          <LogoText>Distress</LogoText>
        </LogoHolder>
        <Icons>
          <Icon>
            <BsFacebook />
          </Icon>
          <Icon>
            <AiFillTwitterCircle />
          </Icon>
          <Icon>
            <AiFillInstagram />
          </Icon>
          <Icon>
            <AiFillYoutube />
          </Icon>
        </Icons>
        <Navigators>
          <Nav>Home</Nav>
          <Nav>Features</Nav>
          <Nav>Pricing</Nav>
          <Nav>Statistics</Nav>
        </Navigators>
        <Creation>Created by team distress</Creation>
      </Main>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  background: #0a58ed;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Curve = styled.div`
  width: 105%;
  background: white;
  height: 400px;
  border-radius: 100%;
  position: absolute;
  top: -200px;
  @media screen and (max-width: 768px) {
    width: 120%;
    top: -250px;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

const LogoHolder = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const LogoText = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-left: 10px;
`;

const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon = styled.div`
  margin: 0 20px;
  font-size: 25px;
  cursor: pointer;
`;

const Navigators = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
  }
`;

const Nav = styled.div`
  font-weight: 500;
  margin: 30px;
  font-size: 17px;
  cursor: pointer;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin: unset;
  }
`;

const Creation = styled.div`
  margin-top: 50px;
  font-weight: bold;
  opacity: 0.6;
  margin-bottom: 20px;
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
