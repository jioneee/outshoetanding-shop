import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../modules/reducer';
import Logo from '../components/common/Logo';
// import { ButtonS, ButtonM, ButtonL } from "../components/UI/button"
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBar from '../components/common/MenuBar';

import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

const Header: any = ({ onClick }: Props) => {
  const [isMenu, setIsMenu] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
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
  const totalCart = cartItems.length;

  const handleMenuIcon = () => {
    setIsMenu(!isMenu);
  };
  const menuIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuIconRef.current && event.target instanceof Node && !menuIconRef.current.contains(event.target)) {
        setIsMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <HeaderContainer>
        <HeaderBox>
          <LogoBox onClick={handleClickHome}>
            <Logo />
          </LogoBox>
          <div className='Menu_Icon' ref={menuIconRef}>
            <MenuIcon style={{ color: 'white', fontSize: 40 }} onClick={handleMenuIcon} />
            {isMenu ? <MenuBar /> : null}
          </div>
          <IconContainer>
            <IconBox>
              <HomeIcon onClick={handleClickHome} style={{ color: 'white', fontSize: 35, margin: 5 }}>
                home
              </HomeIcon>
            </IconBox>
            <IconBox>
              <CartCount>
                <ShoppingCartIcon onClick={handleClickCart} style={{ color: 'white', fontSize: 35, margin: 5 }}>
                  cart
                </ShoppingCartIcon>
                <CartQuantity>{totalCart}</CartQuantity>
              </CartCount>
            </IconBox>
            <IconBox>
              <PersonIcon onClick={handleClickMyPge} style={{ color: 'white', fontSize: 35, margin: 5 }}>
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
  height: 60px;
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
  margin-left: 10px;
  /* position:absolute; */
`;
const CartQuantity = styled.span`
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  font-weight: 500;
  margin-left: -15px;
  margin-top: 0px;
  width: 17px;
  height: 20px;
  border-radius: 0%;
  border: 1px solid gray;
  background-color: #f7f760;
`;
const CartCount = styled.span`
  cursor: pointer;
  /* position:absolute; */
  padding: 10px;
  color: rgba(0, 2, 0, 70%);
`;
