import { CardViewComments } from "../../components/cards/comment/cardComments/CardViewComments";
import { CardCreateComment } from "../../components/cards/comment/cardCreateComment/CardCreateComment";
import { CardViewPosts } from "../../components/cards/post/cardPosts/CardViewPosts";
import { Header } from "../../components/header/Header";
import * as s from "./styleCommentPage";

export function CommentPage() {
  return (
    <s.Container>
      <Header />
      <CardViewPosts />
      <CardCreateComment />
      <CardViewComments />
    </s.Container>
  );
}
