import { useState } from "react"

const useOpenModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const clickOpenModal =() => {
        setIsOpenModal(!isOpenModal)
    }
    const clickCloseModal = () => {
        setIsOpenModal(isOpenModal)
    }

    return {isOpenModal, clickOpenModal, clickCloseModal}
}

export default useOpenModal