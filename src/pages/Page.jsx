import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_BASE = 'https://gomostaging.com/looklet-com/wp-json/wp/v2/pages';

const Page = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_BASE}?slug=${slug}`)
      .then((res) => {
        if (res.data.length > 0) {
          setPage(res.data[0]);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) return <div className="p-8 text-red-500">Page Not Found</div>;
  if (!page) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} className="prose" />
    </div>
  );
};

export default Page;
