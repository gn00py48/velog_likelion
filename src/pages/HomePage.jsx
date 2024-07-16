import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { dummy_data } from "../data/dummy_data";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 320px;
  height: 400px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;

  img {
    width: 320px;
    height: 200px;
    border-bottom: 1px solid #ddd;
    object-fit: cover; 
  }

  h2 {
    font-size: 1.5em;
    margin: 10px 0;
  }

  p {
    font-size: 1em;
    color: #555;
  }

  a {
    color: blue;
    text-decoration: none;
    font-weight: bold;
  }
`;

function HomePage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "18px" }}>
      {dummy_data.map((post) => (
        <Card key={post.postID}>
          <img src={post.thumbnail} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link to={`detail/${post.postID}`}>Read more</Link>
        </Card>
      ))}
    </div>
  );
}

export default HomePage;
