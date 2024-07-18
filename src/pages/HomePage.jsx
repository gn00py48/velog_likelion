import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";
import Card from "../pages/Card"; // 새로 만든 Card 컴포넌트를 가져옵니다.

const MenuBar = styled.div`
  width: 1080px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;

  .MenuLeft,
  .recent,
  .feed {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #868e96;
  }
  .trending {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
    color: black;
    font-weight: 700;
  }

  .MenuRight {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

function HomePage() {
  return (
    <>
      <MenuBar>
        <div className="MenuLeft">
          <div className="trending">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path>
            </svg>
            트렌딩
          </div>
          <div className="recent">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
              <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
            </svg>
            최신
          </div>
          <div className="feed">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <circle cx="6.18" cy="17.82" r="2.18"></circle>
              <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
            </svg>
            피드
          </div>
        </div>
        <div className="MenuRight">
          <div className="dropdown">
            <select id="timeframe" name="timeframe">
              <option value="today" selected>
                오늘
              </option>
              <option value="this_week">이번 주</option>
              <option value="this_month">이번 달</option>
              <option value="this_year">올해</option>
            </select>
          </div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>
      </MenuBar>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
        {dummy_data.map((post) => (
          <Link to={`detail/${post.postID}`} key={post.postID}>
            <Card post={post} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
