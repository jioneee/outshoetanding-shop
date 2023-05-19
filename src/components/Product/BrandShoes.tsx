import styled from "styled-components";

const ProductListWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

const NikeImage: ProductImg[] = [
    {
      title: "shoes1",
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    },
    {
        title: "shoes1",
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    },
    {
        title: "shoes1",
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    },
    {
        title: "shoes1",
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    },

  
  
  ];

  const AdidasImage: ProductImg[] = [

    {
      title: "shoes2",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
    },
    {
      title: "shoes3",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
    },
    {
      title: "shoes3",
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Black_BB5476_01_standard.jpg',
    },

  
  
  ];


export const Nike = () => {
   
    return (
    <div>
    <ProductListWrap>
      
      {NikeImage.map((img) => (
        <ProductListItem>
          <img src={img.image} alt={img.title} />
        </ProductListItem>
      ))}
    </ProductListWrap>
    </div>
    )
}

export const Adidas = () => {
    return (
        <div>
        <ProductListWrap>
          
          {AdidasImage.map((img) => (
            <ProductListItem>
              <img src={img.image} alt={img.title} />
            </ProductListItem>
          ))}
        </ProductListWrap>
        </div>
        )
}

export const NewBalance = () => {
    return (<div></div>)
}

export const Converse = () => {
    return (<div></div>)
}

export const Vans = () => {
    return (<div></div>)
}

export const Asics = () => {
    return (<div></div>)
}