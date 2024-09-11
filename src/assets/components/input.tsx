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
}


const InputComponent = ({ icon, type = 'text', placeholder, margin, user, ...props }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userValue, setUserValue] = useState(''); 
  const [passwordValue, setPasswordValue] = useState('');  
  const [isFormValid, setIsFormValid] = useState(false);
  
  const validateForm = () => {
    if (userValue.length > 3 && passwordValue.length > 6) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [userValue, passwordValue]);

  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Enviando dados:', { userValue, passwordValue });
      alert('Dados enviados com sucesso!');
    } else {
      alert('Por favor, preencha corretamente o formulário.');
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          type === 'text' ? setUserValue(e.target.value) : setPasswordValue(e.target.value)
        }
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