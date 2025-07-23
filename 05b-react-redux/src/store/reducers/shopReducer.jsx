
import { SOAP_SELL, SOAP_BUY } from "../actions/shopActions";

// 5. Create Mgr as "shopReducer"
const shopReducer = (state = { soap: 10 }, action) => {

    // 5.a. Now, we provide the "type of action"
    if (action.type === SOAP_SELL) {
      // return state.soap-- (INCORRECT WAY / STRONGLY NOT RECOMMENDED)
      return {
        soap: state.soap - 1
      }; 
    }
    // 5.b. Now, we provide the "type of action"
    if (action.type === SOAP_BUY) {
      return {
        // soap: state.soap + 1, // we don't provide hardcoated value
        soap: state.soap + action.payload,
      };
    }
    return state;
    // returs initial state { soap: 10 }, if no action is available
  };

  export default shopReducer