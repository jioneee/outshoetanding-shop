import styled from "styled-components";

const TabBox = styled.div`
 box-sizing: border-box;
 background-color: gray;
 width: 100%;
 ul {
 display: block;
 list-style:none;
 box-sizing: border-box;  
 width:100%;
 height: auto;
 }
 li{
 box-sizing: border-box;  
 width:100%;
 height: auto;
 }

`

const ProductBrand = () => {
    return (
    <div>
        <TabBox>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </TabBox>
    </div>
    )
}

export default ProductBrand