import styled from 'styled-components';
import { IContainer } from '../interfaces';

const StyledContainer = styled.div`
  width: 98%;
  max-width: 1100px;
  margin: 50px auto;
`;

export default function Container({ children }: IContainer) {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
