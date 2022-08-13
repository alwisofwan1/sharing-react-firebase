import { Loader } from 'components';
import PostLayout from 'components/blog/PostLayout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BlogDetail() {
  const { key } = useParams();

  const baseUrl = 'https://masak-apa-tomorisakura.vercel.app';
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getRecipeDetail = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/recipe/${key}`);
      const data = await response.json();
      setIsLoading(false);

      const { results } = data;
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    key && getRecipeDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Handle buat scroll to top ketika loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className='grid place-items-center min-h-[75vh]'>
          <Loader />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <PostLayout data={data} />
        </motion.div>
      )}
    </>
  );
}
