import { BoxInput, InputStyled } from './input.styles';
import { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { ButtonEye } from './button.styles';

interface InputProps {
  icon?: React.ReactNode;
  user?: string;
  placeholder?: string;
  margin?: string;
  type?: string;
  showPassword?: boolean;
}


const InputComponent = ({ icon, type = 'text', placeholder, margin, user, ...props }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <BoxInput margin={margin}>
      <InputStyled
        size="large"
        placeholder={placeholder}
        {...props}
        prefix={icon}
        type={inputType}  
      />
      {type === 'password' && (
     
        <ButtonEye onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <EyeOutlined/> : <EyeInvisibleOutlined />}
       </ButtonEye>     
        
      )}
    </BoxInput>
  );
};

export default InputComponent;