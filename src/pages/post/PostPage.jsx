import { Header } from "../../components/header/Header";
import * as s from "./stylePost";

export function PostPage() {
  return (
    <s.Container>
      <Header />
      {/* <s.Header>
        <s.ContainerLogo>
          <s.ImgLogo
            src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
            alt="logo-labeddit"
          />
          <s.SubTitle>Logout</s.SubTitle>
        </s.ContainerLogo>
      </s.Header> */}

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
