import styled from 'styled-components';
// import { useSelector, useDispatch } from 'react-redux';
import { initialState } from '../../modules/initialStates/initialState';

const CartBox: any = () => {
  return (
    <Container>
      <InputCheck type='checkbox'></InputCheck>
      <ImageContain>
        {initialState.cartItems.map((item) => (
          <Img key={item.id} src={item.img} alt={item.name} />
        ))}
      </ImageContain>

      <Title>title</Title>
      <Size>size</Size>
      <Quantity>quantity</Quantity>
    </Container>
  );
};

export default CartBox;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;

  height: 100px;
  margin: 18px 0px;
  padding: 10px;
`;
const InputCheck = styled.input`
  margin: 15px;
`;
const ImageContain = styled.span`
  border: 1px solid black;
  margin: 15px;
  height: 50px;
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

const Img = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;
