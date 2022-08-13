import React from 'react';
import { Link } from 'react-router-dom';
// import LoadingIcon from 'assets/icons/loading';
// import toast, { Toaster } from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';

const Login = () => {
  const loginWithCredentials = async (e) => {
    e.preventDefault();

    return;
  };

  // toast.error(errorMessage, {
  //   style: {
  //     borderRadius: '10px',
  //     background: '#333',
  //     color: '#fff',
  //     fontSize: '12px',
  //   },
  // });

  return (
    <section className='grid place-items-center'>
      <div className='container py-0 px-0 h-full min-h-[95vh]'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className='xl:w-10/12'>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='lg:w-6/12 px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6 pt-8'>
                    <div className='text-center'>
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                        Firebase Authentication
                      </h4>
                    </div>

                    {/* <Toaster /> */}
                    <form onSubmit={loginWithCredentials}>
                      <p className='mb-2'>Silahkan masuk ke akun anda</p>
                      <div className='mb-4'>
                        <input
                          type='text'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          id='email'
                          placeholder='Email'
                        />
                      </div>
                      <div className='mb-4'>
                        <input
                          type='password'
                          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          id='password'
                          placeholder='Password'
                        />
                      </div>
                      <div className='text-center pt-1 pb-1'>
                        <button
                          className='inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                          style={{
                            background:
                              'linear-gradient(to right, #ee7724,#d8363a, #dd3675,#b44593)',
                          }}
                          // disabled={loading}
                        >
                          {/* {loading && <LoadingIcon />} Masuk */}
                          Masuk
                        </button>
                      </div>
                      <div className='flex items-center justify-between pb-6'>
                        <p className='mb-0 mr-2'>Belum punya akun?</p>
                        <Link to='/register'>Daftar</Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className='lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'
                  style={{
                    background:
                      'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}
                >
                  <div className='text-white px-4 py-6 md:p-12 md:mx-6'>
                    <h4 className='text-xl font-semibold mb-6'>Quotes</h4>
                    <p className='text-sm mb-6'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Delectus consectetur provident enim vero odio maiores
                      minus ipsam perspiciatis voluptas? Quaerat ratione quae
                      dolores corrupti, nesciunt dolorem esse adipisci nemo
                      architecto.
                    </p>

                    <div>
                      <Link
                        to={'/'}
                        className='flex items-center gap-1 text-sm'
                      >
                        <BiArrowBack /> Kembali ke beranda
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
