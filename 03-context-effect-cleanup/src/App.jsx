
import React, { useEffect, useState } from 'react';
import AuthContext from './context/AuthContext';
import AuthHandler from './components/AuthHandler';
import './App.css';

const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  
  useEffect(() => {
    // Recovering Auth State on Reload (checks local storage when reload the page)
    // console.log('Use Effect Called')
    const isStorageLoggedIn = localStorage.getItem('isLoggedIn') !== '0';
    setisAuthenticated(isAuthenticated)
  }, []);
  
  const onLogin = () => {
    localStorage.setItem('isLoggedIn',  '1'); // keeps login even reload the page
    setisAuthenticated(true);
  };
  
  const onLogout = () => {
    localStorage.setItem('isLoggedIn',  '0'); // keeps logout even reload the page
    setisAuthenticated(false);
  };

  return (

    <div className='App'>
      <h1>03 | Context-Effect-Cleanup</h1>
      
      <AuthContext.Provider
        value={{
          isLoggedIn: isAuthenticated,
          onLogin,
          onLogout
        }}
      >
        <AuthHandler />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
