import './App.css';
import Container from './components/Container';
import Counter from './components/Count';
import ProductCounter from './components/product';
import PriceCounter from './components/price';
function App() {
  return (
    <>
    <div className="App">
     <Container/>
     <hr/>
     <Counter/>
     <hr/>
     <ProductCounter/>
     <p> <PriceCounter/> </p>
    </div>
    </>
  );
}
export default App;
