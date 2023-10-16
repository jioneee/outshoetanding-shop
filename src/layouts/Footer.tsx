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
  transform: translateY(-100%);
  width: 100%;
  height: 0;
  margin: 250px 0px 0px 0px;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 100px;
  border: solid white 2px;
  background-color: rgba(0, 2, 0, 10%);
`;

const FooterText = styled.span`
  text-align: right;
  color: black;
`;
