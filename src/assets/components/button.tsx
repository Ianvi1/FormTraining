import { Flex } from 'antd';
import { ButtonStyled } from './button.styles';

interface ButtonProps {
onClick?: () => void;
children?: React.ReactNode;

}

export const ButtonComponent: React.FC<ButtonProps> = ({onClick, children}) => {
return (
<Flex gap="small" wrap>
<ButtonStyled onClick={onClick} type="primary">Entrar</ButtonStyled>
</Flex>
);

};