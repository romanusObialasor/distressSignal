import React from "react";
import styled from "styled-components";

const Fouth = () => {
  return (
    <Container id="fouth">
      <Left>
        <Wrapper>
          <Head>
            Discovered had get considered
            <br /> projection who favourable
          </Head>
          <Text>
            Surprise steepest recurred landlord mr wandered amounted of.
            Continuing devonshire but considered its. Rose past oh shew roof is
            song neat. Do depend better praise do friend garden an wonder to
            Intention age nay otherwise but breakfast. Around garden beyond to.
          </Text>
          <Holder>
            <Box>
              <Number>20K+</Number>
              <TNum>
                Number
                <br />
                of users
              </TNum>
            </Box>
            <Box>
              <Number>20K+</Number>
              <TNum>
                Number
                <br />
                of users
              </TNum>
            </Box>
            <Box>
              <Number>20K+</Number>
              <TNum>
                Number
                <br />
                of users
              </TNum>
            </Box>
          </Holder>
          <LineHolder>
            <Line />
            <Circle />
          </LineHolder>
        </Wrapper>
      </Left>
      <Right>
        <Image src="/images/draw2.jpg" />
      </Right>
    </Container>
  );
};

export default Fouth;

const Container = styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  align-items: center;
  border: 1px solid rgba(10, 88, 237, 0.5);
  border-radius: 5px;
  margin-top: 70px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background: #bed5ff;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  color: #3f3f3f;
  width: 90%;
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin: 10px 20px;
    width: 100%;
  }
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Text = styled.div`
  margin-top: 20px;
  opacity: 0.7;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-between;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LineHolder = styled.div`
  margin-top: 30px;
  background: #9b9b9b;
  width: 80%;
  height: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Line = styled.div`
  height: 100%;
  width: 45%;
  background: #0a58ed;
  border-radius: 100px;
`;

const Circle = styled.div`
  height: 15px;
  width: 15px;
  background: #0a58ed;
  border-radius: 100%;
`;

const Box = styled.div``;

const Number = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: black;
`;

const TNum = styled.div`
  margin-top: 5px;
`;

// const Container = styled.div``;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
