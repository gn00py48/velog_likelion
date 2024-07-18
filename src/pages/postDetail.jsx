    import React from "react";
    import styled from "styled-components";

    const Post = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    gap: 10px; 
    h1{
        font-size: 50px;

    }
    #userID{
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    #date{
        font-weight: 40;
    }
    img{
        width: 600px;
        height: 360px;
        object-fit: cover;
    }
    #post-content{
        width: 100%;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    `;

    function PostDetail({ postID, title, thumbnail, content, createdAt }) {
    return (
        <Post>
        <h1>{title}</h1>
        <div ID="userID"> 
            <p>작성자 : {postID}</p>
            <p>-</p>
            <p id="date">작성 일자 : {createdAt}</p>
        </div>
        <img src={thumbnail}/>
        <div ID="post-content">
            <p>{content}</p>
        </div>
        </Post>
    );
    }

    export default PostDetail;
