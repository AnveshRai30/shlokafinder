import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";

const VerseOfTheDay = ({ id, desc, chapter, verse }) => {
  const { DefaultLanguage } = useGlobalContext();

  return (
    <Wrapper className="flex justify-center items-center mt-14 md:-mt-32">
      {/* <div className="flex quote-of-day">
        <div className="container-box flex flex-col md:flex-row">
          <div className="bg-container">
            <div className="bg-wrapper"></div>
          </div>
          <div className="flex flex-col p-10 md:justify-center w-full md:w-11/12">
            <div className="title flex flex-col md:flex-row items-center mb-3">
              <div className="heading mb-5 md:mb-0 mr-4 flex justify-center">
                <h5 className="mb-0 font-semibold text-orange-500">
                  {`Verse of the day - BG ${chapter}.${verse}`}
                </h5>
              </div>
              <span className="divider mb-0 w-full md:w-6/12 lg:w-7/12 h-0.5"></span>
            </div>
            <div className="description text-center md:text-left">
              <>
                {desc.length !== 0
                  ? desc.map((item) => {
                      return DefaultLanguage === "hindi" &&
                        item.language === "hindi" &&
                        item.author_name === "Swami Tejomayananda" ? (
                        <p key={item.id} className="text-gray-500 truncate whitespace-normal">
                          {item.description}
                        </p>
                      ) : DefaultLanguage === "english" &&
                        item.language === "english" &&
                        item.author_name === "Swami Adidevananda" ? (
                        <p key={item.id} className="text-gray-500 truncate whitespace-normal">
                          {item.description}
                        </p>
                      ) : (
                        <React.Fragment key={item.id} />
                      );
                    })
                  : ""}
              </>
            </div>
            <div className="button text-center md:text-left font-semibold text-sm cursor-pointer mt-2">
              <Link to={`/chapter/${chapter}/slok/${verse}`}>SEE MORE</Link>
            </div>
          </div>
        </div>
      </div> */}
    </Wrapper>
  );
};

export default VerseOfTheDay;

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  z-index: 80;
`;
