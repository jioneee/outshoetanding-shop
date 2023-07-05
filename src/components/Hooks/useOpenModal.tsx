import { useState } from 'react';

const useOpenModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const clickOpenModal = () => {
    setIsOpenModal(true);
  };

  const clickCloseModal = () => {
    setIsOpenModal(false);
  };

  return { isOpenModal, clickOpenModal, clickCloseModal };
};

export default useOpenModal;
