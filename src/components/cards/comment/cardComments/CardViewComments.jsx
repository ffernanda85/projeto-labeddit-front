import * as s from "./styledCardCommentView";

export const CardViewComments = ({ comment }) => {

  return (
    <s.ContainerComment>
      <s.UserName>Enviado por: { comment.creator.name }</s.UserName>

      <s.ContentComment>
        {comment.content}
      </s.ContentComment>
      <s.LikeDislike>
        <img
          src="https://uploaddeimagens.com.br/images/004/619/369/full/Vector.png?1695754080"
          alt="like"
        />
        <p>{ comment.likes - comment.dislikes }</p>
        <img
          src="https://uploaddeimagens.com.br/images/004/619/365/full/Vector_%281%29.png?1695754034"
          alt="dislike"
        />
      </s.LikeDislike>
    </s.ContainerComment>
  );
};
