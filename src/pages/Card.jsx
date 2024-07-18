    import React from "react";
    import styled from "styled-components";

    const CardWrapper = styled.div`
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

    function Card({ post }) {
    return (
        <CardWrapper>
        <img src={post.thumbnail} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        </CardWrapper>
    );
    }

    export default Card;
