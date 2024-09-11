import { useState } from "react";
import { ButtonComponent } from "../../components/button";
import InputComponent from "../../components/input";
import SVGlogo from "../../styles/icons/logo";
import {
  ContainerLoginScreen,
  ContainerLogoScreen,
  DescRegister,
  DescRegisterContainer,
  InputAreaLoginScreen,
  LinkRegister,
  TextLeftSide,
  TitleLoginScreen,
} from "../../styles/LoginScreen.styles";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if (user.length > 3 && password.length > 6) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleLoginClick = () => {
    validateForm();
    if (isFormValid) {
      // Simulação de envio dos dados de login
      console.log("Formulário válido. Dados do usuário:", {
        user,
        password,
      });
      alert(`Usuário: ${user}, Senha: ${password}`);
    } else {
      alert("Por favor, insira um nome de usuário com mais de 3 caracteres e uma senha com mais de 6 caracteres.");
    }
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
        <SVGlogo width={125} height={125} />
        <TextLeftSide>Bem vindo ao Formulário de testes</TextLeftSide>
      </ContainerLogoScreen>
      <InputAreaLoginScreen>
        <TitleLoginScreen>Login</TitleLoginScreen>
        <InputComponent
          type="text"
          placeholder="Usuário"
          icon={<UserOutlined />}
          onUserChange={setUser} // Atualiza o estado de usuário
        />
        <InputComponent
          type="password"
          placeholder="Senha"
          icon={<KeyOutlined />}
          onPasswordChange={setPassword} // Atualiza o estado de senha
        />
        <ButtonComponent onClick={handleLoginClick}>Login</ButtonComponent>
        <DescRegisterContainer>
          <DescRegister>Não possui cadastro?</DescRegister>
          <LinkRegister href="/">Cadastre-se</LinkRegister>
        </DescRegisterContainer>
      </InputAreaLoginScreen>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;