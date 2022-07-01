import React from "react";
import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";

const Home = () => {
  return (
    <Container>
      <Left>
        <Title>
          A Perfect <br />
          Landing Page To <br />
          Present Your App
        </Title>
        <SubText>
          Surprise steepest recurred landlord mr wandered amounted of.
          Continuing <br /> devonshire but considered its. Rose past oh shew
          roof is
        </SubText>
        <Buttons>
          <Button>
            <PlayImg src="/images/play.svg" />
            <Texts>
              <TopText>GET IN ON</TopText>
              <MainText>Google Play</MainText>
            </Texts>
          </Button>
          <Button>
            <Icon>
              <AiFillApple />
            </Icon>
            <Texts>
              <TopText>Download from</TopText>
              <MainText>App Store</MainText>
            </Texts>
          </Button>
        </Buttons>
        <Partners>
          <SText>
            Our <br />
            Partners
          </SText>
          <Partner>
            <PartnerImage src="/images/partner1.png" />
            <PartnerImage src="/images/partner2.png" />
          </Partner>
        </Partners>
      </Left>
      <Right>
        <HeroImg src="/images/hero.png" />
      </Right>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 90%;
  height: calc(100vh - 80px);
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    align-items: center;
    text-align: center;
    br {
      display: none;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    height: unset;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-family: "Acme", sans-serif;
  font-weight: 600;
`;

const SubText = styled.div`
  margin-top: 20px;
`;

const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background: #0a58ed;
  color: white;
  margin-right: 20px;
  border-radius: 5px;
  width: 165px;
  height: 55px;
  cursor: pointer;
  transition: 350ms;
  :hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const Icon = styled.div`
  font-size: 30px;
  margin-left: 10px;
`;

const Texts = styled.div`
  margin-left: 5px;
`;

const TopText = styled.div`
  font-size: 13px;
`;

const MainText = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: -3px;
`;

const Partners = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
`;

const SText = styled.div`
  font-weight: 500;
  font-size: 17px;
`;

const Partner = styled.div`
  display: flex;
  padding-left: 30px;
  margin-left: 30px;
  border-left: 1px solid rgba(0, 0, 0, 0.4);
`;

const PartnerImage = styled.img`
  height: 40px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    height: 30px;
  }
`;

const HeroImg = styled.img`
  height: 95%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const PlayImg = styled.img`
  height: 20px;
  margin-left: 10px;
`;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;
