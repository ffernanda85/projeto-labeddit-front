import { useState } from "react";
import { CardCreatePost } from "../../components/cards/post/cardCreatePost/CardCreatePost";
import { CardViewPosts } from "../../components/cards/post/cardPosts/CardViewPosts";
import { Header } from "../../components/header/Header";
import * as s from "./stylePost";

export function PostPage() {
  const [posts, setPosts] = useState([])

  function showPosts() {
    
  }

  return (
    <s.Container>
      <Header />
      < CardCreatePost />
      {
        posts.map(post => {
          < CardViewPosts key={post.id} post={post} />
        })
      }
    </s.Container>
  );
}
