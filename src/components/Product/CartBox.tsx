import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { CartItemType } from '../../modules/initialStates/initialStateType';
interface CartBoxProps {
  selectAllCheck: boolean;
  onChange: (index: number) => void;
  cartItems: CartItemType[];
}

const CartBox: React.FC<CartBoxProps> = ({ selectAllCheck, onChange, cartItems }) => {
  const [isChecked, setIsChecked] = useState<boolean[]>(cartItems.map(() => false));
  console.log('cartItems', cartItems);
  console.log('cartItems[2]', cartItems[2]);
  useEffect(() => {
    // console.log('selectAllCheck', selectAllCheck);
    // console.log('isChecked', isChecked);
    // console.log('cartItems', cartItems);
    if (selectAllCheck) {
      setIsChecked(cartItems.map(() => true));
    } else {
      setIsChecked(cartItems.map(() => false));
    }
  }, [selectAllCheck, cartItems]);

  const onClickCheck = (index: number) => {
    console.log('Clicked index', index);
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
    onChange(index);
  };

  return (
    <>
      {cartItems.map((item, index) => (
        <Container key={index}>
          <InputCheck type='checkbox' checked={isChecked[index] || false} onChange={() => onClickCheck(index)} />
          <ImageContain>
            <Img src={item.img.image.image} alt={item.img.image.title} />
          </ImageContain>
          <ShoesInfo>
            <Title>{item.img.image.title}</Title>
            <Size>사이즈 : {item.size}</Size>
            <Quantity>수량 : {item.quantity}</Quantity>
            <Price>{(item.img.price * item.quantity).toLocaleString('ko-kr')}원</Price>
          </ShoesInfo>
        </Container>
      ))}
    </>
  );
};

export default CartBox;

const Container = styled.div`
  color: #5b3f06;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #5b3f06;
  width: 100%;
  height: 140px;
  margin: 20px 0px;
`;
const InputCheck = styled.input`
  margin: 15px;
  accent-color: #5b3f06;
`;
const ImageContain = styled.span`
  margin: 15px;
  height: 150px;
  background-size: cover;
`;
const Img = styled.img`
  border: 1px solid #5b3f06;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
const ShoesInfo = styled.span`
  color: #5b3f06;
  display: flex;
  flex-direction: row;
  line-height: 110px;
`;

const Title = styled.p`
  box-sizing: border-box;
  width: 230px;
  height: 110px;
  margin: 15px;
  font-weight: bold;
  font-size: 15px;
  color: #5b3f06;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 150px;
  }
`;

const Size = styled.span`
  width: 110px;
  height: 110px;
  margin: 15px;
  color: #5b3f06;
  @media screen and (max-width: 768px) {
    width: 100px;
    margin: 15px 10px;
  }
`;
const Quantity = styled.span`
  width: 110px;
  height: 110px;
  margin: 15px;
  color: #5b3f06;
  @media screen and (max-width: 768px) {
    width: 100px;
    margin: 15px 10px;
  }
`;

const Price = styled.span`
  width: 110px;
  height: 110px;
  margin: 15px;

  @media screen and (max-width: 768px) {
    width: 100px;
    margin: 15px 10px;
  }
`;
