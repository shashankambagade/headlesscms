import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostBySlug } from '../services/api';

const SinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostBySlug(slug).then(res => {
      setPost(res.data[0]);
    });
  }, [slug]);

  if (!post) return  <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'><p>Loading...</p></div>;

  return (
     <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
      <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
};

export default SinglePost;