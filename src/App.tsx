import { BrowserRouter, Routes, Route } from 'react-router-dom';

import theme from './theme';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ShoppingCart from './pages/ShoppingCart';

import Main from './pages/Main';
import GlobalStyle from './components/style/globalStyle';
import styled, { ThemeProvider } from 'styled-components';

function App() {
  // const dispatch = useDispatch();
  // const count = useSelector((state: RootState) => state.cart.count);

  // const [txt, setTxt] = useState<string>('');

  // const onChangeTxt = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTxt(e.target.value);
  // };

  // const onClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
  //   dispatch(addCount(Number(txt)));
  //   setTxt('');
  //   console.log('txt: ', txt);
  // };

  // const onClickDec = (e: MouseEvent<HTMLButtonElement>) => {
  //   dispatch(decCount(Number(txt)));
  //   setTxt('');
  //   console.log('txt: ', txt);
  // };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className='App'>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Container className='container'>
              <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/cart' element={<ShoppingCart />}></Route>
              </Routes>
            </Container>
            {/* <input value={txt} type={'number'} onChange={onChangeTxt} />
            <button onClick={onClickAdd}>덧셈</button>
            <button onClick={onClickDec}>뺄셈</button>
            <div>{count}</div> */}
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

  height: auto;
  min-height: 100%;
  padding-bottom: 100px;
  width: 100%;
`;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
  margin: 50px auto;
  text-align: center;
  align-items: center;
  /* background-color:rgba(0,2,0,70%) ; */
  /* z-index: -1; */
  @media screen and (max-width: 768px) {
    margin: 50px -70px;
  }
`;
