import styled from 'styled-components';
import { Button as AntdButton,} from 'antd';

export const ButtonStyled = styled(AntdButton)`
border-radius: 24px !important;
width: 180px;
height: 42px;
text-transform: uppercase;
font-family: 'Poppins';
background-color: #2c272b !important;
&:hover{
background-color: #8f8f8f!important;

}

`;