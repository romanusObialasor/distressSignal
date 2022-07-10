import React from "react";
import styled from "styled-components";
import { BsAlarm } from "react-icons/bs";
import { TiFlowSwitch } from "react-icons/ti";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";

const Features = () => {
  return (
    <Wrapper id="features">
      <Container>
        <Left>
          <Head>Features we offer</Head>
          <SubHead>
            We at Distress Signal
            <br /> Care for you
          </SubHead>
          <RandomText>
            As long as you keep secrets and suppress information, you are
            fundamentally at war with yourself…The critical issue is allowing
            yourself to know what you know. That takes an enormous amount of
            courage.
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
            <Title>Easy to use</Title>
            <Text>
              The human race tends to remember the abuses to which it has been
              subjected rather than the endearments. What's left of kisses?
              Wounds, however, leave scars
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
            <Title>Safety first</Title>
            <Text>
              I swore never to be silent whenever and wherever human beings
              endure suffering and humiliation. We must take sides. Neutrality
              helps the oppressor, never the victim. Silence encourages the
              tormentor, never the tormented.
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
            <Title>Time Management</Title>
            <Text>
              ... you don't have to wait for someone to treat you bad
              repeatedly. All it takes is once, and if they get away with it
              that once, if they know they can treat you like that, then it sets
              the pattern for the future.
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
            <Title>On All Device</Title>
            <Text>
              To those who abuse: the sin is yours, the crime is yours, and the
              shame is yours. To those who protect the perpetrators: blaming the
              victims only masks the evil within, making you as guilty as those
              who abuse. Stand up for the innocent or go down with the rest.
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
