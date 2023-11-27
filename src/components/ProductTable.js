import styles from "./ProductTable.module.css"

function ProductTable({ list, sum,  handleDeleteProduct, handleEditForm, handleEditProduct }) {
    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Discount %</th>
                        <th> Total </th>
                        <th> Delete </th>
                        <th> Edit </th>
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
                            <td onClick={() => handleDeleteProduct(item.id)}>❌</td>
                            <td onClick={() => handleEditProduct(item.id)}>📝</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.containerSum}>
                Total sum: <span className={styles.sum}>{sum.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ProductTable;