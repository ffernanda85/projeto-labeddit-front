import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/Header";
import * as s from "./styleSignup";
import { goToPosts } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";

export function SignupPage() {

  const navigate = useNavigate()
  const [form, onChange, resetForm] = useForm({ name: '', email: '', password: '' })
  
  function sendFormSignup(e) {
    e.preventDefault()
    resetForm()
    goToPosts(navigate)
  }

  return (
    <s.Container>
      <Header/>
      <s.Title>Olá, boas vindas ao LabEddit ;)</s.Title>

      <s.ContainerForm>
        <s.Form onSubmit={sendFormSignup}>
          <s.InputText
            type="text"
            placeholder="Apelido"
            name="name"
            id="name"
            value={form.name}
            onChange={onChange}
            required
          />
          <s.InputText
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <s.InputText
            type="password"
            placeholder="Senha"
            name="password"
            id="password"
            value={form.password}
            onChange={onChange}
            required
          />
         
          <s.ContainerTermContract>
            <s.TextContract>
              Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa  <span>Política de Privacidade</span>
            </s.TextContract>

            <s.InputCheck>
              <input
                type="checkbox"
                name="check"
                id="check"
                required
              />
              <label htmlFor="check">
                Eu concordo em receber emails sobre coisas legais no Labeddit.
              </label>
            </s.InputCheck>
          </s.ContainerTermContract>

          <s.BtnRegister>Cadastrar</s.BtnRegister>
        </s.Form>
      </s.ContainerForm>
    </s.Container>
  );
}
