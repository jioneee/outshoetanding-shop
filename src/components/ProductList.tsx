import styled from "styled-components";

const ProductListWrap = styled.div`
    margin: 0 auto;
`

const ProductListItem = styled.div`
    box-sizing: border-box;
    height:100px;
    width:100px;
    border: 1px solid black;
`
interface ProductImg {
    label: string
    image: string
}

const ProductImage :ProductImg[] = [
    {
        label: "shoes1",
        image: "https://cdn.crowdpic.net/list-thumb/thumb_l_319B5AA716BAB8C7AACB2D52875E6DD4.jpg",
    },
    {
        label: "shoes2",
        image: "https://a.cdn-hotels.com/gdcs/production68/d1303/c8fa75d8-6932-459b-9660-8340f097ebd7.jpg",
    },
    {
        label: "shoes3",
        image: "https://image.theminda.com/data/tg/image/item/high/201906/a6f59222e5a21779ec7522ceb6e09319.jpg",
    },
];




const ProductList : any = () => {
    return (
       <div>
            <ProductListWrap>
            {ProductImage.map((img) => (<ProductListItem label={img.label}  image={img.image} />))}

            </ProductListWrap>
        </div>
        )
};

export default ProductList