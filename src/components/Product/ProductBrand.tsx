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
 
 }

`

const ProductBrand = () => {
    return (
    <div>
        <TabBox>
            <ul>
                <li>NIKE</li>
                <li>ADIDAS</li>
                <li>NEWBALANCE</li>
            </ul>
            <ul>
                <li>CONVERSE</li>
                <li>VANS</li>
                <li>ASICS</li>
            </ul>
        </TabBox>
    </div>
    )
}

export default ProductBrand