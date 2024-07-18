    import React from "react";
    import { useParams } from "react-router-dom";
    import { dummy_data } from "../data/dummy_data";
    import PostDetail from "../pages/postDetail";

    function PostDetailPage() {
    const { postID } = useParams();
    const post = dummy_data.find((p) => p.postID === parseInt(postID, 10));

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ padding: "20px", maxWidth: "100%", margin: "auto" }}>
        <PostDetail
            postID={post.postID}
            title={post.title}
            thumbnail={post.thumbnail}
            content={post.content}
            createdAt={post.createdAt}
        />
        </div>
    );
    }

    export default PostDetailPage;
