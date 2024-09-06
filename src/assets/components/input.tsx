import { BoxInput, InputStyled } from './input.styles';

interface InputProps {
  icon?: React.ReactNode;
  user?: string;
  placeholder?: string;
  margin?: string;

}


const InputComponent = ({icon, placeholder, margin, user,  ...props}: InputProps) => {
  return (
    <BoxInput  margin={margin}>
      <InputStyled  size="large" placeholder={placeholder} {...props} prefix={icon} />
      </BoxInput>
  )
}

export default InputComponent;

