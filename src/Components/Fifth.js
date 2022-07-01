import React from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

const Fifth = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoPlay: true,
  };

  return (
    <Container id="fifth">
      <Top>
        <Head>Users Reviews</Head>
        <Title>
          Folly words widow one downs few age every seven. If miss part by fact
          he park just shew. Discove#0a58ed
          <br /> had get considered projection who favourable. garden extent by.
        </Title>
      </Top>
      <Main>
        <ArrowHolder>
          <BsChevronLeft />
        </ArrowHolder>
        <CaruselSlider>
          <Slider {...settings}>
            <Carusel>
              <Box>
                <BoxWrapper>
                  <Text>
                    Its sometimes her behaviour are contented. Do listening am
                    eagerness oh objection collected. Together gay feelings
                    continue juvenile had off one.
                  </Text>
                  <Bottom>
                    <Details>
                      <Image src="/images/user.jpg" />
                      <SubDetails>
                        <Name>Romanus Obialasor</Name>
                        <Proffesion>Web Developer</Proffesion>
                      </SubDetails>
                    </Details>
                    <Qoutation>"</Qoutation>
                  </Bottom>
                </BoxWrapper>
              </Box>
            </Carusel>
            <Carusel>
              <Box>
                <BoxWrapper>
                  <Text>
                    Its sometimes her behaviour are contented. Do listening am
                    eagerness oh objection collected. Together gay feelings
                    continue juvenile had off one.
                  </Text>
                  <Bottom>
                    <Details>
                      <Image src="/images/user.jpg" />
                      <SubDetails>
                        <Name>Romanus Obialasor</Name>
                        <Proffesion>Web Developer</Proffesion>
                      </SubDetails>
                    </Details>
                    <Qoutation>"</Qoutation>
                  </Bottom>
                </BoxWrapper>
              </Box>
            </Carusel>
          </Slider>
        </CaruselSlider>
        <ArrowHolder>
          <BsChevronRight />
        </ArrowHolder>
      </Main>
      <Dots>
        <Dot br />
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Container>
  );
};

export default Fifth;

const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 90vh;
  background: red;
  background: #f9faff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 100%;
    padding-bottom: 40px;
  }
`;

const Top = styled.div`
  text-align: center;
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const Title = styled.div`
  opacity: 0.7;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    margin: 10px 20px;
  }
`;

const Main = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin-top: 70px;
  align-items: center;
`;

const ArrowHolder = styled.div`
  cursor: pointer;
  transition: all 350ms;
  height: 40px;
  width: 40px;
  background: #0a58ed;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    transform: scale(0.7);
  }
`;

const CaruselSlider = styled.div`
  width: 80%;
  margin: auto;
`;

const Carusel = styled.div`
  width: 100%;
  display: flex;
  transition: all 0.25s ease-in-out;
  justify-content: space-around;
`;

const Box = styled.div`
  width: 90%;
  height: 250px;
  min-height: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 26px 30px -10px,
    rgb(0 0 0 / 30%) 0px 16px 10px -10px;
  @media screen and (max-width: 425px) {
    padding: 20px 0;
    height: 100%;
  }
`;

const BoxWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px;
`;

const Text = styled.div`
  font-size: 17px;
  opacity: 0.5;
  line-height: 1.7;
  font-weight: 500;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  object-fit: cover;
`;

const SubDetails = styled.div`
  margin-left: 7px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Proffesion = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;

const Qoutation = styled.div`
  font-size: 100px;
  opacity: 0.2;
`;

const Dots = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  width: ${({ br }) => (br ? "15px" : "8px")};
  height: ${({ br }) => (br ? "15px" : "8px")};
  background: ${({ br }) => (br ? "#0a58ed" : "gray")};
  margin: 8px;
  border-radius: 100px;
`;
