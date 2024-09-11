import { BoxInput, InputStyled } from './input.styles';
import { useState, useEffect } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { ButtonEye } from './button.styles';

interface InputProps {
  icon?: React.ReactNode;
  user?: string;
  placeholder?: string;
  margin?: string;
  type?: string;
  showPassword?: boolean;
  onUserChange?: (value: string) => void;
  onPasswordChange?: (value: string) => void;
}

const InputComponent = ({ icon, type = 'text', placeholder, margin, user, onUserChange, onPasswordChange, ...props }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (type === 'text' && onUserChange) {
      onUserChange(value);  // Passando o valor do usuário para o pai
    } else if (type === 'password' && onPasswordChange) {
      onPasswordChange(value);  // Passando o valor da senha para o pai
    }
  };

  const inputType = type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <BoxInput margin={margin}>
      <InputStyled
        size="large"
        placeholder={placeholder}
        {...props}
        prefix={icon}
        type={inputType}
        onChange={handleInputChange}
      />
      {type === 'password' && (
        <ButtonEye onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </ButtonEye>
      )}
    </BoxInput>
  );
};

export default InputComponent;