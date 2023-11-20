import { useState } from 'react';
import Input from './input';
function PriceCounter() {
    const [price, setPrice] = useState(0);
    const handlePriceChange = (value) => { 
        if (value > -1) {
        setPrice(value); } };
        return (  
            <>
                <h2>Price is: {`$ ${price}`} </h2>
                <p><Input type="text" value={price} onChange={handlePriceChange} label="Price"/></p>
            </>
        )
}
export default PriceCounter