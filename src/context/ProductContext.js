import { createContext, useReducer } from "react";
import { productReducer, defaultProduct } from "../reducer/ProductReducer";

const ProductContext = createContext()

export function ProductProvider ({children}) {
    const [state, dispatch] = useReducer(productReducer, defaultProduct)
    const handleMinus = () => {
        dispatch({type: "COUNT_MINUS"})
    }

    const handlePlus = () => {
        dispatch({type: "COUNT_PLUS"})
    }

    const handleNameChange = (value) => {
        dispatch ({type: "SET_NAME", name: value})
    }

    const handlePriceChange = (value) => {
        dispatch ({type: "SET_PRICE", name: value})
    }

    const context = {
        count: state.count,
        price: state.price,
        discount: state.discount,
        name: state.name,
        handleMinus: handleMinus,
        handlePlus: handlePlus,
        handleNameChange: handleNameChange,
        handlePriceChange: handlePriceChange
    }

    return (
        <ProductContext.Provider value={context}> 
        {children}
        </ProductContext.Provider>
    )
}
export default ProductContext;