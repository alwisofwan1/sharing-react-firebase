/* eslint-disable no-empty-pattern */
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import MainContainer from 'containers/MainContainer';
import Login from 'containers/auth/Login';
import Register from 'containers/auth/Register';
import NotFound from 'containers/NotFound';
import KWLoader from 'components/KWLoader';
import { motion } from 'framer-motion';
import Footer from 'components/Footer';
import Blog from 'containers/Blog';
import BlogDetail from 'containers/BlogDetail';

const App = () => {
  const [{ loadingData }, dispatch] = useStateValue();

  const location = useLocation();
  const isPathLogin = location.pathname === '/login';
  const isPathRegister = location.pathname === '/register';

  const isAuthPage = isPathLogin || isPathRegister;

  // Set intial loading
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: actionType.SET_LOADING_DATA,
        loadingData: false,
      });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {loadingData ? (
        <KWLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`w-screen h-auto flex flex-col ${
            isAuthPage ? 'bg-[#f8f8ff]' : 'bg-primary'
          }`}
        >
          {isAuthPage ? null : <Header />}

          <main
            className={`${
              isAuthPage ? 'mt-0 md:mt-0' : 'mt-14 md:mt-20'
            } px-4 md:px-16 py-4 w-full max-w-[1400px] my-0 mx-auto`}
          >
            <Routes>
              <Route path='/' element={<MainContainer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:key' element={<BlogDetail />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
