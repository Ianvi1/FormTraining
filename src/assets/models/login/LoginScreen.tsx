import InputComponent from "../../components/input";
import SVGlogo from "../../styles/icons/logo";
import { ContainerLoginScreen, ContainerLogoScreen, InputAreaLoginScreen, TitleLoginScreen } from "../../styles/LoginScreen.styles";
import { UserOutlined, MailOutlined, KeyOutlined } from '@ant-design/icons';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
      <SVGlogo width={125} height={125}/>
      </ContainerLogoScreen>
      <InputAreaLoginScreen>      
      <TitleLoginScreen>Login</TitleLoginScreen>
      <InputComponent placeholder="Email" icon={<MailOutlined/>} />
      <InputComponent placeholder="Usuário" icon={<UserOutlined/>}/>
      <InputComponent placeholder="Senha" icon={<KeyOutlined/>}/>
      </InputAreaLoginScreen>
    </ContainerLoginScreen>

    
  )
}

export default LoginScreen;
