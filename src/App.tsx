import Header from './layouts/Header'
import Footer from './layouts/Footer'
import SwipeableTextMobileStepper from './components/carousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SwipeableTextMobileStepper />
      <Footer />
    </div>
  );
}

export default App;
