import React, { FC } from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import Product from '../components/Product';
import { newProduct } from '../data/products';

const HomePage: FC = () => {
  return (
    <DefaultLayout>
      <div className='container__app'>
        <div className='row__app'>
          {newProduct.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
