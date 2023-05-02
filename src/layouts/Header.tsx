import Logo from "../components/UI/Logo"

import styled from "styled-components"

const HeaderBox = styled.div`
box-sizing: border-box;
width:100%;
height:50px;
padding:10px;
/* border: solid black 2px; */
background-color:rgba(0,2,0,70%);
`
const LogoBox = styled.div`
text-align: left;
`


const Header: any = () => {
    return (
       <div>   
       <HeaderBox>
        <LogoBox>
        <Logo />
        </LogoBox>
        
        </HeaderBox> 
       </div>
    )
}

export default Header