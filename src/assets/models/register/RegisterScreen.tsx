import { ContainerLoginScreen, ContainerLogoScreen, InputAreaLoginScreen, TextLeftSide, TitleLoginScreen } from '../../styles/LoginScreen.styles'

const RegisterScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
        <TextLeftSide>Registro de Usuário</TextLeftSide>
        <InputAreaLoginScreen>
        <TitleLoginScreen>Registre-se</TitleLoginScreen>
        </InputAreaLoginScreen>
      </ContainerLogoScreen>
    </ContainerLoginScreen>
  )
}

export default RegisterScreen
