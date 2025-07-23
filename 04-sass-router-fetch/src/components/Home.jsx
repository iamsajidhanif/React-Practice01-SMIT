
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { useState } from 'react';

const Home = () => {
  const [data, setData] = useState({});
  
  // const { userId, title, completed } = data;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  return (
    <>
      <div>
        <h1>04 | SASS-Router-Fetch</h1>
        Home <br />
        
        <NavLink 
        to='/about'
        className={(e)=> {return e.isActive ? 'blue' : ''}}
        >About</NavLink> <br />

        <NavLink 
        to='invoices/123'
        className={(e)=> {return e.isActive ? 'blue' : ''}}
        >My Invoice</NavLink>

      </div>
      <div>
        <b>UserId:</b> {data.userId}, <b>Title:</b> {data.title}, <b>Completed:</b> {data.completed}
      </div>
    </>
  );
};

export default Home;
