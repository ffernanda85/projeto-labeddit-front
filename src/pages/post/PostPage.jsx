import { useContext, useEffect, useState } from "react";
import { CardCreatePost } from "../../components/cards/post/cardCreatePost/CardCreatePost";
import { CardViewPosts } from "../../components/cards/post/cardPosts/CardViewPosts";
import { Header } from "../../components/header/Header";
import * as s from "./stylePost";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import { BASE_URL } from "../../constants/constants";

export function PostPage() {
  const [posts, setPosts] = useState([]);
  const context = useContext(GlobalContext);

  async function showPosts() {
    const token = context.getToken();
    const PATH = BASE_URL + "/posts";
    const headers = { headers: { Authorization: token } };
    const result = await axios.get(PATH, headers);
    setPosts(result.data);
  }

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <s.Container>
      <Header />
      <CardCreatePost />
      {
        posts?.map((post) =>
          <CardViewPosts key={post.id} post={post} />
        )
      }
    </s.Container>
  );
}
