import styled from "styled-components";

import CloseIcon from '@mui/icons-material/Close';
import useOpenModal from "../Hooks/useOpenModal";

interface Props {
    onClick: () => void;
  }
const ModalContainer = styled.div`

position: relative;
::after {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7); 
    z-index: 1;
  }
    /* ::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    
    content: "";
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.0001) 100%);
    mix-blend-mode: normal;
    opacity: 0.3;
   
  } */
`  

const ModalBox = styled.div`
    max-width:200px;
    height: auto;
    background-color: white;
    padding:10px;
    position: relative;
    z-index: 2;  

`

const ModalHead = styled.div`
   
    font-size: large;
    font-weight: 700;
`
const ModalSize = styled.button`
    width: 50px;
    height: 30px;
    margin:5px;
    font-weight: 300;
`
const ModalQuantity = styled.button`
    
`

const Modal = ({onClick}: Props) => {
  const {isOpenModal,clickCloseModal } = useOpenModal()
  const handleModalClose = () => {
    onClick();
    clickCloseModal();
  };
    return (
      <>
      {!isOpenModal && (
    <div >
      
    <ModalContainer>  
   
    <ModalBox >
    <button onClick={handleModalClose}>
            <CloseIcon />
          </button>
        <ModalHead>신발명</ModalHead>
        size :
        <ModalSize>230</ModalSize>
        <ModalSize>240</ModalSize>
        <ModalSize>250</ModalSize>
        <ModalSize>260</ModalSize>
        <ModalSize>270</ModalSize>
        <ModalSize>280</ModalSize>
        <div></div>
        수량 : <ModalQuantity></ModalQuantity>

    </ModalBox>
    </ModalContainer>
       
    </div>
    )}
    </>
    )
}

export default Modal