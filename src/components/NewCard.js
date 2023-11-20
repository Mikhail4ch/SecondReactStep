import styles from "./NewCard.module.css"
import Button from "./Button"
import Input from "./input"

function NewCard({
    name,
    count,
    price,
    discount,
    handleMinus,
    handlePlus,
    handleNameChange,
    handlePriceChange,
    handleAddProduct
}) {
    return (
        <div className={styles.newCard}>
            <div className={styles.name}>{name}</div>
            <div className={styles.counter}>
                <Button label="+" onClick={handlePlus} />
                <span className={styles.count}>{count}</span>
                <Button label="-" onClick={handleMinus} />
            </div>
            <div className={styles.price}>{`$ ${price}`} each</div>
            <div className={styles.discount}>{`Discount: ${discount}%`}</div>
            <div className={styles.form}>
                <Input value={name} label="Product Name" onChange={handleNameChange}/>
                <Input value={price} label="Product Price" onChange={handlePriceChange}/>
            </div>
            <Button label="Add Product" onClick={handleAddProduct} />
        </div>
    )
}

export default NewCard;