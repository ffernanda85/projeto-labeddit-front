import * as s from "./styledLogin";

export const LoginPage = () => {
  return (
    <s.Container>
      <s.Header>
        <s.ImgLabeddit
          src="https://uploaddeimagens.com.br/images/004/608/125/full/Group_1.png?1694777008"
          alt="LabEddit"
        />
        <s.TextHeader>O projeto de rede social da Labenu</s.TextHeader>
      </s.Header>
      <s.ContainerContent>
        <s.Form action="#">
          <s.InputText type="text" placeholder="E-mail" />
          <s.InputText type="text" placeholder="Senha" />
          <s.BtnInput type="button" value="Continuar" />
          <hr />
        </s.Form>
        <s.BtnToGoToSignup>Crie uma conta!</s.BtnToGoToSignup>
      </s.ContainerContent>
    </s.Container>
  );
};
