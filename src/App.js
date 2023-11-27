import './App.css';
import Container from './components/Container';
import Counter from './components/Count';
import ProductCounter from './components/product';
import PriceCounter from './components/price';
import Product from './components/Product2';
import { ProductProvider } from './context/ProductContext';
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
     <ProductProvider>
     <Product/> 
     </ProductProvider>
    </div>
    </>
  );
}
export default App;
