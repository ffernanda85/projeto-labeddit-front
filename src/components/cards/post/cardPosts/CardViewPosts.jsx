import { useNavigate, useParams } from "react-router-dom";
import * as s from "./styledCardView";
import { goToComments } from "../../../../routes/coordinator";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";


export const CardViewPosts = ({ post }) => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  let status = 'base'
  
  return (
    <s.ContainerPost>
      <s.UserName>Enviado por: {post.creator.name}</s.UserName>

      <s.ContentPost>{post.content}</s.ContentPost>

      <s.ContainerLikeDislikeComments>
        <s.LikeDislike>
          <s.Like 
            onClick={async () => await context.likeDislikePost(true, post.id)}
          ></s.Like>

          <p>{post.likes - post.dislikes}</p>

          <s.Dislike
            onClick={ async () => await context.likeDislikePost(false, post.id)}
          ></s.Dislike>
        </s.LikeDislike>

        <s.Comments onClick={() => {
          context.setPostSelected(post)
          goToComments(navigate, post.id)
        }}>
          <s.CommentBtn
            src="https://uploaddeimagens.com.br/images/004/619/362/full/fluent_comment-20-regular.png?1695753984"
            alt="comment"
          />
          <p>{post.comments}</p>
        </s.Comments>
      </s.ContainerLikeDislikeComments>
    </s.ContainerPost>
  );
};
