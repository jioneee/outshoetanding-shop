import styled from "styled-components"

const FooterBox = styled.div`
position: absolute;
box-sizing: border-box;
width:100%;
height:100px;
bottom: 0%;
border: solid white 2px;
background-color: #E0E0E0;
`

const FooterText = styled.span`
text-align: right;
color: black;
`


const Footer: any = () => {
    return (
    <div>
        <FooterBox>
            <FooterText>© outSHOEtanding.  ALL Rights Reserved</FooterText>
        </FooterBox>
    </div>
    )

}

export default Footer