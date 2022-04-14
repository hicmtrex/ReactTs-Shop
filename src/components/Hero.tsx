import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className='bg-gray-800 text-gray-100'>
      <div className='container__app  '>
        <div className='sm:max-w-lg'>
          <h1 className='text-4xl font font-extrabold tracking-tight  sm:text-6xl'>
            Summer styles are finally here
          </h1>
          <p className='mt-4 text-xl '>
            This year, our new summer collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
        </div>
        <div>
          <div className=' my-48'>
            {/* Decorative image grid */}
            <div
              aria-hidden='true'
              className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
            >
              <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                <div className='flex items-center space-x-6 lg:space-x-8'>
                  <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                    <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                    <div className='w-44 h-64 rounded-lg overflow-hidden'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                  </div>
                  <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                    <div className='w-44 h-64 rounded-lg overflow-hidden'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                        alt=''
                        className='w-full mt-10 h-full object-center object-cover'
                      />
                    </div>
                    <div className='w-44 h-64 rounded-lg overflow-hidden'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                    <div className='w-44 h-64 rounded-lg overflow-hidden'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                  </div>
                  <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                    <div className='w-44 h-64 rounded-lg overflow-hidden'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                    <div className='w-44 h-64 rounded-lg overflow-hidden'>
                      <img
                        src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                        alt=''
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href='#'
              className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
