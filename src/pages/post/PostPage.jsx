import { useContext, useEffect, useState } from "react";
import { CardCreatePost } from "../../components/cards/post/cardCreatePost/CardCreatePost";
import { CardViewPosts } from "../../components/cards/post/cardPosts/CardViewPosts";
import { Header } from "../../components/header/Header";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hooks/useForm";
import * as s from "./stylePost";

export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [form, onChange, resetForm] = useForm({ content: '' })
  const context = useContext(GlobalContext);
  
  async function sendPost(e) {
    e.preventDefault()
    await context.createPostAPI(form)
    resetForm()
  }

  async function showPosts() {
    const result = await context.getPosts();
    setPosts(result.data);
  }

  useEffect(() => {
    showPosts();
  }, [context.reload, context]);

  return (
    <s.Container>
      <Header />
      <CardCreatePost sendPost={sendPost} onChange={onChange} form={form} />
      {
        posts?.map((post) =>
          <CardViewPosts key={post.id} post={post} />
        )
      }
    </s.Container>
  );
}
