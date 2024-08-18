"use client"; // serve questa cosa per farfuznioanre react su lato client che sul serer!!

import React from "react";
import styled from "styled-components";
// debugger
import "./global.css";

const Navbar = styled.nav`
  color: white;
`;
const NavbarBackgroundImage = styled.div`
  background-image: url("/images/wallpapersden.com_happiest-anime-girl-hd-ai-art_1952x1120.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.45);
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: calc(100% / 3);
  padding-left: 40px;
`;

const NavbarLogoContainer = styled.div`
  width: calc(100% / 3);
  display: flex;
  justify-content: center;
`;

const NavbarUserContainer = styled.div`
  display: flex;
  width: calc(100% / 3);
  justify-content: end;
  padding-right: 10px;
  gap: 5px;
`;

const Header = () => {
  return (
    <Navbar>
      <NavbarBackgroundImage>
        <NavbarContainer>
          <NavbarLinks>
            <div>Home</div>
            <div>Leaderboard</div>
            <div>Community</div>
            <div>Info</div>
          </NavbarLinks>
          <NavbarLogoContainer>
            <img src="" alt="logo" />
          </NavbarLogoContainer>
          <NavbarUserContainer>
            <div>User</div>
            <div>
              <img
                src=""
                alt="profile"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              />
            </div>
          </NavbarUserContainer>
        </NavbarContainer>
      </NavbarBackgroundImage>
    </Navbar>
  );
};

export default Header;
