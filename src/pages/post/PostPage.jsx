import { CardCreatePost } from "../../components/cards/post/cardCreatePost/CardCreatePost";
import { CardViewPosts } from "../../components/cards/post/cardPosts/CardViewPosts";
import { Header } from "../../components/header/Header";
import * as s from "./stylePost";

export function PostPage() {
  return (
    <s.Container>
      <Header />
      < CardCreatePost />
      < CardViewPosts />
    </s.Container>
  );
}
