import { useNavigate } from "react-router";
import Logo from "../components/UI/Logo"
// import { ButtonS, ButtonM, ButtonL } from "../components/UI/button"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import styled from "styled-components"

const HeaderContainer = styled.div`
  
`
const HeaderBox = styled.div`
display:flex;
flex-direction: row;
box-sizing: border-box;
width:100%;
height:50px;
padding:10px;
position: fixed;
top: 0;
z-index: 9999;
/* border: solid black 2px; */
background-color:rgba(0,2,0,70%);
`
const LogoBox = styled.div`
text-align: left;
`
const IconContainer = styled.span`
   margin-left: auto;
`
const IconBox = styled.span`
  cursor: pointer;
`


const Header: any = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/cart')
  }

    return (
       <div>
        <HeaderContainer>
       <HeaderBox>
        <LogoBox>
        <Logo />
        </LogoBox>
        <IconContainer>
        <IconBox>
        <HomeIcon style={{ color: 'white', fontSize: 30, margin:5 }}>home</HomeIcon>
        </IconBox>
        <IconBox>
        <ShoppingCartIcon onClick={handleClick} style={{ color: 'white' , fontSize: 30, margin:5  }}>cart</ShoppingCartIcon>
        </IconBox>
        <IconBox>
        <PersonIcon style={{ color: 'white' , fontSize: 30, margin:5  }}>my</PersonIcon>
        </IconBox>
        </IconContainer>
        {/* <ButtonS></ButtonS>
        <ButtonM></ButtonM>
        <ButtonL></ButtonL> */}
        </HeaderBox > 
        </HeaderContainer>   
       </div>
    )
}

export default Header