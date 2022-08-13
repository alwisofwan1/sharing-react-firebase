import { Link } from 'react-router-dom';

export default function PostLayout({ data }) {
  return (
    <div className='mx-auto max-w-4xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <article>
        <div className='xl:divide-y xl:divide-gray-200'>
          <header className='pt-6 xl:pb-6'>
            <div className='space-y-1 text-center'>
              <dl className='space-y-10'>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-base font-medium leading-6 text-gray-500'>
                    {data?.author?.datePublished}
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className='text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14'>
                  {data?.title}
                </h1>
              </div>
            </div>
          </header>
          <div
            className='divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0'
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className='pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11'>
              <dt className='sr-only'>Authors</dt>
              <dd>
                <ul className='flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8'>
                  <li className='flex items-center space-x-2'>
                    <dl className='whitespace-nowrap text-sm font-medium leading-5'>
                      <dt className='sr-only'>Name</dt>
                      <dd className='text-gray-900'>
                        <div>
                          <h2 className='mb-1 text-xs uppercase tracking-wide text-gray-500'>
                            Diterbitkan Oleh:
                          </h2>
                          <div className='flex justify-center xl:justify-start xl:flex xl:flex-wrap'>
                            {data?.author?.user}
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl>
            <div className='divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0'>
              <div className='prose max-w-none pt-10 pb-8'>
                {data?.thumb && (
                  <figure className='w-full mb-5'>
                    <div className='relative overflow-hidden'>
                      <img src={data?.thumb} alt='' loading='lazy' />
                    </div>
                  </figure>
                )}

                <div dangerouslySetInnerHTML={{ __html: data?.desc }} />

                <div className='mt-3'>
                  <h2 className='font-semibold text-lg mb-2'>
                    Bahan yang digunakan
                  </h2>

                  <ul className='list-disc ml-5'>
                    {data?.ingredient?.map((item, index) => (
                      <li key={index} className='leading-relaxed'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mt-3'>
                  <h2 className='font-semibold text-lg mb-2'>Cara Membuat</h2>

                  <ul className='list-disc ml-5'>
                    {data?.step?.map((item, index) => (
                      <li key={index} className='leading-relaxed'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <footer>
              <div className='divide-gray-200 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y'>
                <div className='py-4 xl:py-8'>
                  <h2 className='mb-1 text-xs uppercase tracking-wide text-gray-500'>
                    Yang harus disiapkan:
                  </h2>
                  <div className='flex flex-wrap'>
                    {data?.needItem?.map((item) => item.item_name).join(', ') ||
                      '-'}
                  </div>
                </div>
                <div className='py-4 xl:py-8'>
                  <h2 className='mb-1 text-xs uppercase tracking-wide text-gray-500'>
                    Tingkat Kesulitan:
                  </h2>
                  <div className='flex flex-wrap'>{data?.dificulty}</div>
                </div>
                <div className='py-4 xl:py-8'>
                  <h2 className='mb-1 text-xs uppercase tracking-wide text-gray-500'>
                    Durasi:
                  </h2>
                  <div className='flex flex-wrap'>{data?.times}</div>
                </div>
              </div>
              <div className='pt-4 xl:pt-8'>
                <Link
                  to='/blog'
                  className='text-primary-500 hover:text-primary-600'
                >
                  &larr; Kembali ke blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}
