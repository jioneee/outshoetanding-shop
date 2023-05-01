import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import styled from "styled-components"

const FooterBox = styled.div`
position: absolute;
box-sizing: border-box;
width:100%;
height:100px;
bottom: 0%;
border: solid white 2px;
background-color: rgba(0,2,0,10%);;
`

const FooterText = styled.span`
text-align: right;
color: black;
`


const Footer: any = () => {
    return (
    <div>
        <FooterBox>
        <CopyrightOutlinedIcon /><FooterText> outSHOEtanding. All Rights Reserved</FooterText>
        </FooterBox>
    </div>
    )

}

export default Footer