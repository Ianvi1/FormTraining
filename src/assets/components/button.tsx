import { Flex } from 'antd';
import { ButtonStyled } from './button.styles';

export const ButtonComponent = () => {
return (
<Flex gap="small" wrap>
<ButtonStyled type="primary">Entrar</ButtonStyled>
</Flex>
);

};