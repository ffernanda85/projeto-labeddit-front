import * as s from "./styledCardCreateComment"

export const CardCreateComment = () => {
    return (
        <s.FormComment action="#">
          <s.ContainerMessageComment>
            <s.TextareaComment
              name="comment"
              id="comment"
              placeholder="Adicionar comentário"
              min='1'
              required
            ></s.TextareaComment>
            <s.BtnComment>Responder</s.BtnComment>
            <hr />
          </s.ContainerMessageComment>
        </s.FormComment>
      );
}