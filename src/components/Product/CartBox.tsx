import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
import { initialState } from '../../modules/initialStates/initialState';

const CartBox: any = () => {
  return (
    <>
      {initialState.cartItems.map((item) => (
        <Container>
          <InputCheck type='checkbox'></InputCheck>
          <ImageContain>
            <Img key={item.id} src={item.img} alt={item.name} />
          </ImageContain>
          <ShoesInfo>
            <Title>{item.name}</Title>
            <Size>사이즈 : {item.size}</Size>
            <Quantity>수량 : {item.quantity}</Quantity>
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
  margin: 15px;
  font-weight: bold;
`;

const Size = styled.span`
  margin: 15px;
`;
const Quantity = styled.span`
  margin: 15px;
`;
