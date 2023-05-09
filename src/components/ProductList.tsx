import styled from "styled-components";

const ProductListWrap = styled.div`
  margin: 0 auto;
`;

const ProductListItem = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  border: 1px solid black;
`;

interface ProductImg {
  title: string;
  image: string;
}

const ProductImage: ProductImg[] = [
  {
    title: "shoes1",
    image: "",
  },
  {
    title: "shoes2",
    image: "",
  },
  {
    title: "shoes3",
    image: "",
  },
];

const ProductList: React.FC = () => {
  return (
    <div>
      <ProductListWrap>
        {ProductImage.map((img) => (
          <ProductListItem title={img.title} key={img.image} />
        ))}
      </ProductListWrap>
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