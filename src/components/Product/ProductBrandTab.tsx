import { useState } from 'react';
import { Nike, Adidas, NewBalance, Converse, Vans, Asics } from './BrandShoes';

import styled from 'styled-components';

interface ProductBrandProps {
  handleAddToCart: () => void;
}

const ProductBrandTab: React.FC<ProductBrandProps> = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const clickTabHandler = (index: any) => {
    setCurrentTab(index);
  };

  const brandArr = [
    { name: 'NIKE', content: <Nike /> },
    { name: 'ADIDAS', content: <Adidas /> },
    { name: 'NEWBALANCE', content: <NewBalance /> },
    { name: 'CONVERSE', content: <Converse /> },
    { name: 'VANS', content: <Vans /> },
    { name: 'ASICS', content: <Asics /> },
  ];
  return (
    <div>
      <TabBox>
        <ul>
          {brandArr.map((el, index) => (
            <li key={index} className={index === currentTab ? 'focused' : 'none'} onClick={() => clickTabHandler(index)}>
              {el.name}
            </li>
          ))}
        </ul>
      </TabBox>
      <TabContentBox>{brandArr[currentTab].content}</TabContentBox>
    </div>
  );
};

export default ProductBrandTab;

const TabBox = styled.div`
  box-sizing: border-box;
  margin: 50px auto;
  background-color: gray;
  width: 100%;
  font-size: 20px;
  font-weight: normal;
  line-height: 50px;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
  }
  li {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    border: 1px solid white;
    cursor: pointer;
    &:hover {
      background-color: #f8f847;
    }
  }
  .focused {
    background-color: yellow;
    border: 2px solid gray;
  }
`;

const TabContentBox = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: gray; */
`;
