import { Header } from "../../components/header/Header";
import * as s from "./stylePost";

export function PostPage() {
  return (
    <s.Container>
      <Header />
      <s.ContainerPost>
        <s.Form action="#">
          <s.TextareaPost
            name="post"
            id="post"
            placeholder="Escreva seu post..."
          ></s.TextareaPost>
          <s.BtnPost type="button" value="Postar" />
          <hr />
        </s.Form>
      </s.ContainerPost>
    </s.Container>
  );
}
