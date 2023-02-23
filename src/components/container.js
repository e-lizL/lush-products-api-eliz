import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 98%;
  max-width: 1000px;
  margin: 50px auto;
`;

export default function Container({ children }) {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}