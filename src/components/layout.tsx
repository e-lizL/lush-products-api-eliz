import styled from 'styled-components';
import { Ilayout } from '../interfaces';
import Header from './header';

const Styledlayout = styled.div`
  width: 98%;
  max-width: 1100px;
  margin: 50px auto;
`;

export default function Layout({ children }: Ilayout) {
  return (
    <Styledlayout>
      <Header />
      {children}
    </Styledlayout>
  )
}
