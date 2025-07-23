import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import Card from './Card';

const About = () => {
  const [posts, setPosts] = useState([]);

  // useEffect(async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const result = await response.json();
  //   setPosts(result);
  // }, []);

  // OR

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log('Error in fetching data:', error));
  }, []);

  console.log(posts);

  return (
    <>
      <div>
        About <br />
        <Link to='/'>Home</Link>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts.map((data, index) => {
          return (
            <Card
            key={index}
            id={data.id}
            title={data.title}
            body={data.body}
            />

            // <div>
            //   <b>Id:</b> {data.id} <br />
            //   <b>Title:</b> {data.title} <br />
            //   <b>Body:</b> {data.body} <br /> <br />
            // </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
