import { useNavigate } from "react-router-dom";
import * as s from "./styledHeader";
import { goToLogin, goToPosts } from "../../routes/coordinator";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Signup Page */}
      {window.location.href.includes("signup") && (
        <s.Header>
          <s.ContainerLogo>
            <s.ImgLogo
              src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
              alt="logo-labeddit"
            />
            <s.SubTitle onClick={() => goToLogin(navigate)}>Entrar</s.SubTitle>
          </s.ContainerLogo>
        </s.Header>
      )}

      {/* Post Page */}
      {window.location.href.includes("posts") && (
        <s.Header>
          <s.ContainerLogo>
            <s.ImgLogo
              src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
              alt="logo-labeddit"
            />
            <s.SubTitle onClick={() => goToLogin(navigate)}>Logout</s.SubTitle>
          </s.ContainerLogo>
        </s.Header>
      )}

      {/* Comment Page */}
      {window.location.href.includes("comments") && (
        <s.Header>
          <s.ContainerLogo>
            <img
              onClick={() => goToPosts(navigate)}
              src="https://uploaddeimagens.com.br/images/004/617/271/full/Group_2.png?1695500039"
              alt="X"
            />

            <s.ImgLogo
              src="https://uploaddeimagens.com.br/images/004/613/727/full/Group_3_%281%29.png?1695155531"
              alt="logo-labeddit"
            />
            <s.SubTitle onClick={() => goToLogin(navigate)}>Logout</s.SubTitle>
          </s.ContainerLogo>
        </s.Header>
      )}
    </>
  );
};
