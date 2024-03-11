import styled from 'styled-components';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { initialState } from '../modules/initialStates/initialState';
import CartBox from '../components/Product/CartBox';
import { RootState } from '../modules/reducer';
import { removeSelectedFromCart } from '../modules/actions/cart';
import { ButtonM } from '../components/common/button';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [selectAllCheck, setSelectAllCheck] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [isChecked, setIsChecked] = useState<boolean[]>(cartItems.map(() => false));
  console.log('cartItems', cartItems);
  const handleCheckBoxChange = (index: number) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);

    const allChecked = updatedChecked.every((value) => value);
    setSelectAllCheck(allChecked);
  };

  const handleSelectAllCheckChange = () => {
    const allChecked = !selectAllCheck;
    setSelectAllCheck(allChecked);
    setIsChecked(cartItems.map(() => allChecked));
  };
  const handleDeleteSelection = () => {
    const indicesToRemove: number[] = isChecked.map((checked, index) => (checked ? index : -1)).filter((index) => index !== -1);

    dispatch(removeSelectedFromCart(indicesToRemove));
  };

  const totalCartQuantity = isChecked.reduce((total, checked, index) => {
    if (checked && cartItems[index]) {
      return total + cartItems[index].quantity;
    }
    return total;
  }, 0);

  const totalCartPrice = isChecked.reduce((total, checked, index) => {
    if (checked && cartItems[index]) {
      return total + cartItems[index].price * cartItems[index].quantity;
    }
    return total;
  }, 0);
  return (
    <div>
      <CartContainer>
        <CartWrapper>
          <CartHeader>장바구니</CartHeader>
          <Cartcontents>
            <CartContentTitle>
              <CartContentTitleText>상품옵션</CartContentTitleText>
            </CartContentTitle>
            <CartCheckBox type='checkbox' checked={selectAllCheck} onChange={handleSelectAllCheckChange} />
            <CartBoxWrapper>
              {' '}
              <CartBox selectAllCheck={selectAllCheck} onChange={handleCheckBoxChange} cartItems={cartItems} />
            </CartBoxWrapper>
          </Cartcontents>
        </CartWrapper>

        <TotalContainer>
          <TotalBox>
            <TotalQuantity>
              {' '}
              Quantity: {totalCartQuantity} Price: {totalCartPrice.toLocaleString('ko-kr')}원
            </TotalQuantity>
          </TotalBox>

          <ButtonBox>
            <ButtonM onClick={handleDeleteSelection}>선택삭제</ButtonM>
            <ButtonM>선택주문</ButtonM>
            <ButtonM onClick={handleSelectAllCheckChange}>전체주문</ButtonM>
          </ButtonBox>
        </TotalContainer>
      </CartContainer>
    </div>
  );
};

export default ShoppingCart;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1000px;
  width: 900px;
  gap: 300px;
  @media screen and (max-width: 768px) {
    width: 735px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const CartHeader = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #5b3f06;
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
  margin-bottom: auto;
  width: 100%;
  height: 80px;
  text-align: left;
`;

const CartContentTitle = styled.div`
  box-sizing: border-box;
  height: 50px;
  border-bottom: 2px solid black;
  background-color: #f2c15f;
`;

const CartContentTitleText = styled.div`
  font-size: large;
  font-weight: 600;
`;

const CartCheckBox = styled.input`
  margin: 5px;
  accent-color: #5b3f06;
`;
const CartBoxWrapper = styled.div`
  margin-bottom: 200px;
`;

const TotalBox = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: right;
  border-top: 3px solid #5b3f06;
  border-bottom: 3px solid #5b3f06;
  margin-top: 500px;
  padding: 20px;
  width: 900px;
  height: 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TotalQuantity = styled.span`
  margin-right: 80px;
`;
const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  position: relative;
  margin-top: 50px;
`;
// const DeleteSelection = styled.button`
//   margin: 10px;
//   width: 100px;
//   height: 30px;
//   @media screen and (max-width: 768px) {
//     width: 70px;
//     font-size: 12px;
//   }
// `;
// const SelectionOrder = styled.button`
//   margin: 10px;
//   width: 100px;
//   height: 30px;
//   @media screen and (max-width: 768px) {
//     width: 70px;
//     font-size: 12px;
//   }
// `;
// const TotalOrder = styled.button`
//   margin: 10px;
//   width: 100px;
//   height: 30px;
//   @media screen and (max-width: 768px) {
//     width: 70px;
//     font-size: 12px;
//   }
// `;

const TotalContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
