import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [data, setData] = useState('');
  const [data1, setData1] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    console.log('USE EFFECT');

    const timeout = setTimeout(() => {
      console.log('USE EFFECT ==> SetTimeout');
      setIsValid(data.length >= 5);
    }, 2000);
 
    // -------------------------------------
    //  UseEffect CleanUp Function
    // -------------------------------------
    return () => {
      clearTimeout(timeout);
    }
  }, [data]);
    // -------------------------------------

  const onTextChangeHandler = (event) => {
    // console.log(event);
    setData(event.target.value);
    // validate();
  };

  const onTextChangeHandler1 = (event) => {
    // console.log(event);
    setData1(event.target.value);
    // validate();
  };

  // const validate = () => {
  //   console.log('VALIDATING')
  //   setIsValid(data.length >= 4);
  // };

  const authCtx = useContext(AuthContext);

  return (
    <div>
      <input type='text' onChange={onTextChangeHandler} value={data} />
      <br />
      {isValid ? 'Valid' : 'Invalid'}
      <br />

      <input type='text' onChange={onTextChangeHandler1} value={data1} />
      <br />
      {isValid ? 'Valid' : 'Invalid'}
      <br />

      <button onClick={authCtx.onLogin}>Login</button>
    </div>
  );
};

export default Login;
