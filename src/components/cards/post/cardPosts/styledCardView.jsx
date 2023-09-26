import styled from "styled-components";

export const ContainerPost = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  padding: 0.5625rem 0.625rem;
  gap: 1rem;
  width: 85%;
  border-radius: 12px;
  background-color: #ededed;
`;
export const UserName = styled.p`
  color: #6F6F6F;
  font-size: .75rem;
`;

export const ContentPost = styled.p`
  
`
export const ContainerLikeDislikeComments = styled.div`
  display: flex;
  gap: 1rem;
`
export const LikeDislike = styled.div`
  border: .8px solid #6F6F6F;
  border-radius: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .29rem;
  color: #6F6F6F;
  width: 98px;
  height: 27.89px;

  p {
    font-weight: 700;
    font-size: 0.5975rem;
  }

  img {
    width: 19.72px;
    height: 19.72px;
    cursor: pointer;
  }
`
export const Comments = styled.div`
  border: .8px solid #6F6F6F;
  border-radius: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
  color: #6F6F6F;
  width: 65.33px;
  height: 27.89px;

  p {
    font-weight: 700;
    font-size: 0.5975rem;
  }

  img {
    width: 19.72px;
    height: 19.72px;
  }
`