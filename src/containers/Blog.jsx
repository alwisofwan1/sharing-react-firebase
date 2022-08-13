import ListLayout from 'components/blog/ListLayout';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const baseUrl = 'https://masak-apa-tomorisakura.vercel.app';

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataBySearch, setDataBySearch] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getAllRecipes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/recipes/${page}`);
      const data = await response.json();
      setIsLoading(false);

      const { results } = data;
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  const getRecipesBySearch = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/search/?q=${searchValue}`);
      const data = await response.json();
      setIsLoading(false);
      const { results } = data;
      setDataBySearch(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchValue) {
      getRecipesBySearch();
    } else {
      getAllRecipes();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchValue]);

  return (
    <div>
      <ListLayout
        posts={searchValue ? dataBySearch : data}
        pagination={page}
        setPagination={setPage}
        title='Blog'
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Blog;
