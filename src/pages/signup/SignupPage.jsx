import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import * as s from "./styleSignup";
import { goToPosts } from "../../routes/coordinator";

export function SignupPage() {

  const navigate = useNavigate()

  return (
    <s.Container>
      <Header/>
      <s.Title>Olá, boas vindas ao LabEddit ;)</s.Title>

      <s.ContainerForm>
        <s.Form action="#">
          <s.InputText type="text" placeholder="Apelido" />
          <s.InputText type="email" placeholder="E-mail" />
          <s.InputText type="text" placeholder="Senha" />
         
          <s.ContainerTermContract>
            <s.TextContract>
              Ao continuar, você concorda com o nosso <a href="#">Contrado de usuário</a> e nossa  <a href="#">Política de Privacidade</a>
            </s.TextContract>

            <s.InputCheck>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">
                Eu concordo em receber emails sobre coisas legais no Labeddit.
              </label>
            </s.InputCheck>
          </s.ContainerTermContract>

          <s.BtnRegister type="button" value="Cadastar" onClick={() => goToPosts(navigate)} />
        </s.Form>
      </s.ContainerForm>
    </s.Container>
  );
}
