import { Loader } from 'components';
import Pagination from 'components/Pagination';
import { useState } from 'react';
import { MdClear } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ListLayout({
  posts,
  title,
  pagination,
  setPagination,
  searchValue,
  setSearchValue,
  isLoading,
}) {
  const [searchData, setSearchData] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(searchData);
  };

  return (
    <>
      <div className='divide-y'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl'>
            {title}
          </h1>

          <form
            className='flex items-center relative max-w-lg'
            onSubmit={handleSearch}
          >
            <label htmlFor='search' className='sr-only'>
              Search
            </label>
            <div className='relative w-full'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <input
                type='text'
                id='search'
                name='search'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5'
                placeholder='Cari resep makanan'
                onChange={(e) => setSearchData(e.target.value)}
                value={searchData}
              />
            </div>
            <button
              type='submit'
              className='p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            {searchValue && (
              <button
                type='submit'
                className='p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300'
                onClick={() => {
                  setSearchValue('');
                  setSearchData('');
                }}
              >
                <MdClear size={20} />
                <span className='sr-only'>Clear</span>
              </button>
            )}
          </form>
        </div>
        <ul>
          {isLoading ? (
            <div className='grid place-items-center min-h-[70vh]'>
              <Loader />
            </div>
          ) : !posts || posts?.length === 0 ? (
            <div className='grid place-items-center min-h-[70vh]'>
              Data Tidak Ditemukan
            </div>
          ) : (
            posts.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <li className='py-4'>
                    <article className='gap-6 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                      <dl>
                        <dt className='sr-only'>Published on</dt>
                        <dd className='hidden text-base font-medium leading-6 text-gray-500 lg:block'>
                          <img
                            src={item?.thumb}
                            className='rounded-md object-cover'
                            alt={'Tumis kacang panjang jamur'}
                            style={{ minHeight: 150 }}
                          />
                        </dd>
                      </dl>
                      <div className='space-y-3 xl:col-span-3'>
                        <div>
                          <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                            <Link
                              to={`/blog/${item?.key}`}
                              className='text-gray-900'
                            >
                              {item?.title}
                            </Link>
                          </h3>
                          <div className='text-sm font-medium leading-6 text-gray-500'>
                            {item?.dificulty}
                          </div>
                        </div>
                        <div className='prose max-w-none text-gray-500 line-clamp-3'>
                          {`Yuk kepoin resep masakan khas Indonesia.`}
                        </div>

                        <div className='mt-auto flex flex-row-reverse items-center justify-end'>
                          <Link
                            className='group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-100 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500'
                            to={`/blog/${item?.key}`}
                          >
                            Selengkapnya
                            <span className='sr-only'>Selengkapnya</span>
                            <svg
                              className='ml-3 overflow-visible text-slate-300 group-hover:text-slate-400'
                              width='3'
                              height='6'
                              viewBox='0 0 3 6'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path d='M0 0L3 3L0 6'></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </li>
                </motion.div>
              );
            })
          )}
        </ul>
      </div>
      {pagination && !searchValue && (
        <Pagination pagination={pagination} setPagination={setPagination} />
      )}
    </>
  );
}
