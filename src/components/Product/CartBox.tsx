import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CartItemType } from '../../modules/initialStates/initialStateType';

interface CartBoxProps {
  selectAllCheck: boolean;
  onCheckBoxChange: (index: number) => void;
  cartItems: CartItemType[];
  handleCheckBoxSelection: (index: number, selectedItem: CartItemType) => void;
  isChecked: boolean[];
}

const CartBox: React.FC<CartBoxProps> = ({ selectAllCheck, cartItems, handleCheckBoxSelection, isChecked }) => {
  // const [groupedCartItems, setGroupedCartItems] = useState<CartItemType[]>([]);
  const [checkedCartItems, setCheckedCartItems] = useState<boolean[]>([]);

  useEffect(() => {
    // const groupCartItems = () => {
    //   const groupedItems: Record<string, CartItemType> = {};
    //   cartItems.forEach((item) => {
    //     const key = `${item.size}-${item.img.title}`;
    //     if (groupedItems[key]) {
    //       groupedItems[key].quantity += item.quantity;
    //     } else {
    //       groupedItems[key] = { ...item };
    //     }
    //   });
    //   return Object.values(groupedItems);
    // };
    // setGroupedCartItems(groupCartItems());
    setCheckedCartItems(checkedCartItems);
  }, [cartItems, checkedCartItems]);

  const onClickCheck = (index: number) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setCheckedCartItems(checkedCartItems);
    handleCheckBoxSelection(index, cartItems[index]);
  };

  return (
    <>
      {cartItems.map((item, index) => (
        <Container key={`${item.size}-${item.img.title}`}>
          <InputCheck type='checkbox' checked={isChecked[index]} onChange={() => onClickCheck(index)} />

          <ImageContain>
            <Img src={item.img.image} alt={item.img.title} />
          </ImageContain>
          <ShoesInfo>
            <Title>{item.img.title}</Title>
            <Size>사이즈: {item.size}</Size>
            <Quantity>수량: {item.quantity}</Quantity>
            <Price>{(item.img.price * item.quantity).toLocaleString('ko-kr')}원</Price>
          </ShoesInfo>
        </Container>
      ))}
    </>
  );
};

export default CartBox;

const commonStyle = `
  margin: 15px;
  color: #5b3f06;
  @media screen and (max-width: 768px) {
    margin: 15px 10px;
  }
`;

const Container = styled.div`
  resize: both;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #5b3f06;
  color: #5b3f06;
  width: 100%;
  height: 140px;
  margin: 20px 0px;
  @media screen and (max-width: 768px) {
    width: 735px;
  }
`;
const InputCheck = styled.input`
  ${commonStyle}
  accent-color: #5b3f06;
`;
const ImageContain = styled.span`
  ${commonStyle}
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
  ${commonStyle}
  display: flex;
  margin-top: auto;
  flex-direction: row;
  line-height: 110px;
`;

const Title = styled.p`
  ${commonStyle}
  letter-spacing: 0px;
  min-width: 230px;
  height: 110px;
  font-weight: bold;
  font-size: 14px;
  color: #5b3f06;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 150px;
  }
`;

const Size = styled.span`
  ${commonStyle}
  width: 110px;
`;
const Quantity = styled.span`
  ${commonStyle}
  width: 110px;
`;

const Price = styled.span`
  ${commonStyle}
  width: 110px;
`;
