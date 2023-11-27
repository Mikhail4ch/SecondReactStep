/**import styles from "./Total.module.css"
const Total = ({ viewList }) => {
    const total = viewList.reduce((total, item) => total + (item.count * item.price) - (item.discount/100*item.count*item.price ), 0);
    const discountsavings = viewList.reduce((total, item) => total + (item.discount/100*item.count*item.price ) , 0);
    return (
    <>
    <div className={styles.p} >
    <p>  Total: {total} </p>
    <p> Discount savings: {discountsavings.toFixed(1)} </p>
    </div>
    </>
    );
};
export default Total
*/