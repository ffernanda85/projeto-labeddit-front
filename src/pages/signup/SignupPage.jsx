import * as s from "./styleSignup";

export function SignupPage() {
  return (
    <s.Container>
      <s.Header>
        <s.ContainerLogo>
          <s.ImgLogo
            src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
            alt="logo-labeddit"
          />
          <s.SubTitle>Entrar</s.SubTitle>
        </s.ContainerLogo>
        <s.Title>Olá, boas vindas ao LabEddit ;)</s.Title>
      </s.Header>

      <s.ContainerForm>
        <s.Form action="#">
          <s.InputText type="text" placeholder="Apelido" value="" />
          <s.InputText type="email" placeholder="E-mail" value="" />
          <s.InputText type="text" placeholder="Senha" value="" />
         
          <s.ContainerTermContract>
            <s.TextContract>
              Ao continuar, você concorda com o nosso{" "}
              <a href="#">Contrado de usuário</a> e nossa{" "}
              <a href="#">Política de Privacidade</a>
            </s.TextContract>

            <s.InputCheck>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">
                Eu concordo em receber emails sobre coisas legais no Labeddit.
              </label>
            </s.InputCheck>
          </s.ContainerTermContract>

          <s.BtnRegister type="button" value="Cadastar" />
        </s.Form>
      </s.ContainerForm>
    </s.Container>
  );
}
