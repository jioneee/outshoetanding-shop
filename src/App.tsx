import Header from './layouts/Header';
import Footer from './layouts/Footer';
import PageContainer from './layouts/PageContainer';
import SwipeableTextMobileStepper from './components/UI/carousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
     <PageContainer />
     <SwipeableTextMobileStepper />
   
      <Footer />
      
    </div>
  );
}

export default App;
