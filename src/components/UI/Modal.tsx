import { MouseEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules/reducer';
import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';
import useOpenModal from '../Hooks/useOpenModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { minusQuantity, plusQuantity } from '../../modules/actions/cart';

interface Props {
  onClick: () => void;
  onAddToCart: (quantity: number, size: string) => void;
}

const Modal = ({ onClick, onAddToCart }: Props) => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.cart.count);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const { isOpenModal, clickCloseModal } = useOpenModal();
  const handleModalClose = () => {
    onClick();
    clickCloseModal();
  };

  const onClickPlus = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(plusQuantity(1));
  };

  const onClickMinus = (e: MouseEvent<HTMLButtonElement>) => {
    if (count >= 1) {
      dispatch(minusQuantity(1));
    }
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
    console.log('size', selectedSize);
  };

  const handleCartClick = () => {
    onAddToCart(count, selectedSize);
  };
  return (
    <>
      {!isOpenModal && (
        <div>
          <ModalContainer>
            <ModalBox>
              <ModalButton onClick={handleModalClose}>
                <CloseIcon />
              </ModalButton>
              <ModalHead>신발명</ModalHead>
              size :<ModalSize onClick={() => handleSizeSelection('230')}>230</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('240')}>240</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('250')}>250</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('260')}>260</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('270')}>270</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('280')}>280</ModalSize>
              <div></div>
              수량 :
              <ModalButton onClick={onClickMinus}>
                <RemoveCircleOutlineIcon />
              </ModalButton>
              {count}
              <ModalButton onClick={onClickPlus}>
                <AddCircleOutlineIcon />
              </ModalButton>
              <br />
              <CartButton onClick={handleCartClick}>Cart</CartButton>
              {/* onClick={() => dispatch(addCount())} */}
            </ModalBox>
          </ModalContainer>
        </div>
      )}
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: relative;
  ::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const ModalBox = styled.div`
  max-width: 300px;
  height: auto;
  background-color: white;
  padding: 10px;
  position: relative;
  z-index: 2;
`;

const ModalHead = styled.div`
  font-size: large;
  font-weight: 700;
`;
const ModalSize = styled.button`
  width: 50px;
  height: 30px;
  margin: 5px;
  font-weight: 300;
`;
const ModalButton = styled.button`
  margin: 10px;
  background: none;
  border: none;
`;
const CartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #666;
  border-color: #666;
`;
