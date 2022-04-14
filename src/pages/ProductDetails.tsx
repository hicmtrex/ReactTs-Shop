import DefaultLayout from '../components/Layouts/DefaultLayout';
import React, { FC, useContext, useState } from 'react';
import { newProduct } from '../data/products';
import { useNavigate, useParams } from 'react-router-dom';
import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/solid';
import { ProductType } from '../data/products';
import Store from '../store/store-context';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

const ProductDetails: FC = () => {
  const [menu, setMenu] = useState(false);
  const { id } = useParams();
  const product = newProduct.find((p) => p._id === id);
  const [selectedColor, setSelectedColor] = useState(product?.color[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[2]);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(Store);

  const addClick = (p: ProductType) => {
    addToCart(p);
    navigate('/cart');
  };

  const changeText = (e: React.FormEvent) => {
    setMenu(false);
    //setCountry(e.target.value);
  };

  if (!product) return <p>loading...</p>;

  return (
    <DefaultLayout>
      <div className='mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        <div className=' aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block'>
          <img
            className='w-full h-full object-center object-cover'
            src={product?.images[0]}
          />
        </div>
        <div className=' lg:grid lg:grid-cols-1 lg:gap-y-8'>
          <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
            <img
              className='w-full h-full object-center object-cover'
              src={product?.images[1]}
            />
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-1'>
          <div className='mt-4 lg:mt-0 lg:row-span-3'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl text-gray-900'>${product?.price}</p>
            {/* Reviews */}
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? 'text-gray-900'
                          : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='sr-only'>{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <form className='mt-10' onSubmit={(e) => e.preventDefault()}>
              {/* Colors */}
              <div>
                <h3 className='text-sm text-gray-900 font-medium'>Color</h3>
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className='mt-4'
                >
                  <RadioGroup.Label className='sr-only'>
                    Choose a color
                  </RadioGroup.Label>
                  <div className='flex items-center space-x-3'>
                    {product?.color.map((c) => (
                      <RadioGroup.Option
                        key={c}
                        style={{ backgroundColor: c }}
                        value={c}
                        className={`m-0.5 relative bg- p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none `}
                      >
                        <RadioGroup.Label as='p' className='sr-only'>
                          {c}
                        </RadioGroup.Label>
                        <span
                          aria-hidden='true'
                          className={
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          }
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              {/* Sizes */}

              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm text-gray-900 font-medium'>Size</h3>
                  <a className='text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                    Size guide
                  </a>
                </div>
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className='mt-4'
                >
                  <RadioGroup.Label className='sr-only'>
                    Choose a size
                  </RadioGroup.Label>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    {product?.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as='p'>
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-indigo-500'
                                    : 'border-transparent',
                                  'absolute -inset-px rounded-md pointer-events-none'
                                )}
                                aria-hidden='true'
                              />
                            ) : (
                              <div
                                aria-hidden='true'
                                className='absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none'
                              >
                                <svg
                                  className='absolute inset-0 w-full h-full text-gray-200 stroke-2'
                                  viewBox='0 0 100 100'
                                  preserveAspectRatio='none'
                                  stroke='currentColor'
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect='non-scaling-stroke'
                                  />
                                </svg>
                              </div>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              <button
                onClick={() => addClick(product)}
                className='mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Product Info */}

      <div className='max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-5 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8'>
        <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
          <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
            {product?.name}
          </h1>
        </div>
        {/* Options */}

        <div className=' lg:pt-6 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
          {/* Description and details */}
          <div>
            <h3 className='sr-only'>Description</h3>
            <div className='space-y-6'>
              <p className='text-base text-gray-900'>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetails;
