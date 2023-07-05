import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
// import { IoPricetagOutline } from "react-icons/io";
// import { BiStation } from "react-icons/bi";
// import { GiStatic } from "react-icons/md";

const Header = () => {
  const getHeader = document.getElementById("header");

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (windowScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = getHeader.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      getHeader.style.position = "fixed";
      getHeader.style.background = "white";
    } else {
      getHeader.style.position = "unset";
    }
  });

  const reveal = () => {
    const sideBar = document.getElementById("sideBar");
    sideBar.style.width = "250px";
    const getMe = document.getElementById("menu");
    const getCancel = document.getElementById("cancel");
    getMe.style.display = "none";
    getCancel.style.display = "block";
  };

  const dismiss = () => {
    const sideBar = document.getElementById("sideBar");
    sideBar.style.width = "0";
    const getMe = document.getElementById("menu");
    const getCancel = document.getElementById("cancel");
    getMe.style.display = "block";
    getCancel.style.display = "none";
  };

  return (
    <Wrapper>
      <Container>
        <Left>
          <Link
            offset={-130}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Logo src="/images/logo.png" />
            <Text>Distress</Text>
          </Link>
        </Left>
        <Navigators>
          <Link
            offset={-130}
            activeClass="active"
            to="home"
            smooth={true}
            duration={500}
          >
            <Nav>Home</Nav>
          </Link>
          <Link
            offset={-130}
            activeClass="active"
            to="features"
            smooth={true}
            duration={500}
          >
            <Nav>Features</Nav>
          </Link>
          <Link
            offset={-130}
            activeClass="active"
            to="services"
            smooth={true}
            duration={500}
          >
            <Nav>Services</Nav>
          </Link>
          <Link
            offset={-130}
            activeClass="active"
            to="review"
            smooth={true}
            duration={500}
          >
            <Nav>Reviews</Nav>
          </Link>
          <Link
            offset={-130}
            activeClass="active"
            to="footer"
            smooth={true}
            duration={500}
          >
            <Nav>Footer</Nav>
          </Link>
        </Navigators>
        <Right>
          <Button1 href="https://distress.vercel.app/signin">
            Log in
          </Button1>
          <Button href="https://distress.vercel.app/signup">
            Sign up
          </Button>
        </Right>
        <Menu
          id="menu"
          onClick={() => {
            reveal();
          }}
        >
          <AiOutlineMenu />
        </Menu>
        <Cancel
          id="cancel"
          onClick={() => {
            dismiss();
          }}
        >
          <AiOutlineClose />
        </Cancel>
      </Container>
      <SideBar id="sideBar">
        <Logo1holder>
          <Logo1 src="/images/logo.png" />
        </Logo1holder>

        <Navigator2>
          <Sideiconholder2>
            <AiOutlineHome />
            <Nav2>Home</Nav2>
          </Sideiconholder2>

          <Sideiconholder2>
            <MdOutlineFeaturedPlayList />
            <Nav2>Features</Nav2>
          </Sideiconholder2>

          <Sideiconholder2>
            <MdOutlineFeaturedPlayList />
            <Nav2>Pricing</Nav2>
          </Sideiconholder2>

          <Sideiconholder2>
            <MdOutlineFeaturedPlayList />
            <Nav2>Statistics</Nav2>
          </Sideiconholder2>
        </Navigator2>
        <Logs>
          <Button2 href="https://distress-signal.herokuapp.com/signin">
            Log in
          </Button2>
          <Button3 href="https://distress-signal.herokuapp.com/signup">
            Sign up
          </Button3>
        </Logs>
      </SideBar>
    </Wrapper>
  );
};

export default Header;
const Logo1holder = styled.div`
  width: 250px;
  height: 90px;
`;

const Sideiconholder2 = styled.div`
  margin-top: 20px;
  margin-left: 4px;
  /* padding: 10px 30px; */
  height: 30px;
  width: 230px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 6px;
  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 350ms ease-in-out;
  z-index: 100;
  height: 80px;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 50px;
`;

const Text = styled.div`
  margin-left: 5px;
  font-weight: 500;
  font-size: 18px;
`;

const Navigators = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.4);
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.a`
  font-weight: 500;
  margin-right: 30px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  color: white;
  background: #0a58ed;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;
  text-decoration: none;

  :hover {
    opacity: 0.7;
  }
`;

const Button1 = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #0a58ed;
  cursor: pointer;
  transition: all 350ms;
  text-decoration: none;
  margin-right: 20px;
  :hover {
    opacity: 0.7;
  }
`;

const Menu = styled.div`
  font-size: 20px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const SideBar = styled.div`
  width: 0;
  height: 100vh;
  background: #202427;
  backdrop-filter: blur(2px);
  position: fixed;
  z-index: 1000;
  left: 0;
  border-radius: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  color: white;
  transition: all 350ms ease-in-out;
  overflow: hidden;
`;

const Navigator2 = styled.div`
  margin-top: 50px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Nav2 = styled.div`
  margin-left: 10px;
  font-size: 12px;
`;

const Logs = styled.div`
  margin-top: 50px;
  margin-left: 10px;
  text-align: center;
  /* flex: 0.3; */
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Button2 = styled.a`
  margin-top: 15px;
  /* padding: 9px 20px; */
  height: 30px;
  width: 230px;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  color: #0a58ed;
  text-decoration: none;
  font-weight: 500;
`;

const Button3 = styled.a`
  margin-top: 20px;
  height: 30px;
  width: 230px;
  /* padding: 10px 12px; */
  background: #0a58ed;
  border-radius: 3px;
  color: white;
  font-weight: 500;
  text-decoration: none;
`;

const Cancel = styled.div`
  display: none;
`;

const Logo1 = styled.img`
  height: 35px;
  object-fit: contain;
  margin-top: 35px;
  margin-left: 14px;
`;
