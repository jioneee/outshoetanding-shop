import Header from './layouts/Header';
import Footer from './layouts/Footer';
// import PageContainer from './layouts/PageContainer';
import SwipeableTextMobileStepper from './components/UI/carousel';

import styled from 'styled-components';

import './App.css';

const Container = styled.div`
box-sizing: border-box;
display: flex;
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
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
