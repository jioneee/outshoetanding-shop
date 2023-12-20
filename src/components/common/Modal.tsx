import { MouseEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../modules/reducer';
import styled, { keyframes } from 'styled-components';

import { addToCart } from '../../modules/actions/cart';
import CloseIcon from '@mui/icons-material/Close';
import useOpenModal from '../../Hooks/useOpenModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { CartItemType } from '../../modules/initialStates/initialStateType';

interface Props {
  onClick: () => void;
  onAddToCart: () => void;
  img?: string;
}

const Modal = ({ onClick, img }: Props) => {
  const dispatch = useDispatch();
  // const count = useSelector((state: RootState) => state.cart.count);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');

  const { isOpenModal, clickCloseModal } = useOpenModal();

  useEffect(() => {
    setQuantity(1);
  }, []);

  useEffect(() => {
    setSelectedSize('');
    setQuantity(1);
    setName('');
  }, [isOpenModal]);

  const handleModalClose = () => {
    onClick();
    setSelectedSize('');
    setQuantity(1);
    clickCloseModal();
  };

  const onClickPlus = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const onClickMinus = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleCartClick = () => {
    if (selectedSize !== '' && img) {
      const cartItem: CartItemType = {
        id: 0,
        name: '',
        price: 0,
        quantity: quantity,
        size: selectedSize,
        img: {
          image: '',
          title: '',
          price: 0,
        },
      };

      dispatch(addToCart(cartItem));
      handleModalClose();
    }
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
              <ModalHead>{name}</ModalHead>
              SIZE <ModalSize onClick={() => handleSizeSelection('230')}>230</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('240')}>240</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('250')}>250</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('260')}>260</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('270')}>270</ModalSize>
              <ModalSize onClick={() => handleSizeSelection('280')}>280</ModalSize>
              <div></div>
              수량 :
              <ModalButton onClick={onClickMinus}>
                <RemoveCircleOutlineIcon color='action' />
              </ModalButton>
              {quantity}
              <ModalButton onClick={onClickPlus}>
                <AddCircleOutlineIcon color='action' />
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
const animation = keyframes`
0% {
        opacity: 0.5;
    }
    1%{
        opacity: 0.5;
        transform:translateY(100%)

    }
    100% {
        opacity: 0.5;
    }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;

  /* ::after {
    content: '';
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  } */
`;

const ModalBox = styled.div`
  max-width: 300px;
  height: auto;
  background-color: white;
  padding: 10px;
  position: relative;
  z-index: 2;
  animation: ${animation} 1.5s linear;
  animation: ${fadeOut} 1.5s linear;
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

  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: #f8f847;
  }

  &:focus {
    background-color: #c6c5c5;
  }
`;
const ModalButton = styled.button`
  margin: 10px;
  background: none;
  border: none;
`;
const CartButton = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  background-color: #5b3f06;
  border-color: #5b3f06;
`;
