import styled from 'styled-components';

const Footer: any = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterText> ⓒoutSHOEtanding. All Rights Reserved</FooterText>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  bottom: 0;
`;

const FooterBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  border: solid white 2px;
  background-color: rgba(0, 2, 0, 10%);
`;

const FooterText = styled.span`
  text-align: right;
  color: black;
`;
