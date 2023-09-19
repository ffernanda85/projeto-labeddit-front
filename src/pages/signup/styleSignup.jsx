import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  gap: 30px;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ededed;
  width: 100%;
  height: 50px;
`
export const ImgLogo = styled.img`
  width: 28.02px;
  height: 28.64px;
  position: absolute;
  left: 50%;
`;
export const SubTitle = styled.p`
  color: #4088cb;
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  position: absolute;
  right: 5%;
`;
export const Title = styled.h1`
  color: #373737;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  font-size: 2.0625rem;
  /* text-align: left; */
`;
