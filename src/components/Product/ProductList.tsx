import ProductBrandTab from './ProductBrandTab';
import { useState } from 'react';

import styled from 'styled-components';

interface ProductImg {
  id: number;
  title: string;
  image: string;
}

const ProductImage: ProductImg[] = [
  {
    id: 0,
    title: 'NIKE',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
  },
  {
    id: 1,
    title: 'ADIDAS',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  },
  {
    id: 2,
    title: 'NEWBALANCE',
    image: 'https://image.nbkorea.com/NBRB_Product/20230203/NB20230203164137997001.jpg',
  },
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductImg | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>('');

  const handleAddToCart = (): void => {
    if (selectedProduct && quantity > 0 && size !== '') {
      const cartItem = {
        product: selectedProduct,
        quantity: quantity,
        size: size,
      };
      const existingCartItems = localStorage.getItem('cartItems');
      let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

      cartItems.push(cartItem);

      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      setSelectedProduct(null);
      setQuantity(1);
      setSize('');
      console.log(`quantity: ${quantity}`);
      console.log(`size: ${size}`);
    } else {
      console.error('error');
    }
  };
  const handleProductClick = (product: ProductImg): void => {
    setSelectedProduct(product);
  };

  return (
    <ProductListContainer>
      <TagBox>New</TagBox>
      <ProductListWrap>
        {ProductImage.map((img) => (
          <ProductListItem key={img.id} onClick={() => handleProductClick(img)}>
            <img src={img.image} alt={img.title} />
          </ProductListItem>
        ))}
      </ProductListWrap>
      <ProductBrandTab handleAddToCart={handleAddToCart} />
    </ProductListContainer>
  );
};

export default ProductList;

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 700px;
  }
`;

const TagBox = styled.div`
  box-sizing: border-box;
  margin: 10px 5px;
  width: 100px;
  height: 50px;
  border: 2px solid #ffd732;
  color: gray;
  font-size: 30px;
  background-color: yellow;
  box-shadow: 2px 2px 2px #ffd732;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    width: 70px;
    height: 40px;
    font-size: 25px;
  }
`;

const ProductListWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 850px;
  /* border: 5px solid rgba(246, 246, 27, 0.7); */
  background-color: #f2c15f;
  @media screen and (max-width: 768px) {
    width: 700px;
    height: 270px;
  }
`;

const ProductListItem = styled.div`
  box-sizing: border-box;
  margin: 25px;
  height: 250px;
  max-width: 225px;
  /* gap: 20px; */
  @media screen and (max-width: 768px) {
    border: none;
    max-width: 215px;
    margin: 10px;
  }

  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
    @media screen and (max-width: 768px) {
      width: 213px;
      margin: 0px 0px;
    }
  }
`;
