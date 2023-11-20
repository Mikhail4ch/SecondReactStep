import styles from "./ProductTable.module.css"

function ProductTable({ list }) {
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discount %</th>
                        <th> Total </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                            <td>{item.discount}</td>
                            <td>{item.total}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ProductTable;