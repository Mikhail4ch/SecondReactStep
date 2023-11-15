import { useState } from 'react';
import Input from './input';
import Button from "./Button";
function ProductCounter() {
    const [product, setProduct] = useState(
        {
            name: "Oranges",
            count: 0,
        }
    );

    const handleMinus = () => {
        setProduct((prevProduct) => {
            return {
                ...prevProduct,
                count: prevProduct.count - 1
            }
        })
    }

    const handlePlus = () => {
        setProduct((prevProduct) => {
            return {
                ...prevProduct,
                count: prevProduct.count + 1
            }
        })

    }

    const handleNameChange = (value) => {
        setProduct((prevProduct) => {
            return {
                ...prevProduct,
                name: value
            }
        })
    }

    return (  
        <>
            <h2> Fruits: {product.name}</h2>
            <Button onClick={handleMinus} label='-'/>
            <span>{product.count}</span>
            <Button onClick={handlePlus} label='+'/>
            <Input type="text" value={product.name} onChange={handleNameChange} label="Fruits Name"/>
        </>
    )
} 
export default ProductCounter
