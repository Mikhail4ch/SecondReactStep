
const Total = ({ viewList }) => {
    const total = viewList.reduce((total, item) => total + (item.count * item.price) - (item.discount/100*item.count*item.price ), 0);
    const discountsavings = viewList.reduce((total, item) => total + (item.discount/100*item.count*item.price ) , 0);
    return (
    <>
    <p>  Total: {total} </p>
    <p> Discount savings: {discountsavings} </p>
    </>
    );
};
export default Total