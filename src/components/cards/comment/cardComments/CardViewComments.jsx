import * as s from "./styledCardCommentView";

export const CardViewComments = () => {
  return (
    <s.ContainerComment>
      <s.UserName>Enviado por: creator_id</s.UserName>

      <s.ContentComment>
        Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma
        performance melhor e evitou que eu precisasse comprar um novo.
      </s.ContentComment>
      <s.LikeDislike>
        <img
          src="https://uploaddeimagens.com.br/images/004/619/369/full/Vector.png?1695754080"
          alt="like"
        />
        <p>1.2k</p>
        <img
          src="https://uploaddeimagens.com.br/images/004/619/365/full/Vector_%281%29.png?1695754034"
          alt="dislike"
        />
      </s.LikeDislike>
    </s.ContainerComment>
  );
};
