import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import VerseOfTheDay from "./VerseOfTheDay";
import { Link } from "react-scroll";

const HeroSection = () => {
  const { slok } = useGlobalContext();
  return (
    <>
      <Wrapper>
        <div className="hero-content">
          <h1>Unlock the Wisdom of the Shlokas</h1>
          <h2>Ancient Knowledge, Modern Insights</h2>
          
        </div>
      </Wrapper>
      <VerseOfTheDay
        id={slok.length !== 0 ? slok[0].id : ""}
        desc={slok.length !== 0 ? slok[0].translations : ""}
        chapter={slok.length !== 0 ? slok[0].chapter_number : ""}
        verse={slok.length !== 0 ? slok[0].verse_number : ""}
      />
    </>
  );
};

export default HeroSection;

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("/images/bg5.jpg");
  background-size: cover;
  background-position: center;
  color: #FF9933;
  
  .hero-content {
    max-width: 800px;
    padding: 20px;
  }
  
  h1 {
  font-size: 4rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  margin-bottom: 10px;
  margin-left: 175px; /* Adjust this value as needed */
}

  
  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    color: white;
    margin-bottom: 30px;
    margin-left: 175px;
  }
  
  .explore-btn {
    display: inline-block;
    padding: 12px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    background: #f97316;
    border-radius: 25px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .explore-btn:hover {
    background: #ea580c;
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
