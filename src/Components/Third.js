import React from "react";
import { AiOutlineCloudServer, AiOutlineSafety } from "react-icons/ai";
import { BsSpeedometer } from "react-icons/bs";
import styled from "styled-components";

const Third = () => {
  return (
    <Container id="services">
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
            Neutrality helps the oppressor, never the victim.
            <br /> Silence encourages the tormentor, never the tormented.
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
                <TopText>carefree Childhood</TopText>
                <BottomText>
                  Childhood should be carefree, playing in the sun; not living a
                  nightmare in the darkness of the soul.
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
                <TopText>People Cares</TopText>
                <BottomText>
                  There are far too many silent sufferers. Not because they
                  don't yearn to reach out, but because they've tried and found
                  no one who cares.
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
                <TopText>Comfort over Pain</TopText>
                <BottomText>
                  Of pain you could wish only one thing: that it should stop.
                  Nothing in the world was so bad as physical pain. In the face
                  of pain there are no heroes
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
