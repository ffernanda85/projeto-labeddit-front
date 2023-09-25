import * as s from "./styledCardPost";

export const CardCreatePost = () => {
  return (
    <s.FormPost action="#">
      <s.ContainerMessagePost>
        <s.TextareaPost
          name="post"
          id="post"
          placeholder="Escreva seu post..."
          min='1'
          required
        ></s.TextareaPost>
        <s.BtnPost>Postar</s.BtnPost>
        <hr />
      </s.ContainerMessagePost>
    </s.FormPost>
  );
};
