"use client";

import Header from "./components/Header";
import Main from "./components/Main";
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

export default function Home() {
  return (
    <main>
      <BgImg>
        <Header />
        <Main />
      </BgImg>
    </main>
  );
}
