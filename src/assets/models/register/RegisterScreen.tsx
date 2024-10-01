import { ContainerLoginScreen, ContainerLogoScreen, InputAreaLoginScreen, TextLeftSide, TitleLoginScreen } from '../../styles/RegisterScreen.styles'
 

const RegisterScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogoScreen>
        <TextLeftSide>Registro de Usuário</TextLeftSide>
      </ContainerLogoScreen>
        <InputAreaLoginScreen>
        <TitleLoginScreen>Registre-se</TitleLoginScreen>
        </InputAreaLoginScreen>
    </ContainerLoginScreen>
  )
}

export default RegisterScreen
