import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SwipeableTextMobileStepper from './components/UI/carousel';
import ProductList from './components/ProductList';
import GlobalStyle from './components/style/globalStyle';

import styled from 'styled-components';


const Container = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
width: 900px;
margin: 50px auto;
text-align: center;
align-items: center;
background-color: black;
/* z-index: -1; */
`


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <SwipeableTextMobileStepper /> */}
      <Container className='container'>
      <SwipeableTextMobileStepper />
      <ProductList />
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
