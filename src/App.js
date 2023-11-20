import './App.css';
import Container from './components/Container';
import Counter from './components/Count';
import ProductCounter from './components/product';
import PriceCounter from './components/price';
import Product from './components/Product2';
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
     <hr/>
     <Product/> 
    </div>
    </>
  );
}
export default App;
