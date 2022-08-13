import React from 'react';
import CardContainer from './CardContainer';
// import { useSearch } from 'context/search/use-search';
// import { useSearchable } from 'utils/use-searchable';

const MenuContainer = () => {
  // const baseUrl = 'https://masak-apa-tomorisakura.vercel.app';

  // const { searchTerm } = useSearch();
  // const searchableItems = useSearchable(data, searchTerm, (item) => [
  //   item.category,
  //   item.title,
  // ]);

  return (
    <section className='w-full my-6' id='menu'>
      <div className='w-full flex flex-col items-center justify-center'>
        <p className='text-2xl mb-8 font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>
          Resep Makanan
        </p>

        <div className='w-full'>
          {/* <CardContainer flag={false} data={searchableItems} /> */}
          <CardContainer />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
