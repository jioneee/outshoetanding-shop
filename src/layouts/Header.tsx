import { useNavigate } from 'react-router';
import Logo from '../components/common/Logo';
// import { ButtonS, ButtonM, ButtonL } from "../components/UI/button"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const Header: any = ({ onClick }: Props) => {
  const navigate = useNavigate();
  const handleClickCart = () => {
    navigate('/cart');
  };

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickMyPge = () => {
    navigate('/mypage');
  };

  return (
    <div>
      <HeaderContainer>
        <HeaderBox>
          <LogoBox onClick={handleClickHome}>
            <Logo />
          </LogoBox>
          <div className='Menu_Icon'>
            <MenuIcon style={{ color: 'white', fontSize: 40 }} />
          </div>
          <IconContainer>
            <IconBox>
              <HomeIcon onClick={handleClickHome} style={{ color: 'white', fontSize: 30, margin: 5 }}>
                home
              </HomeIcon>
            </IconBox>
            <IconBox>
              <CartCount>
                <ShoppingCartIcon onClick={handleClickCart} style={{ color: 'white', fontSize: 30, margin: 5 }}>
                  cart
                </ShoppingCartIcon>
                <CartQuantity>2</CartQuantity>
              </CartCount>
            </IconBox>
            <IconBox>
              <PersonIcon onClick={handleClickMyPge} style={{ color: 'white', fontSize: 30, margin: 5 }}>
                my
              </PersonIcon>
            </IconBox>
          </IconContainer>
          {/* <ButtonS></ButtonS>
        <ButtonM></ButtonM>
        <ButtonL></ButtonL> */}
        </HeaderBox>
      </HeaderContainer>
    </div>
  );
};

export default Header;

const HeaderContainer = styled.div``;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 9999;
  /* border: solid black 2px; */
  background-color: rgba(0, 2, 0, 70%);

  .Menu_Icon {
    @media screen and (min-width: 769px) {
      display: none;
    }
  }
`;
const LogoBox = styled.div`
  text-align: left;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const IconContainer = styled.span`
  margin-left: auto;
`;
const IconBox = styled.span`
  cursor: pointer;
  /* position:absolute; */
`;
const CartQuantity = styled.span`
  box-sizing: border-box;
  margin-left: -15px;
  margin-top: 0px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
`;
const CartCount = styled.span`
  cursor: pointer;
  /* position:absolute; */
  padding: 10px;
  color: rgba(0, 2, 0, 70%);
`;
