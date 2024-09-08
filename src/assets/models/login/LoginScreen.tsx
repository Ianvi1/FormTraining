import { ButtonComponent } from "../../components/button";
import InputComponent from "../../components/input";
import SVGlogo from "../../styles/icons/logo";
import { ContainerLoginScreen, ContainerLogoScreen, DescRegister, DescRegisterContainer, InputAreaLoginScreen, LinkRegister, TextLeftSide, TitleLoginScreen } from "../../styles/LoginScreen.styles";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
      <SVGlogo width={125} height={125}/>
      <TextLeftSide>Bem vindo ao Formulário de testes</TextLeftSide>
      </ContainerLogoScreen>
      <InputAreaLoginScreen>      
      <TitleLoginScreen>Login</TitleLoginScreen>
      <InputComponent type="text" placeholder="Usuário" icon={<UserOutlined />} />
      <InputComponent type="password" placeholder="Senha" icon={<KeyOutlined />} />
      <ButtonComponent/>
      <DescRegisterContainer>
      <DescRegister>Não possui cadastro?</DescRegister>
      <LinkRegister href="/">Cadastre-se</LinkRegister>
      </DescRegisterContainer>
      </InputAreaLoginScreen>

    </ContainerLoginScreen>

    
  )
}

export default LoginScreen;
