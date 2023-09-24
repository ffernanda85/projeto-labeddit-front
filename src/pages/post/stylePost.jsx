import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`
export const ContainerPost = styled.section`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;

    hr {
        border: 1px solid #F9B24E;
        margin: 1.2rem 0 2rem 0;
    }
`
export const TextareaPost = styled.textarea`
    border: none;
    border-radius: 12px;
    height: 131px;
    background-color: #EDEDED;
    padding: 1rem 0 0 1rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
`

export const BtnPost = styled.input`
  border: none;
  border-radius: 12px;
  height: 47px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);  
`;
