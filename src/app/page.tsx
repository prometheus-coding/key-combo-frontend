"use client";

import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import styled from "styled-components";
// debugger
import "./globals.css";

const BgImg = styled.div`
  background-image: url("/images/wallpapersden.com_happiest-anime-girl-hd-ai-art_1952x1120.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

const DisplayNone = styled.div`
  display: none;
`;

export default function Home() {
  return (
    <BgImg>
      <Header />
      <Register />
      <DisplayNone>
        <Login />
      </DisplayNone>
    </BgImg>
  );
}
