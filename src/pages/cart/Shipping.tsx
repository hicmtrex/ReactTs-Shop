import React, { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layouts/DefaultLayout';
import { LockClosedIcon } from '@heroicons/react/solid';
import Store from '../../store/store-context';
import { useNavigate } from 'react-router-dom';

export type UserAddress = {
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

const Shipping = () => {
  const { saveAddress, shippingAddress } = useContext(Store);
  const navigate = useNavigate();
  const [state, setState] = useState<UserAddress>({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveAddress({
      address: state.address,
      city: state.city,
      postalCode: state.postalCode,
      country: state.country,
    });
    navigate('/checkout');
  };

  useEffect(() => {
    if (shippingAddress) {
      navigate('/checkout');
    }
  }, [shippingAddress]);

  return (
    <DefaultLayout>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 shadow p-5 bg-gray-50 rounded-md'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Shipping Address
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={onSubmit}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='address' className='sr-only'>
                  Address
                </label>
                <input
                  id='address'
                  name='address'
                  type='text'
                  required
                  className='auth__input'
                  placeholder='Address'
                  value={state.address}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor='city' className='sr-only'>
                  City
                </label>
                <input
                  id='city'
                  name='city'
                  type='text'
                  required
                  className='auth__input mt-2'
                  placeholder='City'
                  value={state.city}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor='postalCode' className='sr-only'>
                  Postal Code
                </label>
                <input
                  id='postalCode'
                  name='postalCode'
                  type='text'
                  required
                  className='auth__input mt-2'
                  placeholder='postal Code'
                  value={state.postalCode}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor='country' className='sr-only'>
                  City
                </label>
                <input
                  id='country'
                  name='country'
                  type='text'
                  required
                  className='auth__input mt-2'
                  placeholder='Country'
                  value={state.country}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Shipping;
