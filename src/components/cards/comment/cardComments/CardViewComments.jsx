import { useContext } from "react";
import * as s from "./styledCardCommentView";
import { GlobalContext } from "../../../../context/GlobalContext";

export const CardViewComments = ({ comment }) => {

  const context = useContext(GlobalContext)

  return (
    <s.ContainerComment>
      <s.UserName>Enviado por: { comment.creator.name }</s.UserName>

      <s.ContentComment>
        {comment.content}
      </s.ContentComment>
      <s.LikeDislike>
        <s.Like onClick={async () => await context.likeDislikeComment(comment.id, true)}
          src="https://uploaddeimagens.com.br/images/004/619/369/full/Vector.png?1695754080"
          alt="like"
        />
        <p>{ comment.likes - comment.dislikes }</p>
        
        <s.Dislike onClick={async () => await context.likeDislikeComment(comment.id, false)}
          src="https://uploaddeimagens.com.br/images/004/619/365/full/Vector_%281%29.png?1695754034"
          alt="dislike"
        />
      </s.LikeDislike>
    </s.ContainerComment>
  );
};
