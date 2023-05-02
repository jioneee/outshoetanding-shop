import styled from "styled-components"

const LogoText = styled.span`
color: white;
font-weight: 700;
font-size: 20px;

`
const LogoHighlight = styled.span`
color: yellow;
font-weight: 700;
font-size: 22px;
`

const Logo = () => {
    return (
    <div>
     <LogoText>out</LogoText><LogoHighlight>SHOE</LogoHighlight><LogoText>tanding shop</LogoText>
    </div>
    )
}

export default Logo