import { useState } from "react";

import styled from "styled-components";

const TabBox = styled.div`
 box-sizing: border-box;
 background-color: gray;
 width: 100%;

 ul {
 display: flex;
 flex-direction: row;
 list-style:none;
 box-sizing: border-box;  
 width:100%;
 height: 50px;
 
 }
 li{
 box-sizing: border-box;  
 width:100%;
 height: auto;
 border: 1px solid white;
 cursor: pointer;
 }
 .focused{
 background-color: yellow;
 }

`

const ProductBrandTab = () => {
    const [currentTab, setCurrentTab] = useState(0)

    const clickTabHandler = (index: any ) => {
        setCurrentTab(index)
    }

    const brandArr = [
        {name: 'NIKE'},
        {name: 'ADIDAS'},
        {name: 'NEWBALANCE'},
        {name: 'CONVERSE'},
        {name: 'VANS'},
        {name: 'ASICS'},
    ]
    return (
    <div>
        <TabBox>
            <ul>
                {brandArr.map((el, index) => (<li className={index === currentTab ? "focused": "none"} onClick={clickTabHandler}>{el.name}</li>))}

            </ul>

        </TabBox>
    </div>
    )
}

export default ProductBrandTab