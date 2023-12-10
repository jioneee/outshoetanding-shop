import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './theme';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import GlobalStyle from './components/style/globalStyle';
import Loading from './components/common/Loading';
import styled, { ThemeProvider } from 'styled-components';
import MyPage from './pages/MyPage';

function App() {
  const Main = React.lazy(() => import('./pages/Main'));
  const ShoppingCart = React.lazy(() => import('./pages/ShoppingCart'));

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className='App'>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Container className='container'>
              <React.Suspense fallback={<Loading />}>
                <Routes>
                  <Route path='/' element={<Main />}></Route>

                  <Route path='/cart' element={<ShoppingCart />}></Route>
                  <Route path='/mypage' element={<MyPage />}></Route>
                </Routes>
              </React.Suspense>
            </Container>
          </BrowserRouter>
        </div>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
  }
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* padding-bottom: 100px; */
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
  margin: 50px auto 0px auto;
  text-align: center;
  align-items: center;
  flex-grow: 1;
  /* background-color:rgba(0,2,0,70%) ; */
  /* z-index: -1; */
  @media screen and (max-width: 768px) {
    margin: 50px -70px;
  }
`;
