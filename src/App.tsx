import { useState, ChangeEvent, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCount,decCount } from './modules/actions/cart';
import { RootState } from './modules/reducer';

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
  const dispatch = useDispatch()
  const count = useSelector((state: RootState) => state.cart.count)

  const [txt, setTxt] = useState<string>("");

  const onChangeTxt = (e: ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value)
  }

  const onClickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(addCount(Number(txt)))
    setTxt('')
    console.log("txt: ",txt)
  }

  const onClickDec = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(decCount(Number(txt)))
    setTxt('')
    console.log("txt: ", txt)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <Container className='container'>
      <Main />
      <input value={txt} type={"number"} onChange={onChangeTxt}/>
      <button onClick={onClickAdd}>덧셈</button>
      <button onClick={onClickDec}>뺄셈</button>

      <div>{count}</div>
      </Container>
      <Footer />
      
    </div>
  );
}

export default App;
