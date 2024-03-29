import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  //NavIcon,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLinks,
  //NavItemBtn,
  //NavBtnLink
} from "./Navbar.elements";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { IconContext } from "react-icons/lib";
//import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  },[]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff " }}>
        <Nav>
          <NavbarContainer>
            <NavLogo component={Link} smooth to="#">
              DR
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <MdClose /> : <MdMenu />}
            </MenuIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks smooth to="#home">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="#aboutme">About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="#projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="#contact">Contact</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="#resume">Resume</NavLinks>
              </NavItem>
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
