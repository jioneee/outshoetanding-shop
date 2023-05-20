import Header from './layouts/Header';
import Footer from './layouts/Footer';

import GlobalStyle from './components/style/globalStyle';
import Main from './pages/Main';

import styled from 'styled-components';


const Container = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
width: 900px;
margin: 50px auto;
text-align: center;
align-items: center;
/* background-color:rgba(0,2,0,70%) ; */
/* z-index: -1; */
`


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container className='container'>
      <Main />
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
