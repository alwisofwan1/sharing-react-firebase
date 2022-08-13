export default function Pagination({ pagination, setPagination }) {
  const prevPage = parseInt(pagination) - 1 > 0;
  const nextPage = parseInt(pagination) + 1;

  return (
    <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
      <nav className='flex justify-between'>
        {!prevPage && (
          <button
            rel='previous'
            className='cursor-auto disabled:opacity-50'
            disabled={!prevPage}
          >
            Sebelumnya
          </button>
        )}
        {prevPage && (
          <button rel='previous' onClick={() => setPagination(pagination - 1)}>
            Sebelumnya
          </button>
        )}
        <span>{pagination}</span>
        {!nextPage && (
          <button
            rel='next'
            className='cursor-auto disabled:opacity-50'
            disabled={!nextPage}
          >
            Berikutnya
          </button>
        )}
        {nextPage && (
          <button rel='next' onClick={() => setPagination(pagination + 1)}>
            Berikutnya
          </button>
        )}
      </nav>
    </div>
  );
}
