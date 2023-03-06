import styled from 'styled-components';
import { Ilayout } from '../interfaces';

const Styledlayout = styled.div`
  width: 98%;
  max-width: 1100px;
  margin: 50px auto;
`;

export default function layout({ children }: Ilayout) {
  return (
    <Styledlayout>{children}</Styledlayout>
  )
}
