import SVGlogo from "../../styles/icons/logo";
import { ContainerLoginScreen, InputAreaLoginScreen, TitleLoginScreen } from "../../styles/LoginScreen";

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <SVGlogo width={250} height={250}/>
      <InputAreaLoginScreen>      
      <TitleLoginScreen>Login</TitleLoginScreen>
      </InputAreaLoginScreen>
    </ContainerLoginScreen>

    
  )
}

export default LoginScreen;
