import { useNavigate } from "react-router-dom";
import * as s from "./styledLogin";
import { goToPosts, goToSignup } from "../../routes/coordinator";

export const LoginPage = () => {

  const navigate = useNavigate()

  return (
    <s.Container>
      <s.HeaderLogin>
        <s.ImgLabeddit
          src="https://uploaddeimagens.com.br/images/004/608/125/full/Group_1.png?1694777008"
          alt="LabEddit"
        />
        <s.TextHeader>O projeto de rede social da Labenu</s.TextHeader>
      </s.HeaderLogin>
      <s.ContainerContent>
        <s.Form action="#">
          <s.InputText type="text" placeholder="E-mail" />
          <s.InputText type="text" placeholder="Senha" />
          <s.BtnInput type="button" value="Continuar" onClick={() => goToPosts(navigate)} />
          <hr />
        </s.Form>
        <s.BtnToGoToSignup onClick={() => goToSignup(navigate) }>Crie uma conta!</s.BtnToGoToSignup>
      </s.ContainerContent>
    </s.Container>
  );
};
