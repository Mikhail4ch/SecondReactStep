import { useContext, useState } from "react"
import NewCard from "./NewCard"
import ProductTable from "./ProductTable"
import ProductContext from "../context/ProductContext"
import Button from "./Button"
import { v4 as uuid } from 'uuid'
import styles from "./Product.module.css"

function Product() {
    const context = useContext (ProductContext)
    
    const [list, setList] = useState([]);
    const [sumTotal, setSumTotal] = useState(0);
    const [showProductTable, setShowProductTable] = useState(true);

    const blankForm = {
      index: 0,
      name: '',
      count: 0,
      price: 0,
      discount: 0,
  }
  const [form, setForm] = useState(blankForm);
  const [isEditing, setIsEditing] = useState(false);

    const handleAddProduct = () => {
        const newItem = {
            id: uuid(),
            name: context.name,
            price: context.price, 
            count: context.count,
            discount: context.discount,
            total: (context.count * context.price) - (context.discount/100*context.count*context.price )
        }
        const newList = [...list, newItem]
        setList(newList)
        const sum = sumTotal + newItem.total;
        setSumTotal(sum);
    }

    const handleProductToggle = () => {
        setShowProductTable(!showProductTable)
    }

    const handleDeleteProduct = (id) => {
        const newList = list.filter((item) => item.id !== id)
        setList(newList)

        let newTotal = 0
        newList.forEach((item) => {
            newTotal += calculateTotal(item.count, item.price, item.discount)
        })

        setSumTotal(newTotal)

    }

    const handleEditProduct = (id) => {
      const i = list.findIndex((item) => item.id === id)
      const editValues = {
        index: i,
        name: list[i].name,
        count: list[i].count,
        price: list[i].price,
        discount: list[i].discount,
      }
      setForm(editValues);
      setIsEditing(true);
  }

  const handleUpdateForm = (event, key) => {
      const value = event.target.value;
      const updatedForm = {...form, [key]: value};
      setForm(updatedForm);
  }

  const handleSubmitForm = (event) => {
      event.preventDefault();

      // Create new item and copy values from form
      const newItem = {...list[form.index]};
      console.log(newItem);
      newItem.name = form.name;
      newItem.count = form.count;
      newItem.price = form.price;
      newItem.discount = form.discount;
      newItem.total = calculateTotal(form.count, form.price, form.discount)

      // Copy current list and replace edited item
      const newList = [...list];
      newList[form.index] = newItem;
      setList(newList);

      // Remove the total sum and replace with the new total
      const newSum = sumTotal - list[form.index].total + newItem.total;
      setSumTotal(newSum);

      setIsEditing(false);
    }


    
    function calculateTotal (count,price,discount) {
        return (count*price*(100-discount)/100)
    }

    return (
      
          <div className={styles.container}>
            <NewCard handleAddProduct={handleAddProduct} />
            <Button label ="Toggle List" onClick={handleProductToggle}/>
            {showProductTable && 
                <ProductTable
                    list={list} 
                    sum={sumTotal} 
                    handleDeleteProduct={handleDeleteProduct}
                    handleEditProduct={handleEditProduct}
                />
             }
             {isEditing && 
                <form className={styles.form} onSubmit={handleSubmitForm}>
                    <table className={styles.table}>
                    <thead>
                        <tr>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Disc %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <input value={form.name} type='text'
                            onChange={(e) => handleUpdateForm(e, 'name')} />
                        </td>
                        <td>
                            <input value={form.count} type='number' min={1}
                            onChange={(e) => handleUpdateForm(e, 'count')} />
                        </td>
                        <td>
                            <input value={form.price} type='number' min={0} step={0.01}
                            onChange={(e) => handleUpdateForm(e, 'price')} />
                        </td>
                        <td>
                            <input value={form.discount} type='number' min={0}
                            onChange={(e) => handleUpdateForm(e, 'discount')} />
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <input type='submit' />
                    <Button label='Cancel' onClick={() => setIsEditing(false)} />
                </form>
            }
        </div>
        
    )
}

export default Product;