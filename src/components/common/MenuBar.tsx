import styled, { keyframes } from 'styled-components';
// import { useState } from 'react';
import { useNavigate } from 'react-router';

const MenuBar = () => {
  const navigate = useNavigate();
  // const [currentMenu, setCurrentMenu] = useState('Home')
  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickCart = () => {
    navigate('/cart');
  };

  const handleClickMyPge = () => {
    navigate('/mypage');
  };

  // const changeUnderLine = (e: any) => {
  //   setCurrentMenu(e.target.value);
  // };
  return (
    <MenuBox>
      <UnderLine></UnderLine>
      <MenuNavigate onClick={handleClickHome}>Home</MenuNavigate>
      <MenuNavigate onClick={handleClickCart}>Cart</MenuNavigate>
      <MenuNavigate onClick={handleClickMyPge}>MyPage</MenuNavigate>
    </MenuBox>
  );
};

export default MenuBar;

const animation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  /* 100% {
    opacity: 0;
  } */
`;

const MenuBox = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(0, 2, 0, 70%);
  width: 150px;
  height: 150px;
  margin-left: -10px;
  margin-top: 6px;
  padding-left: 15px;
  animation: ${animation} 1.5s linear;
`;

const MenuNavigate = styled.div`
  color: white;
  font-size: large;
  margin-top: 20px;
  cursor: pointer;
`;

const UnderLine = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100px;
    background-color: red;
    left: 0px;
    bottom: -50px;
    height: 3px;
    transform: scaleX(0);
  }
  &hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;
