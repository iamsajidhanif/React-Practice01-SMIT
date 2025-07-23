// 1. Require Redux
const redux = require('redux');

// 3. Create Store Manager (shopReducer) for Store
// a. Redux provide "state" (current store details) as 1st argument
// b. We assign "action" (task) as 2nd argument
// c. We provide initial state { soap: 10 }
const shopReducer = (state = { soap: 10 }, action) => {

  // 6.a. Now, we provide the "type of action"
  if (action.type === 'SOAP_SELL') {
    // return state.soap-- (INCORRECT WAY / STRONGLY NOT RECOMMENDED)
    return {
      soap: state.soap - 1,
    }; 
  }
  // 6.b. Now, we provide the "type of action"
  if (action.type === 'SOAP_BUY') {
    return {
      // soap: state.soap + 1, // we don't provide hardcoated value here
      soap: state.soap + action.payload,
    };
  }
  return state;
  // returs initial state { soap: 10 }, if no action is available
};

// 2. Create Store (it returns Store) and depute Mgr (shopReducer)
const store = redux.createStore(shopReducer);

// 4.b. This function is needed by store.subcribe method:
const subscription = () => {
  const state = store.getState(); // we get store data in "state"
   console.log(state); // 
};

// 4.a. We get current state of the Store by using a method (subscribe)
store.subscribe(subscription);

// 5. Reduc perform below mentioned actions
store.dispatch({ type: ''}); // just for checking
store.dispatch({ type: 'SOAP_SELL' });
store.dispatch({ type: 'SOAP_BUY', payload: 10  });


// NOTE: We run below command to check output in terminal:
// node index.jsx