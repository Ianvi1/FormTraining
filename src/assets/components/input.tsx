import { Input as InputStrings} from 'antd';
import { BoxInput } from './input.styles';

interface InputProps {
  icon?: React.ReactNode;
  user?: string;
  margin?: string;
}

const InputComponent = ({margin, icon, user,  ...props}: InputProps) => {
  return (
    <BoxInput>
      <InputStrings {...props} prefix={icon} />
    </BoxInput>
  )
}

export default InputComponent;