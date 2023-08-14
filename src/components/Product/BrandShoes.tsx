import { useState } from 'react';
import styled from 'styled-components';

import Modal from '../common/Modal';
import useOpenModal from '../../Hooks/useOpenModal';
import { useScrollTrigger } from '@mui/material';

interface ProductImg {
  id: number;
  title: string;
  image: string;
  price: number;
}

const NikeImage: ProductImg[] = [
  {
    id: 0,
    title: 'shoes1',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: 70000,
  },
  {
    id: 1,
    title: 'shoes1',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: 70000,
  },
  {
    id: 2,
    title: 'shoes1',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: 70000,
  },
  {
    id: 3,
    title: 'shoes1',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: 70000,
  },
];

const AdidasImage: ProductImg[] = [
  {
    id: 0,
    title: 'shoes2',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
    price: 50000,
  },
  {
    id: 1,
    title: 'shoes3',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
    price: 50000,
  },
  {
    id: 2,
    title: 'shoes3',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
    price: 50000,
  },
];

const NewBalanceImage: ProductImg[] = [
  //m2002raa
  {
    id: 0,
    title: 'shoes4',
    image: 'https://image.nbkorea.com/NBRB_Product/20230203/NB20230203164137997001.jpg',
    price: 50000,
  },
  {
    id: 1,
    title: 'shoes4',
    image: 'https://image.nbkorea.com/NBRB_Product/20230203/NB20230203164137997001.jpg',
    price: 50000,
  },
  {
    //u574rh2
    id: 2,
    title: 'shoes5',
    image: 'https://image.nbkorea.com/NBRB_Product/20230410/NB20230410111009534001.jpg',
    price: 50000,
  },
];

const ConverseImage: ProductImg[] = [
  {
    id: 0,
    title: 'shoes4',
    image:
      'data:image/jpeg;base64,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',
    price: 50000,
  },
  { id: 1, title: 'shoes4', image: 'https://image.folderstyle.com/data/folderstyle_data/images/addimg/00/00/02/99/63/m_00296526_add.gif', price: 50000 },
];

const VansImage: ProductImg[] = [
  {
    id: 0,
    title: 'shoes4',
    image:
      'data:image/jpeg;base64,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',
    price: 50000,
  },
  //반스 볼트 og 올드스쿨 LX 블랙
];
const AsicsImage: ProductImg[] = [
  {
    id: 0,
    title: 'shoes4',
    image: 'https://static.luck-d.com/product/4233/main_carousel/ASICS_GELKAYANO_14_WHITE_MIDNIGHT_WMNS_1202A056109_54001.webp',
    price: 50000,
  },

  //ASICS 아식스 젤-카야노 14 화이트 미드나잇 우먼스
];

export const Nike = () => {
  const { isOpenModal, clickOpenModal, clickCloseModal } = useOpenModal();
  const [selectedImg, setSelectedImg] = useState();

  return (
    <div>
      <ProductListWrap>
        {NikeImage.map((img) => (
          <div key={img.id}>
            <ProductListItem>
              <img src={img.image} alt={img.title} />
              <div className='price'>Price: {img.price.toLocaleString('ko-kr')} 원</div>
            </ProductListItem>
            <AddToCart onClick={clickOpenModal}>add to cart</AddToCart>
          </div>
        ))}
        {isOpenModal && <Modal onClick={clickCloseModal} onAddToCart={() => {}} />}
      </ProductListWrap>
    </div>
  );
};

export const Adidas = () => {
  const { isOpenModal, clickOpenModal, clickCloseModal } = useOpenModal();
  return (
    <div>
      <ProductListWrap>
        {AdidasImage.map((img) => (
          <div key={img.id}>
            <ProductListItem>
              <img src={img.image} alt={img.title} />
              <div className='price'>Price: {img.price.toLocaleString('ko-kr')} 원</div>
            </ProductListItem>
            <AddToCart onClick={clickOpenModal}>add to cart</AddToCart>
          </div>
        ))}
        {isOpenModal && <Modal onClick={clickCloseModal} onAddToCart={() => {}} />}
      </ProductListWrap>
    </div>
  );
};

export const NewBalance = () => {
  const { isOpenModal, clickOpenModal, clickCloseModal } = useOpenModal();
  return (
    <div>
      <ProductListWrap>
        {NewBalanceImage.map((img) => (
          <div key={img.id}>
            <ProductListItem>
              <img src={img.image} alt={img.title} />
              <div className='price'>Price: {img.price.toLocaleString('ko-kr')} 원</div>
            </ProductListItem>
            <AddToCart onClick={clickOpenModal}>add to cart</AddToCart>
          </div>
        ))}
        {isOpenModal && <Modal onClick={clickCloseModal} onAddToCart={() => {}} />}
      </ProductListWrap>
    </div>
  );
};

export const Converse = () => {
  const { isOpenModal, clickOpenModal, clickCloseModal } = useOpenModal();
  return (
    <div>
      <ProductListWrap>
        {ConverseImage.map((img) => (
          <div key={img.id}>
            <ProductListItem>
              <img src={img.image} alt={img.title} />
              <div className='price'>Price: {img.price.toLocaleString('ko-kr')} 원</div>
            </ProductListItem>
            <AddToCart onClick={clickOpenModal}>add to cart</AddToCart>
          </div>
        ))}
        {isOpenModal && <Modal onClick={clickCloseModal} onAddToCart={() => {}} />}
      </ProductListWrap>
    </div>
  );
};

export const Vans = () => {
  const { isOpenModal, clickOpenModal, clickCloseModal } = useOpenModal();
  return (
    <div>
      <ProductListWrap>
        {VansImage.map((img) => (
          <div key={img.id}>
            <ProductListItem>
              <img src={img.image} alt={img.title} />
              <div className='price'>Price: {img.price.toLocaleString('ko-kr')} 원</div>
            </ProductListItem>
            <AddToCart onClick={clickOpenModal}>add to cart</AddToCart>
          </div>
        ))}
        {isOpenModal && <Modal onClick={clickCloseModal} onAddToCart={() => {}} />}
      </ProductListWrap>
    </div>
  );
};

export const Asics = () => {
  const { isOpenModal, clickOpenModal, clickCloseModal } = useOpenModal();
  return (
    <div>
      <ProductListWrap>
        {AsicsImage.map((img) => (
          <div key={img.id}>
            <ProductListItem>
              <img src={img.image} alt={img.title} />
              <div className='price'>Price: {img.price.toLocaleString('ko-kr')} 원</div>
            </ProductListItem>
            <AddToCart onClick={clickOpenModal}>add to cart</AddToCart>
          </div>
        ))}
        {isOpenModal && <Modal onClick={clickCloseModal} onAddToCart={() => {}} />}
      </ProductListWrap>
    </div>
  );
};

const ProductListWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgb(227, 224, 224);
  padding-bottom: 10px;
`;

const ProductListItem = styled.div`
  box-sizing: border-box;
  margin: 25px;
  height: 250px;
  max-width: 250px;
  /* border: 1px solid gray; */
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
  }
  .price {
    margin-top: 20px;
    /* font-weight: bold; */
  }
`;

const AddToCart = styled.button`
  box-sizing: border-box;
  background-color: #f7f760;
  border: 0px;
  font-weight: 600;
  width: 75px;
  height: 30px;
  margin-top: 25px;
  &:hover {
    background-color: gray;
  }
`;
