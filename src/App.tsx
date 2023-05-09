import Header from './layouts/Header';
import Footer from './layouts/Footer';
// import PageContainer from './layouts/PageContainer';
import SwipeableTextMobileStepper from './components/UI/carousel';
import ProductList from './components/ProductList';

import styled from 'styled-components';

import './App.css';

const Container = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
width: 800px;
margin: 50px auto;
text-align: center;
align-items: center;
`



function App() {
  return (
    <div className="App">
      <Header />
      <Container>
      <SwipeableTextMobileStepper />
      <ProductList />
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
