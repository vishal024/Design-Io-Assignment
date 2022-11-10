import { ADD_TO_CART, REMOVE_TO_CART} from "../constants"

export const addToCart = (data) =>{
    console.log("Actions called", data);
    return {
        type: ADD_TO_CART,
        payload : data
    }
}

export const removeToCart = () =>{
    console.log(" remove Actions called");
    return {
        type: REMOVE_TO_CART,
    }
}