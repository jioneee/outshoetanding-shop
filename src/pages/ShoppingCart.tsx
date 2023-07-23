// import { useSelector } from "react-redux"
// import { RootState } from "../modules/reducer"
import styled from 'styled-components';

const ShoppingCart = () => {
  // const state = useSelector((state : RootState) => state.cart.nikeItems)
  // const {}
  return (
    <div>
      <CartContainer>
        <CartHeader>장바구니</CartHeader>
        <Cartcontents>
          <CartContentTitle>상품옵션</CartContentTitle>
          <CartContent></CartContent>
        </Cartcontents>
        <DeleteSelection>선택 삭제</DeleteSelection>
        <TotalBox></TotalBox>
        <ButtonBox>
          <SelectionOrder>선택 주문</SelectionOrder>
          <TotalOrder>전체 주문</TotalOrder>
        </ButtonBox>
      </CartContainer>
    </div>
  );
};

export default ShoppingCart;

const CartContainer = styled.div``;
const CartHeader = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid gray;
  margin-top: 50px;
  padding: 10px;
  text-align: left;
  font-size: 30px;
`;
const Cartcontents = styled.div`
  box-sizing: border-box;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  margin-top: 50px;
  width: 900px;
  height: 70px;
`;

const CartContentTitle = styled.div`
  box-sizing: border-box;
  text-align: left;
  height: 50px;
  border-bottom: 2px solid black;
  background-color: #e3e0e0;
`;
const CartContent = styled.div`
  box-sizing: border-box;
  height: 100px;
`;
const DeleteSelection = styled.button`
  display: flex;
  margin-top: 30px;
  width: 100px;
  height: 30px;
  align-items: flex-start;
`;
const TotalBox = styled.div`
  box-sizing: border-box;
  border-top: 3px solid #e3e0e0;
  border-bottom: 3px solid #e3e0e0;
  margin-top: 50px;
  width: 900px;
  height: 100px;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  float: right;
`;

const SelectionOrder = styled.button`
  display: flex;
  margin: 10px;
  width: 100px;
  height: 30px;
`;
const TotalOrder = styled.button`
  display: flex;
  margin: 10px;
  width: 100px;
  height: 30px;
`;
