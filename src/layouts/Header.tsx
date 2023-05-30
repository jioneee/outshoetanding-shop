import { useNavigate } from "react-router";
import Logo from "../components/UI/Logo"
// import { ButtonS, ButtonM, ButtonL } from "../components/UI/button"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

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
const CartQuantity = styled.span`
  box-sizing: border-box;
  width:10px;
  height:10px;
  border-radius: 50%;
  background-color: white;
`


const Header: any = () => {
  const navigate = useNavigate()
  const handleClickCart = () => {
    navigate('/cart')
  }

  const handleClickHome = () => {
    navigate('/')
  }

  const handleClickMyPge = () => {
    navigate('/mypage')
  }

    return (
       <div>
        <HeaderContainer>
       <HeaderBox>
        <LogoBox>
        <Logo />
        </LogoBox>
        
        <IconContainer>
        <MenuIcon style={{color: 'white', fontSize:40}}/>
        <IconBox>
        <HomeIcon onClick={handleClickHome} style={{ color: 'white', fontSize: 30, margin:5 }}>home</HomeIcon>
        </IconBox>
        <IconBox>
        <ShoppingCartIcon onClick={handleClickCart} style={{ color: 'white' , fontSize: 30, margin:5  }}>cart</ShoppingCartIcon>
        <CartQuantity>1</CartQuantity>
        </IconBox>
        <IconBox>
        <PersonIcon onClick={handleClickMyPge} style={{ color: 'white' , fontSize: 30, margin:5  }}>my</PersonIcon>
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