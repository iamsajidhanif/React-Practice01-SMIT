import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Home from './Home';
import Login from './Login';

const AuthHandler = () => {
  const authCtx = useContext(AuthContext);

  return <div>{authCtx.isLoggedIn ? <Home /> : <Login />}</div>;
};

export default AuthHandler;
