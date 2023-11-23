import { useContext, useState } from "react"
import NewCard from "./NewCard"
import ProductTable from "./ProductTable"
import Total from "./Total"
import ProductContext from "../context/ProductContext"

function Product() {
    const context = useContext (ProductContext)
    const [list, setList] = useState([])

    const handleAddProduct = () => {
        const newItem = {
            name: context.name,
            price: context.price, 
            count: context.count,
            discount: context.discount,
            total: (context.count * context.price) - (context.discount/100*context.count*context.price )
        }
        const newList = [...list, newItem]
        setList(newList)
    }
    

    return (
        <>
            <NewCard handleAddProduct={handleAddProduct} />
            <ProductTable list={list}/>
            <Total viewList={list}/>
        </>
    )
}
export default Product;