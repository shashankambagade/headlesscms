import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(res => setPosts(res.data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.slug}`} className="text-blue-500 hover:underline">
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
      {/* <h2 className="text-3xl font-bold mb-6">Page list</h2> */}

    </div>
  );
};

export default Home;