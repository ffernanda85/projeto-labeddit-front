import { CardCreatePost } from "../../components/cards/post/CardCreatePost";
import { Header } from "../../components/header/Header";
import * as s from "./stylePost";

export function PostPage() {
  return (
    <s.Container>
      <Header />
      < CardCreatePost/>
    </s.Container>
  );
}
