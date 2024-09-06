import { ButtonComponent } from "../../components/button";
import InputComponent from "../../components/input";
import SVGlogo from "../../styles/icons/logo";
import { ContainerLoginScreen, ContainerLogoScreen, DescRegister, DescRegisterContainer, InputAreaLoginScreen, LinkRegister, TitleLoginScreen } from "../../styles/LoginScreen.styles";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
      <SVGlogo width={125} height={125}/>
      </ContainerLogoScreen>
      <InputAreaLoginScreen>      
      <TitleLoginScreen>Login</TitleLoginScreen>
      <InputComponent type="text" placeholder="Usuário" icon={<UserOutlined />} />
      <InputComponent type="password" placeholder="Senha" icon={<KeyOutlined />} />
      <ButtonComponent/>
      <DescRegisterContainer>
      <DescRegister>Não Possui Cadastro?</DescRegister>
      <LinkRegister href="/">Cadastre-se</LinkRegister>
      </DescRegisterContainer>
      </InputAreaLoginScreen>

    </ContainerLoginScreen>

    
  )
}

export default LoginScreen;
