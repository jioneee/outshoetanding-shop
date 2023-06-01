import styled from "styled-components";

const ModalBox = styled.div`
    max-width:200px;
    height: auto;
    background-color: yellow;
`

const Modal = () => {
    return (
    <div>
    <ModalBox>modal</ModalBox>
    </div>
    )
}

export default Modal