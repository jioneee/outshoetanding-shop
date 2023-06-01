import styled from "styled-components";

interface propsEvent {
    onClick: () => void;
  }

const ModalBox = styled.div`
    max-width:200px;
    height: auto;
    background-color: yellow;
`

const Modal = ({onClick}: propsEvent) => {
    return (
    <div>
    <ModalBox>modal</ModalBox>
    </div>
    )
}

export default Modal