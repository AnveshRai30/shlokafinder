import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChapterBox = ({ id, heading, meaning, desc }) => {
  let navigate = useNavigate();

  const  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const OpenChapter = (id) => {
    navigate(`/chapter/${id}`);
    scrollToTop();
  };

  return (
    <Wrapper className="chapter" onClick={() => OpenChapter(id)} >
      <div className="chapter-box">
        <img src={`/images/${id}.jpg`} alt={`Chapter ${id}`} className="chapter-image" />
        <div className="chapter-content">
          <h5>Chapter {id}</h5>
          <h4>{heading}</h4>
          <span>{meaning}</span>
          <p>{desc}</p>
          <div className="button">READ MORE</div>
        </div>
      </div>

    </Wrapper>
  );
};

export default ChapterBox;

const Wrapper = styled.div`

.chapter-box {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.1); /* Light transparency */
  backdrop-filter: blur(8px); /* Glass effect */
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15); /* Soft shadow */
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.chapter-box:hover {
  transform: translateY(-5px); /* Lifts box slightly */
  box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.25); /* Stronger hover shadow */
}

.chapter-image {
  width: 100%;
  height: 250px; /* Slightly taller */
  object-fit: contain; /* Ensures better image fitting */
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
}

.chapter-box:hover .chapter-image {
  transform: scale(1.05); /* Subtle zoom-in effect */
}

.chapter-content {
  padding: 15px;
  text-align: center;
}

.chapter-content h5 {
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 700;
  color: #f97316;
}

.chapter-content h4 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #333;
}

.chapter-content span {
  font-size: 0.95rem;
  font-weight: 500;
  color: #666;
}

.chapter-content p {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.chapter-content p::after {
  content: " Click to read more";
  color: #f97316;
  font-weight: bold;
  cursor: pointer;
}

.button {
  margin-top: 12px;
  padding: 10px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  background: linear-gradient(to right, #f97316, #ea580c); /* Gradient button */
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background: linear-gradient(to right, #ea580c, #c2410c);
  transform: scale(1.05);
}



  










`;
