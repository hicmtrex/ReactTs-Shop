import DefaultLayout from '../../components/Layouts/DefaultLayout';
import React, { FC, useContext } from 'react';
import Store from '../../store/store-context';
import { Link, useNavigate } from 'react-router-dom';
import { ProductType } from '../../data/products';

const CartPage: FC = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(Store);
  const navigate = useNavigate();
  const itemsPrice: number = cartItems.reduce(
    (acc, cur: ProductType) => Number(acc + cur.price * cur.qty),
    0
  );

  const taxPrice: number = itemsPrice * 0.07;

  const shippingPrice: number = itemsPrice >= 50 ? Number(0) : Number(15);

  const totalPrice: number =
    Number(itemsPrice) + Number(taxPrice) + Number(shippingPrice);

  return (
    <DefaultLayout>
      <div className='flex md:flex-row flex-col justify-center' id='cart'>
        {cartItems.length === 0 ? (
          <div
            className='p-4 mb-4 text-sm text-red-700 rounded-lg '
            role='alert'
          >
            <span className='font-medium'>Your Cart is Empty!</span>{' '}
            <Link to='/'>Go Ship</Link>
          </div>
        ) : (
          <div
            className='lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen'
            id='scroll'
          >
            <div className='flex items-center text-gray-500 hover:text-gray-600 cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-chevron-left'
                width={16}
                height={16}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <polyline points='15 6 9 12 15 18' />
              </svg>
              <p className='text-sm pl-2 leading-none'>Back</p>
            </div>
            <p className='text-5xl font-black leading-10 text-gray-800 pt-3'>
              Bag
            </p>
            {cartItems.map((item: ProductType) => (
              <div
                key={item._id}
                className='md:flex items-center mt-14 py-8 border-t border-gray-200'
              >
                <div className='w-1/4'>
                  <img
                    src={item.image}
                    alt='img'
                    className='w-full h-48  object-contain'
                  />
                </div>
                <div className='md:pl-3 md:w-3/4'>
                  <p className='text-xs leading-3 text-gray-800 md:pt-0 pt-4'>
                    ${item.price}
                  </p>
                  <div className='flex items-center justify-between w-full pt-1'>
                    <p className='text-base font-black leading-none text-gray-800'>
                      {item.name}
                    </p>
                    <div className='flex mr-6'>
                      <button
                        className='bg-indigo-600 text-gray-50 rounded-xl mr-2 hover:opacity-75 active:scale-110 transition-all duration-300 '
                        onClick={() => addToCart(item)}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 4v16m8-8H4'
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeFromCart(item)}
                        className='bg-indigo-600 text-gray-50 rounded-xl hover:opacity-75 active:scale-110 transition-all duration-300'
                      >
                        <svg
                          className='w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M20 12H4'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <p className='text-xs leading-3 text-gray-600 py-4'>
                    Color: Black
                  </p>
                  <p className='w-96 text leading-3 text-gray-600'>
                    qty: {item.qty}
                  </p>
                  <div className='flex items-center justify-between pt-5 pr-6'>
                    <div className='flex itemms-center'>
                      <p className='text-xs leading-3 underline text-gray-800 cursor-pointer'>
                        Add to favorites
                      </p>
                      <p className='text-xs leading-3 underline text-red-500 pl-5 cursor-pointer'>
                        Remove
                      </p>
                    </div>
                    <p className='text-base font-black leading-none text-gray-800'>
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className=' md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-1/2 '>
          <div className='flex flex-col px-14 py-20 justify-between overflow-y-auto'>
            <div>
              <p className='text-4xl font-black leading-9 text-gray-800'>
                Summary
              </p>
              <div className='flex items-center justify-between pt-16'>
                <p className='text-base leading-none text-gray-800'>Subtotal</p>
                <p className='text-base leading-none text-gray-800'>
                  ${itemsPrice.toFixed(2)}
                </p>
              </div>
              <div className='flex items-center justify-between pt-5'>
                <p className='text-base leading-none text-gray-800'>Shipping</p>
                <p className='text-base leading-none text-gray-800'>
                  ${shippingPrice}
                </p>
              </div>
              <div className='flex items-center justify-between pt-5'>
                <p className='text-base leading-none text-gray-800'>Tax</p>
                <p className='text-base leading-none text-gray-800'>
                  ${taxPrice.toFixed(2)}
                </p>
              </div>
            </div>
            <div>
              <div className='flex items-center pb-6 justify-between lg:pt-5 pt-20'>
                <p className='text-2xl leading-normal text-gray-800'>Total</p>
                <p className='text-2xl font-bold leading-normal text-right text-gray-800'>
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                disabled={cartItems.length === 0}
                onClick={() => navigate('/shipping')}
                className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </DefaultLayout>
  );
};

export default CartPage;
