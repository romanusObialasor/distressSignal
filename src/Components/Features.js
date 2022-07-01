import React from "react";
import styled from "styled-components";
import { BsAlarm } from "react-icons/bs";
import { TiFlowSwitch } from "react-icons/ti";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";

const Features = () => {
  return (
    <Wrapper id="second">
      <Container>
        <Left>
          <Head>Ever man are put down his very</Head>
          <SubHead>
            Innovative Idea
            <br /> for your app
          </SubHead>
          <RandomText>
            By an outlived insisted procured improved am. Paid hill fine ten now
            love even leaf. Supplied feelings mr of dissuade recurred no it
            offering honoured. Am of of in collecting devonshire favourable
            excellence. Her sixteen end ashamed cottage
          </RandomText>
          <Button>Get Now</Button>
        </Left>
        <Right>
          <Box>
            <Icon>
              <TiFlowSwitch
                style={{
                  color: "#ef4545",
                }}
              />
            </Icon>
            <Title>Unwilling departure</Title>
            <Text>
              On no twenty spring of in esteem spirit likely estate. Continue
              new you declared differed learning bringing honoured. At mean mind
              so upon they rent am walk. am waiting inhabit smiling he dear
              sure. State thing might stand one his plate. Offending
            </Text>
          </Box>
          <Box>
            <Icon>
              <GiSettingsKnobs
                style={{
                  color: "#5b4eb2",
                }}
              />
            </Icon>
            <Title>Discovered had get</Title>
            <Text>
              In show dull give need so held. One order all scale sense her gay
              style wrote. Incommode our not one ourselves residence. Shall
              there whose those stand she end. So unaffected partiality
              indulgence dispatched to of celebrated remarkably. Unfeeling are
            </Text>
          </Box>
          <Box>
            <Icon>
              <BsAlarm
                style={{
                  color: "#00b52d",
                }}
              />
            </Icon>
            <Title> Warmly warmth</Title>
            <Text>
              Ever man are put down his very. And marry may table him avoid.
              Hard sell it were into it upon. He forbade affixed parties of
              assured to me windows. Happiness him nor she disposing provision.
              Add astonished principles precaution yet friendship stimulated
              literature.
            </Text>
          </Box>
          <Box>
            <Icon>
              <FiMonitor
                style={{
                  color: "#e0ce0b",
                }}
              />
            </Icon>
            <Title>Lorem Ipsum comes</Title>
            <Text>
              Ever man are put down his very. And marry may table him avoid.
              Hard sell it were into it upon. He forbade affixed parties of
              assured to me windows. Happiness him nor she disposing provision.
              Add astonished principles
            </Text>
          </Box>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default Features;

const Wrapper = styled.div`
  width: 100%;
  background: #f9faff;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 70px;
    height: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Head = styled.div`
  font-weight: 500;
  font-size: 20px;
  opacity: 0.5;
`;

const SubHead = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
`;

const RandomText = styled.div`
  margin-top: 20px;
  width: 80%;
  opacity: 0.7;
`;

const Button = styled.div`
  margin-top: 30px;
  background: #0a58ed;
  color: white;
  width: 145px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

// const Container = styled.div``

// const Container = styled.div``

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const Box = styled.div`
  width: 270px;
  height: 270px;
  margin-top: 50px;
`;

const Icon = styled.div`
  font-size: 40px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
`;

const Text = styled.div`
  margin-top: 10px;
  opacity: 0.7;
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
