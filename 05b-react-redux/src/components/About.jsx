
// import React from 'react';
// import { Link } from 'react-router';
// import { useState, useEffect } from 'react';

// const About = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const result = await response.json();
//     setPosts(result);
//   });

//   const data = posts.map((post) => {
//     return (
//       <div>
//         {/* data not showing properly */}
//         Title: {post.title}, Body: {post.body} 
//       </div>
//     );
//   });

//   return (
//     <>
//       <div>
//         About <br />
//         <Link to='/'>Home</Link>
//       </div>
//       {/* data not showing properly */}
//       <div>{data}</div> 
//     </>
//   );
// };

// export default About;
