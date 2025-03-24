import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import ChapterBox from "./ChapterBox";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const { chapter, isChapterLoading } = useGlobalContext();
  const { DefaultLanguage } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState("");  // ✅ Added search query state

  useEffect(() => {
    setChapters(chapter);
  }, [chapter]);


  const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  // ✅ Search handler function
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // ✅ Filter chapters based on the search query
  const filteredChapters = chapters.filter((item) =>
    normalizeText(item.name_transliterated).includes(normalizeText(searchQuery))
  );

  return (
    <Wrapper className="relative" id="chapters">

      {/* ✅ Add Navbar with onSearch prop */}
      <Navbar onSearch={handleSearch} />

      <div className="chapter-container m-auto">
        <div className="wrapper flex flex-col justify-center">

          {/* Title */}
          <div className="title mb-10">
            <h1>Chapters of the Bhagavad Gita</h1>
          </div>

          {/* Chapters */}
          {isChapterLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <div className="grid gap-3 md:grid-cols-2 chapter-list">
              {filteredChapters.length > 0 ? (
                filteredChapters.map((item) => (
                  <ChapterBox
                    id={item.id}
                    key={item.id}
                    heading={item.name_transliterated}
                    meaning={item.name_meaning}
                    desc={DefaultLanguage === "english" ? item.chapter_summary : item.chapter_summary_hindi}
                  />
                ))
              ) : (
                <p>No Shlokas found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Chapters;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;

  .title {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    margin-top: 2rem;
  }

  .title h1 {
    font-size: 3rem;
    font-weight: 800;
    color: #d4af37;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    background: linear-gradient(to right, #d4af37, #d4af37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title h1::after {
    content: "";
    width: 80px;
    height: 5px;
    background: #f97316;
    display: block;
    margin: 10px auto 0;
    border-radius: 5px;
  }

  .chapter-container {
    margin-top: 40px;
  }

  @media (min-width: 1175px) {
    .chapter-container {
      padding: 60px 8rem;
    }
  }

  @media (max-width: 1175px) {
    .chapter-container {
      padding: 60px 3rem;
    }
  }
`;
