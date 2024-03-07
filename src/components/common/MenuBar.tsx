import styled, { keyframes } from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import { useNavigate } from 'react-router';

const MenuBar = () => {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickLogout = () => {
    navigate('/login');
  };

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickCart = () => {
    navigate('/cart');
  };

  const handleClickMyPge = () => {
    navigate('/mypage');
  };

  const handleClickLogIn = () => {
    navigate('/login');
  };

  return (
    <MenuBox>
      <UnderLine></UnderLine>
      <MenuNavigate onClick={handleClickHome}>Home</MenuNavigate>
      <MenuNavigate onClick={handleClickCart}>Cart</MenuNavigate>
      <MenuNavigate onClick={handleClickMyPge}>MyPage</MenuNavigate>
      {user ? <MenuNavigate onClick={handleClickLogout}>LogOut</MenuNavigate> : <MenuNavigate onClick={handleClickLogIn}>LogIn</MenuNavigate>}
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

`;

const MenuBox = styled.ul`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(0, 2, 0, 70%);
  width: 150px;
  height: 200px;
  margin-left: -10px;
  margin-top: 6px;
  padding-left: 15px;
  animation: ${animation} 1.5s linear;
`;

const MenuNavigate = styled.div`
  color: white;
  width: 100%;
  font-size: large;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    width: 50%;
    color: yellow;
  }
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
