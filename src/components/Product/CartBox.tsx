import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { initialState } from '../../modules/initialStates/initialState';
interface CartBoxProps {
  selectAllCheck: boolean;
  onChange: (checked: boolean) => void;
}

const CartBox: React.FC<CartBoxProps> = ({ selectAllCheck, onChange }) => {
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  useEffect(() => {
    if (selectAllCheck) {
      setIsChecked(initialState.cartItems.map(() => true));
    } else {
      setIsChecked(initialState.cartItems.map(() => false));
    }
  }, [selectAllCheck]);

  const onClickCheck = (index: number) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);

    const allChecked = updatedChecked.every((value) => value);
    onChange(allChecked);
  };

  return (
    <>
      {initialState.cartItems.map((item, index) => (
        <Container key={item.id}>
          <InputCheck type='checkbox' checked={isChecked[index] || false} onChange={() => onClickCheck(index)} />
          <ImageContain>
            <Img src={item.img} alt={item.name} />
          </ImageContain>
          <ShoesInfo>
            <Title>{item.name}</Title>
            <Size>사이즈 : {item.size}</Size>
            <Quantity>수량 : {item.quantity}</Quantity>
            <Price>{(item.price * item.quantity).toLocaleString('ko-kr')}원</Price>
          </ShoesInfo>
        </Container>
      ))}
    </>
  );
};

export default CartBox;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;

  height: 140px;
  margin: 20px 0px;
`;
const InputCheck = styled.input`
  margin: 15px;
`;
const ImageContain = styled.span`
  margin: 15px;
  height: 150px;
`;
const Img = styled.img`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
const ShoesInfo = styled.span`
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
  font-size: large;
`;

const Size = styled.span`
  width: 110px;
  height: 110px;
  margin: 15px;
`;
const Quantity = styled.span`
  width: 110px;
  height: 110px;
  margin: 15px;
`;

const Price = styled.span`
  width: 110px;
  height: 110px;
  margin: 15px;
`;
