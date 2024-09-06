import styled from 'styled-components';
import { Input as AntdInput,} from 'antd';

interface BoxInputProps {
  margin?: string;
}

export const InputStyled = styled(AntdInput)`

`

export const BoxInput = styled.div<BoxInputProps>`
   width: 20rem; /* Equivalente a w-60 */
  height: 3rem; /* Equivalente a h-12 */
  position: relative;
  display: flex;
  border-radius: 0.75rem; /* Equivalente a rounded-xl */
  margin-top: 30px;
  bottom: 20px;
  `;
