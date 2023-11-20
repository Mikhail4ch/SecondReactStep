import { useState } from "react"
import NewCard from "./NewCard"
import ProductTable from "./ProductTable"
import Total from "./Total"

function Product() {

    const [count, setCount] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [name, setName] = useState('Banana')
    const [price, setPrice] = useState(2);

    const [list, setList] = useState([])

    const handleMinus = () => {
        setCount((prevCount) => {
            let count = prevCount -1
            if (count < 5) {
                setDiscount(0)
            }
            return count;
        });
    }

    const handlePlus = () => {
        setCount((prevCount) => {
            let count = prevCount + 1
            if (count >= 5) {
                setDiscount(20)
            }
            return count;
        })
    }

    const handleNameChange = (value) => {
        setName(value)
    }

    const handlePriceChange = (value) => {
        setPrice(value)
    }

    const handleAddProduct = () => {
        const newItem = {
            name: name,
            price: price, 
            count: count,
            discount: discount,
            total: (count * price) - (discount/100*count*price )
        }
        const newList = [...list, newItem]
        setList(newList)
    }
    

    return (
        <>
            <NewCard 
                count={count}
                name={name}
                price={price}
                discount={discount}
                handleAddProduct={handleAddProduct}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
                handleNameChange={handleNameChange}
                handlePriceChange={handlePriceChange}
            />
            <ProductTable list={list}/>
            <Total viewList={list}/>
        
        </>
    )
}
export default Product;