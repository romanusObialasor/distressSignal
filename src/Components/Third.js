import React from "react";
import { AiOutlineCloudServer, AiOutlineSafety } from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import styled from "styled-components";

const Third = () => {
  return (
    <Container id="third">
      <Left>
        <Image src="/images/second.png" />
      </Left>
      <Right>
        <Wrapper>
          <Head>
            Trusted by the people
            <br /> around the world
          </Head>
          <SubHead>
            Easy mind life fact with see has bore ten. Parish any chatty
            <br /> can elinor direct for former. Up as meant widow
          </SubHead>
          <Rest>
            <Box>
              <Icon>
                <BsSpeedometer
                  style={{
                    padding: "10px",
                  }}
                />
              </Icon>
              <Text>
                <TopText>Shortly am waiting</TopText>
                <BottomText>
                  In show dull give need so held. One order all scale sense her
                  gay style wrote.
                </BottomText>
              </Text>
            </Box>
            <Box>
              <Icon>
                <AiOutlineCloudServer
                  style={{
                    background: "#0a58ed",
                    padding: "10px",
                    borderRadius: "5px",
                    color: "white",
                  }}
                />
              </Icon>
              <Text>
                <TopText>Shortly am waiting</TopText>
                <BottomText>
                  In show dull give need so held. One order all scale sense her
                  gay style wrote.
                </BottomText>
              </Text>
            </Box>
            <Box>
              <Icon>
                <AiOutlineSafety
                  style={{
                    padding: "10px",
                  }}
                />
              </Icon>
              <Text>
                <TopText>Shortly am waiting</TopText>
                <BottomText>
                  In show dull give need so held. One order all scale sense her
                  gay style wrote.
                </BottomText>
              </Text>
            </Box>
          </Rest>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default Third;

const Container = styled.div`
  width: 90%;
  height: 100vh;
  margin-top: 70px;
  display: flex;
  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    br {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 768px) {
    margin: unset;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const SubHead = styled.div`
  margin-top: 10px;
  opacity: 0.7;
  font-size: 17px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Rest = styled.div``;

const Box = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  font-size: 40px;
`;

const Text = styled.div`
  margin-left: 20px;
`;

const TopText = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const BottomText = styled.div`
  margin-top: 5px;
  opacity: 0.7;
`;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;
