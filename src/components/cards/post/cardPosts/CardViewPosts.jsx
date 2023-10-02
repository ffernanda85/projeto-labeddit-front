import { useNavigate } from "react-router-dom";
import * as s from "./styledCardView";
import { goToComments } from "../../../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import LikeImage from "../../../../assets/like_dislike/up.svg"
import DislikeImage from "../../../../assets/like_dislike/down.svg"

export const CardViewPosts = ({ post }) => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  return (
    <s.ContainerPost>
      <s.UserName>Enviado por: {post.creator.name}</s.UserName>

      <s.ContentPost>{post.content}</s.ContentPost>

      <s.ContainerLikeDislikeComments>
        <s.LikeDislike>
          <s.Like
            src={LikeImage}
            alt="like"
            onClick={async () => await context.likeDislikePost(true, post.id)}
          />

          <p>{post.likes - post.dislikes}</p>

          <s.Dislike
            src={DislikeImage}
            alt="dislike"
            onClick={async () => await context.likeDislikePost(false, post.id)}
          />
        </s.LikeDislike>

        <s.Comments>
          <img
            src="https://uploaddeimagens.com.br/images/004/619/362/full/fluent_comment-20-regular.png?1695753984"
            alt="comment"
            onClick={() => goToComments(navigate)}
          />
          <p>{post.comments}</p>
        </s.Comments>
      </s.ContainerLikeDislikeComments>
    </s.ContainerPost>
  );
};
