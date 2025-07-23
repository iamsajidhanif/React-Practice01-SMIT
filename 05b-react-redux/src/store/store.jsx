
// 1. Create a folder "store" in "src" folder
// 1.a. Create a file "store.jsx" in "store" folder

// 2. Create a folder "actions" in "store" folder
// 2.a. Create a file "shopActions.jsx" in "actions" folder

// 3. Create a folder "reducers" in "store" folder
// 3.a. Create a file "shopReducer.jsx" in "reducers" folder

// 4. Import "redux" for creating store
import {createStore} from 'redux';

// 5. Import "shopReducer" as Mgr
import shopReducer from './reducers/shopReducer'

// 6. Create "store" and pass "shopReducer" as Mgr
const store = createStore(shopReducer);

// 7. export default
export default store;

// (See "main.jsx" for more details)