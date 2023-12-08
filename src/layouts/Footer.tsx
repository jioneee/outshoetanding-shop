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
  /* display: fixed; */
  /* transform: translateY(-100%); */
  position: fixed;
  /* justify-content: flex-end; */
  bottom: 0;
  left: 0;
  right: 0;
  /* width: 100%; */
  height: 150px;
  /* margin: 250px 0px 0px 0px; */
`;

const FooterBox = styled.div`
  width: 100%;
  height: 100%;
  border: solid white 2px;
  background-color: rgba(0, 2, 0, 10%);
`;

const FooterText = styled.span`
  text-align: right;
  color: black;
`;
