import styled from "styled-components";

export const ContainerLoginScreen = styled.div`
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  background-color: #141013;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogoScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1D191B;
  width: 400px;
  height: 500px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  flex-direction: column;


`

export const TitleLoginScreen = styled.div`
  color: #111222;
  font-size: 32px;
  font-family: 'Poppins';
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  top: -40px;
`;

export const InputAreaLoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  background-color: #FFF;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const LinkRegister = styled.a`
  font-family: 'Poppins';
  color: #bababa;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  margin-left: 8px; 

  &:hover {
    color: #d99607;
    text-decoration: underline;
  }

  &:active {
    color: #d99607;
  }
`;

export const DescRegister = styled.p`
  font-family: 'Poppins';
  color: #bababa;
  font-size: 14px;
  font-weight: 400;
  margin: 0; 
`;

export const DescRegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const TextLeftSide = styled.h2`
  font-family:'Poppins';
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #bababa;
  text-transform: uppercase;
  margin-top: 40px;
`;