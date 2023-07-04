import ProductBrand from './ProductBrandTab';
import { useState } from 'react';

import styled from 'styled-components';

const TagBox = styled.div`
  box-sizing: border-box;
  margin: 10px 5px;
  width: 100px;
  height: 50px;
  border: 2px solid black;
  color: white;
  font-size: 30px;
  background-color: gray;
`;

const ProductListWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
`;

const ProductListItem = styled.div`
  box-sizing: border-box;
  margin: 25px;
  height: 250px;
  max-width: 250px;
  border: 1px solid gray;

  img {
    width: 250px;
    height: 250px;
    object-fit: contain; /* ensures the aspect ratio is maintained */
  }
`;

interface ProductImg {
  title: string;
  image: string;
}

const ProductImage: ProductImg[] = [
  {
    title: 'shoes1',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
  },
  {
    title: 'shoes2',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  },
  {
    title: 'shoes3',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  },
  // {
  //   title: "shoes3",
  //   image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  // },
  // {
  //   title: "shoes3",
  //   image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  // },
  // {
  //   title: "shoes3",
  //   image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  // },  {
  //   title: "shoes3",
  //   image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
  // },
];

// const ProductList = () => {
//   return (
//     <div>
//       <ProductListWrap>
//         {ProductImage.map((img) => (
//           <ProductListItem title={img.title} image={img.image} />
//         ))}
//       </ProductListWrap>
//     </div>
//   );
// };
const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductImg | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<string>('');
  return (
    <div>
      <TagBox>New</TagBox>
      <ProductListWrap>
        {ProductImage.map((img) => (
          <ProductListItem>
            <img src={img.image} alt={img.title} />
          </ProductListItem>
        ))}
      </ProductListWrap>
      <ProductBrand />
    </div>
  );
};

export default ProductList;

// import styled from "styled-components";

// const ProductListWrap = styled.div`
//     margin: 0 auto;
// `

// const ProductListItem = styled.div`
//     box-sizing: border-box;
//     height:100px;
//     width:100px;
//     border: 1px solid black;
// `
// interface ProductImg {
//     title: string;
//     image: string;
// }
// // const ProductListItem = ({ title, image }: ProductListItemProps) => {
// //     // Component implementation here
// //   };

// const ProductImage :ProductImg[] = [
//     {
//         title: "shoes1",
//         image: "",
//     },
//     {
//         title: "shoes2",
//         image: "",
//     },
//     {
//         title: "shoes3",
//         image: "",
//     },
// ];

// const ProductList : any = () => {
//     return (
//        <div>
//             <ProductListWrap>
//             {ProductImage.map((img) => (<ProductListItem  title={img.title}  image={img.image} />))}

//             </ProductListWrap>
//         </div>
//         )
// };

// export default ProductList
