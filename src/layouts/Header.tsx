
import styled from "styled-components"

const HeaderBox = styled.div`
box-sizing: border-box;
width:100%;
height:50px;
border: solid black 2px;
background-color: black;
`
const LogoBox = styled.div`
text-align: left;
`

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
const Header: any = () => {
    return (
       <div>   
       <HeaderBox>
        <LogoBox>
        <LogoText>out</LogoText><LogoHighlight>SHOE</LogoHighlight><LogoText>tanding shop</LogoText>s
        </LogoBox>
        
        </HeaderBox> 
       </div>
    )
}

export default Header