import React from "react";
import styled from "styled-components";
import { FaLeaf, FaHeart, FaLightbulb, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <Wrapper id="about" className="py-20 flex justify-center">
      <div className="custom-container flex flex-col lg:flex-row items-center">

        {/* Left Side - Image */}
        <div className="image-container w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/11.jpg"
            alt="Bhagavad Gita"
            className="rounded-lg shadow-xl w-3/4 lg:h-[500px] object-cover transition-transform transform hover:scale-105"
          />
        </div>

        {/* Right Side - Content */}
        <div className="content w-full lg:w-1/2 px-6 lg:px-12">
          <h3 className="text-orange-500 text-3xl font-bold tracking-wide uppercase">
            About
          </h3>
          <h2 className="text-gray-700 text-5xl font-extrabold mt-2 bg-gradient-to-r from-orange-600 to-yellow-400 text-transparent bg-clip-text">
            Bhagavad Gita & Its Shlokas
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            The <strong>Bhagavad Gita</strong> is a 700-verse scripture that imparts
            profound wisdom on life, duty, and spirituality. Each Shloka is a
            timeless lesson guiding individuals on their spiritual journey.
          </p>

          {/* Types of Shlokas */}
          <div className="shloka-section mt-8">
            <h3 className="section-heading">Different Types of Shlokas</h3>
            <ul className="shloka-list">
              <li><FaLeaf className="icon green" /> <strong>Karma Shlokas:</strong> Path of selfless action.</li>
              <li><FaHeart className="icon red" /> <strong>Bhakti Shlokas:</strong> Devotion and surrender.</li>
              <li><FaLightbulb className="icon yellow" /> <strong>Jnana Shlokas:</strong> Knowledge and wisdom.</li>
              <li><FaStar className="icon purple" /> <strong>Raja Yoga Shlokas:</strong> Meditation and discipline.</li>
            </ul>
          </div>

          {/* Significance of Shlokas */}
          <div className="significance mt-8">
            <h3 className="section-heading">Significance of Key Shlokas</h3>
            <ul className="shloka-list">
              <li><FaStar className="icon gold" /> <strong>2.47 (Karma Yoga):</strong> Act without attachment to results.</li>
              <li><FaStar className="icon gold" /> <strong>4.7-4.8:</strong> Krishna's promise to restore dharma.</li>
              <li><FaStar className="icon gold" /> <strong>18.66:</strong> Surrendering to the divine.</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  .custom-container {
    max-width: 1200px;
    padding: 0 2rem;
  }

  .image-container img {
    height: 500px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  .image-container img:hover {
    transform: scale(1.08);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
  }

  .section-heading {
    font-size: 1.8rem;
    font-weight: 700;
    color: #444;
    background: linear-gradient(to right, #f97316, #facc15);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .shloka-list {
    margin-top: 10px;
    padding-left: 0;
    list-style: none;
  }

  .shloka-list li {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
  }

  .icon {
    font-size: 1.3rem;
    margin-right: 10px;
  }

  .green { color: #16a34a; }
  .red { color: #dc2626; }
  .yellow { color: #facc15; }
  .purple { color: #9333ea; }
  .gold { color: #f59e0b; }
`;
