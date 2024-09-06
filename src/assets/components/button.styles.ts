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

export const ButtonEye = styled.button`
display: flex;
align-items: center;
justify-content: center;
outline: none;
border: none;
cursor: pointer;
padding: 0;
background: none;
position:absolute;
right: -35px;
height: 100%;
`;