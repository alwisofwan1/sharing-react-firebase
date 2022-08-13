import React from 'react';
import Loader from './Loader';

const KWLoader = () => {
  return (
    <div className='min-h-[96vh] grid place-items-center content-center gap-2'>
      <div className='text-headingColor text-xl font-bold'>
        <span className='text-orange-500'>Koding</span> Works
      </div>
      <Loader width='25px' />
    </div>
  );
};

export default KWLoader;
