import React, { useState } from 'react';
import { MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
// import Avatar from 'assets/img/avatar.png';
import { Link } from 'react-router-dom';
// import { FiLogIn } from 'react-icons/fi';
// import { signOut } from 'firebase/auth';
// import { auth } from 'firebase.config';
// import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
  // const [user] = useAuthState(auth);
  // const navigate = useNavigate();

  const [isMenu, setIsMenu] = useState(false);

  // const handleClick = () => {
  //   if (!user) {
  //     return;
  //   } else {
  //     setIsMenu(!isMenu);
  //   }
  // };

  const logout = async () => {};

  // toast.success('Sampai jumpa lagi 😊', {
  //   style: {
  //     borderRadius: '10px',
  //     background: '#333',
  //     color: '#fff',
  //     fontSize: '12px',
  //   },
  // });

  return (
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:py-4 md:px-16 bg-primary shadow-md'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <p className='text-headingColor text-xl font-bold'>
            <span className='text-orange-500'>Resep</span> Kita
          </p>
        </Link>

        <div className='flex items-center gap-8'>
          {/* <Toaster /> */}
          <div className='relative'>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
              >
                <Link to={'/edit-profile'}>
                  <p
                    className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                    onClick={() => setIsMenu(false)}
                  >
                    Ubah Profil
                  </p>
                </Link>

                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                >
                  Keluar <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='flex items-center justify-between md:hidden w-full h-full '>
        <Link to={'/'} className='flex items-center gap-2'>
          <p className='text-headingColor text-lg font-bold'>
            <span className='text-orange-500'>Resep</span> Kita
          </p>
        </Link>

        <div className='relative'>
          {/* {user ? (
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user.photoURL ? user.photoURL : Avatar}
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
              alt='userprofile'
              onClick={handleClick}
            />
          ) : (
            <motion.div className='text-base'>
              <Link to={'/login'} className='text-gray-600 hover:text-gray-800'>
                <FiLogIn size={25} />
              </Link>
            </motion.div>
          )} */}
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0'
            >
              <Link to={'/edit-profile'}>
                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={() => setIsMenu(false)}
                >
                  Ubah Profil
                </p>
              </Link>
              <p
                className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                onClick={logout}
              >
                Keluar <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
