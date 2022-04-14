import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer';
import Hero from '../Hero';
import Navbar from '../Navbar';

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const DefaultLayout: FC<Props> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div>
      <Navbar />
      {isHome && <Hero />}
      <main className='main py-6'>{children}</main>
      {isHome ? (
        <Footer />
      ) : (
        <footer className='mt-auto py-3'>
          <p className='text-center text-gray-700 text-1xl'>
            react ts ship &copy; 2022
          </p>
        </footer>
      )}
    </div>
  );
};

export default DefaultLayout;
