import { useState } from "react";
import { ButtonComponent } from "../../components/button";
import InputComponent from "../../components/input";
import SVGlogo from "../../styles/icons/logo";
import {
  ContainerLoginScreen,
  ContainerLogoScreen,
  InputAreaLoginScreen,
  TextLeftSide,
  TitleLoginScreen,
} from "../../styles/LoginScreen.styles";
import { UserOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";

const RegisterScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);  
  const [email, setEmail] = useState(""); 


  const validateForm = () => {
    if (user.length > 3 && password.length > 3) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleLoginClick = () => {
    validateForm();
    if (isFormValid) {

      console.log("Registro Feito, Com seus dados sendo: ", {
        user,
        password,
        email,
      });
      alert(`Registro realizado, seus dados neste registro são: Usuário: ${user}, Senha: ${password}, Email: ${email}`);
    } else {
      alert("Por favor, insira um nome de usuário com mais de 3 caracteres e uma senha com mais de 3 caracteres.");
    }
  };

  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
        <SVGlogo width={125} height={125} />
        <TextLeftSide>Registro de Testes, Crie seu usuário!</TextLeftSide>
      </ContainerLogoScreen>
      <InputAreaLoginScreen>
        <TitleLoginScreen>Registro</TitleLoginScreen>
        <InputComponent
          type="text"
          placeholder="Usuário"
          icon={<UserOutlined />}
          onUserChange={setUser}
        />
        <InputComponent
          type="password"
          placeholder="Senha"
          icon={<KeyOutlined />}
          onPasswordChange={setPassword} 
        />
        <InputComponent
          type="email"
          placeholder="Email"
          icon={<MailOutlined />}
          onPasswordChange={setEmail} 
        />
        <ButtonComponent onClick={handleLoginClick}>Registrar</ButtonComponent>
      </InputAreaLoginScreen>
    </ContainerLoginScreen>
  );
};

export default RegisterScreen;