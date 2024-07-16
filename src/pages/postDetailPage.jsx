    import React from "react";
    import { useParams } from "react-router-dom";
    import styled from "styled-components"; // styled-components import 추가
    import { dummy_data } from "../data/dummy_data";

    const Post = styled.div`
    width: 1080px;
    display: flex;
    flex-direction: column; /* 추가: 스타일을 더 명확하게 하기 위해 */
    gap: 10px; /* 추가: 요소 간 간격 추가 */
    `;

    function PostDetailPage() {
    const { postID } = useParams();
    const post = dummy_data.find((p) => p.postID === parseInt(postID, 10));

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <Post>
            <h1>{post.title}</h1>
            <img src={post.thumbnail} alt={post.title} style={{ width: "100%" }} />
            <p>{post.content}</p>
            <p>작성일: {post.createdAt}</p>
        </Post>
        </div>
    );
    }

    export default PostDetailPage;
