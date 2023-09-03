import styled from 'styled-components';

const MenuBar = () => {
  return (
    <MenuBox>
      <MenuText>Home</MenuText>
      <MenuText>Cart</MenuText>
      <MenuText>MyPage</MenuText>
    </MenuBox>
  );
};

export default MenuBar;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: rgba(0, 2, 0, 70%);
  width: 150px;
  height: 150px;
  margin-left: -10px;
`;

const MenuText = styled.div`
  color: white;
  font-size: large;
  margin-top: 20px;
`;
