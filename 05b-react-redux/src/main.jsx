// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.scss';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';

// 8. Import "Provider" and "store", use them as mentioned below:
import { Provider } from 'react-redux';
import store from './store/store.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // 8.a. Provider & store usage
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// (See "Home.jsx" for more details)
