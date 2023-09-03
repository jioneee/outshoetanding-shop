import styled from 'styled-components';
import { useNavigate } from 'react-router';

const MenuBar = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickCart = () => {
    navigate('/cart');
  };

  const handleClickMyPge = () => {
    navigate('/mypage');
  };
  return (
    <MenuBox>
      <MenuNavigate onClick={handleClickHome}>Home</MenuNavigate>
      <MenuNavigate onClick={handleClickCart}>Cart</MenuNavigate>
      <MenuNavigate onClick={handleClickMyPge}>MyPage</MenuNavigate>
    </MenuBox>
  );
};

export default MenuBar;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(0, 2, 0, 70%);
  width: 150px;
  height: 150px;
  margin-left: -10px;
  margin-top: 6px;
  padding-left: 15px;
`;

const MenuNavigate = styled.div`
  color: white;
  font-size: large;
  margin-top: 20px;
  cursor: pointer;
`;
