import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  @media (min-width: 600px) {
    height: 60px;
  }
`;

const Header = () => {
  return (
    <LogoWrapper>
      <img alt="LUSH" src="/Lush_logo_logotype.png"></img>
    </LogoWrapper>
  )
}

export default Header
