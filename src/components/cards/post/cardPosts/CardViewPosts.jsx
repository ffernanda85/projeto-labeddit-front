import { useNavigate } from "react-router-dom";
import * as s from "./styledCardView";
import { goToComments } from "../../../../routes/coordinator";

export const CardViewPosts = ({ post }) => {

  const navigate = useNavigate()

  return (
    <s.ContainerPost>
      <s.UserName>Enviado por: {post.creator.name}</s.UserName>
      
      <s.ContentPost>
        {post.content}
      </s.ContentPost>
      
      <s.ContainerLikeDislikeComments>
        <s.LikeDislike>
          <img src="https://uploaddeimagens.com.br/images/004/619/369/full/Vector.png?1695754080" alt="like" />
          <p>{post.likes - post.dislikes}</p>
          <img src="https://uploaddeimagens.com.br/images/004/619/365/full/Vector_%281%29.png?1695754034" alt="dislike" />
        </s.LikeDislike>
        
        <s.Comments>
          <img src="https://uploaddeimagens.com.br/images/004/619/362/full/fluent_comment-20-regular.png?1695753984" alt="comment" onClick={()=> goToComments(navigate)} />
          <p>{post.comments}</p>
        </s.Comments>
      </s.ContainerLikeDislikeComments>
    
    </s.ContainerPost>
  );
};
