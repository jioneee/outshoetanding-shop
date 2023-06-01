import { useState } from "react"

const useOpenModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const clickModal =() => {
        setIsOpenModal(!isOpenModal)
    }
    const closeModal = () => {
        setIsOpenModal(isOpenModal)
    }

    return {isOpenModal, clickModal, closeModal}
}

export default useOpenModal