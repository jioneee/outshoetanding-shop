import styled from 'styled-components';

const Logo = () => {
  return (
    <div>
      <LogoText>out</LogoText>
      <LogoHighlight>SHOE</LogoHighlight>
      <LogoText>tanding shop</LogoText>
    </div>
  );
};

export default Logo;

const BackgroundLogo = () => {
  return (
    <div>
      <LogoBox>
        <LogoText>out</LogoText>
        <LogoHighlight>SHOE</LogoHighlight>
        <LogoText>tanding shop</LogoText>
      </LogoBox>
    </div>
  );
};

export { BackgroundLogo };

const LogoText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;
const LogoHighlight = styled.span`
  color: yellow;
  font-weight: 700;
  font-size: 22px;
`;

const LogoBox = styled.div`
  width: 30%;
  border-radius: 3%;
  background-color: #bdb8b8;
`;
