export const defaultProduct = {
    count: 1,
    discount: 0,
    name: "Banana",
    price: 2
}

export function productReducer(state, action) {
 
    switch(action.type) {
    case "COUNT_MINUS" : {
       let newState = {...state}
       newState.count = state.count - 1 
       if (newState < 5) {
        newState.discount = 0
       }
       return newState
    }
    case "COUNT_PLUS" : {
        let newState = {...state}
       newState.count = state.count + 1 
       if (newState >= 5) {
        newState.discount = 20
       }
       return newState
    }
    case "SET_NAME" : {
        return {...state, name: action.name}
    }
    case "SET_PRICE" : {
        return {...state, price: action.price}
    }
    default:
        throw Error ("action not defined")
 }
}

