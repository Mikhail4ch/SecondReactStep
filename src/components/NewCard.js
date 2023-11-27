import styles from "./NewCard.module.css"
import Button from "./Button"
import Input from "./input"
import { useContext } from "react"
import ProductContext from "../context/ProductContext"

function NewCard({handleAddProduct}) {
    const context = useContext (ProductContext)
    return (
        <div className={styles.newCard}>
            <div className={styles.name}>{context.name}</div>
            <div className={styles.counter}>
                <Button label="+" onClick={context.handlePlus} />
                <span className={styles.count}>{context.count}</span>
                <Button label="-" onClick={context.handleMinus} />
            </div>
            <div className={styles.price}>{`$ ${context.price}`} each</div>
            <div className={styles.discount}>{`Discount: ${context.discount}%`}</div>
            <div className={styles.form}>
                <Input value={context.name} label="Product Name" onChange={context.handleNameChange}/>
                <Input value={context.price} label="Product Price" onChange={context.handlePriceChange}/>
            </div>
            <Button label="Add Product" onClick={handleAddProduct} />
        </div>
    )
}

export default NewCard;