import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"

 

 const initialStates = {
     cartData : []
 }
 export default function cartItems ( state=[], action) {
     switch(action.type){
         case ADD_TO_CART: 
           console.log("reducer called", action)
             return[
                 ...state,
                 {cartData:action.payload}
             ]
           break;

           case REMOVE_TO_CART: 
           console.log(" Remove reducer called", action)
              state.pop();
             return[
                 ...state,
             ]
           break;
        
        default: 
           return state;
     }
 }