import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  const { isAuthenticated, loginWithPopup, logout, user } = useAuth0();
  return (
    <>
      <div className='bg-gray-200 h-full w-full'>
        {/* Code block starts */}
        <nav className='bg-white shadow xl:block hidden'>
          <div className='mx-auto container px-6 py-2 xl:py-0'>
            <div className='flex items-center justify-between'>
              <div className='inset-y-0 left-0 flex items-center xl:hidden'>
                <div className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out'>
                  <div className='visible xl:hidden'>
                    <ul className='p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden'>
                      <li className='flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                        <div className='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-grid'
                            width={20}
                            height={20}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                          <span className='ml-2 font-bold'>Dashboard</span>
                        </div>
                      </li>
                      <li className='flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center'>
                        <div className='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-puzzle'
                            width={20}
                            height={20}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
                          </svg>
                          <span className='ml-2 font-bold'>Products</span>
                        </div>
                      </li>
                      <li className='flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-compass'
                          width={20}
                          height={20}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <polyline points='8 16 10 10 16 8 14 14 8 16' />
                          <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className='ml-2 font-bold'>Performance</span>
                      </li>
                      <li className='border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='icon icon-tabler icon-tabler-code'
                          width={20}
                          height={20}
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path stroke='none' d='M0 0h24v24H0z' />
                          <polyline points='7 8 3 12 7 16' />
                          <polyline points='17 8 21 12 17 16' />
                          <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className='ml-2 font-bold'>Deliverables</span>
                      </li>
                      <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'>
                        <div className='flex items-center'>
                          <div className='w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out'>
                            <img
                              className='rounded h-10 w-10 object-cover'
                              src='https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png'
                              alt='logo'
                            />
                          </div>
                          <p className='text-sm ml-2 cursor-pointer'>
                            Jane Doe
                          </p>
                          <div className='sm:ml-2 text-white relative'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='icon icon-tabler icon-tabler-chevron-down cursor-pointer'
                              width={20}
                              height={20}
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='currentColor'
                              fill='none'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <path stroke='none' d='M0 0h24v24H0z' />
                              <polyline points='6 9 12 15 18 9' />
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                        <div className='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-user'
                            width={20}
                            height={20}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <circle cx={12} cy={7} r={4} />
                            <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                          </svg>
                          <span className='ml-2'>Profile</span>
                        </div>
                      </li>
                    </ul>
                    <svg
                      aria-haspopup='true'
                      aria-label='Main Menu'
                      xmlns='http://www.w3.org/2000/svg'
                      className='show-m-menu icon icon-tabler icon-tabler-menu'
                      width={28}
                      height={28}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                  <div className='hidden close-m-menu text-gray-700'>
                    <svg
                      aria-label='Close'
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start'>
                <div className='flex items-center'>
                  <svg
                    aria-label='Home'
                    id='logo'
                    enableBackground='new 0 0 300 300'
                    height={44}
                    viewBox='0 0 300 300'
                    width={43}
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                  >
                    <g>
                      <path
                        fill='#4c51bf'
                        d='m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z'
                      />
                    </g>
                  </svg>
                  <Link to='/'>
                    <h2 className='hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3'>
                      Ts Shop
                    </h2>
                  </Link>
                </div>
              </div>
              <div className='flex'>
                <div className='hidden xl:flex md:mr-6 xl:mr-16'>
                  <Link
                    to='/'
                    className='flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out'
                  >
                    <span className='mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-grid'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <rect x={4} y={4} width={6} height={6} rx={1} />
                        <rect x={14} y={4} width={6} height={6} rx={1} />
                        <rect x={4} y={14} width={6} height={6} rx={1} />
                        <rect x={14} y={14} width={6} height={6} rx={1} />
                      </svg>
                    </span>
                    Home
                  </Link>
                  <a
                    href='javascript: void(0)'
                    className='flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out'
                  >
                    <span className='mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-puzzle'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
                      </svg>
                    </span>
                    Products
                  </a>
                  <a
                    href='javascript: void(0)'
                    className='flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out'
                  >
                    <span className='mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-compass'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <polyline points='8 16 10 10 16 8 14 14 8 16' />
                        <circle cx={12} cy={12} r={9} />
                      </svg>
                    </span>
                    Performance
                  </a>
                  <a
                    href='javascript: void(0)'
                    className='flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out'
                  >
                    <span className='mr-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='icon icon-tabler icon-tabler-code'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <polyline points='7 8 3 12 7 16' />
                        <polyline points='17 8 21 12 17 16' />
                        <line x1={14} y1={4} x2={10} y2={20} />
                      </svg>
                    </span>
                    Deliverables
                  </a>
                </div>
                <div className='hidden xl:flex items-center'>
                  {isAuthenticated ? (
                    <div className='ml-6 relative'>
                      <div
                        className='flex items-center relative'
                        onClick={() => setProfile(!profile)}
                      >
                        {profile && (
                          <ul className='p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 '>
                            <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none'>
                              <div className='flex items-center'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-user'
                                  width={20}
                                  height={20}
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' />
                                  <circle cx={12} cy={7} r={4} />
                                  <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
                                </svg>
                                <span className='ml-2'>My Profile</span>
                              </div>
                            </li>
                            <li className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='icon icon-tabler icon-tabler-help'
                                width={20}
                                height={20}
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <circle cx={12} cy={12} r={9} />
                                <line x1={12} y1={17} x2={12} y2='17.01' />
                                <path d='M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4' />
                              </svg>
                              <span className='ml-2'>Help Center</span>
                            </li>
                            <li
                              onClick={() => logout()}
                              className='cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='icon icon-tabler icon-tabler-settings'
                                width={20}
                                height={20}
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                                <circle cx={12} cy={12} r={3} />
                              </svg>
                              <span className='ml-2'>Logout</span>
                            </li>
                          </ul>
                        )}
                        <div className='cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out'>
                          <img
                            className='rounded-full h-10 w-10 object-cover'
                            src={user?.picture}
                            alt='logo'
                          />
                        </div>
                        <div className='ml-2 text-gray-600'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-chevron-down cursor-pointer'
                            width={20}
                            height={20}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <polyline points='6 9 12 15 18 9' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='relative md:mr-6 my-2'>
                      <button
                        onClick={loginWithPopup}
                        className='focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs'
                      >
                        Login
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className='py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40'>
            <div className='w-24'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={43}
                height={44}
                viewBox='0 0 43 44'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z'
                  fill='#667EEA'
                />
              </svg>
            </div>
            <div className='flex items-center'>
              <div className='relative mr-6 '>
                <button className='focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs'>
                  Manage
                </button>
              </div>
              <div
                id='menu'
                className='text-gray-800'
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ''
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-menu-2'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? 'w-full xl:hidden h-full absolute z-40  transform  translate-x-0 '
                : '   w-full xl:hidden h-full absolute z-40  transform -translate-x-full'
            }
          >
            <div
              className='bg-gray-800 opacity-50 w-full h-full'
              onClick={() => setShow(!show)}
            />
            <div className='w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out'>
              <div className='px-6 h-full'>
                <div className='flex flex-col justify-between h-full w-full'>
                  <div>
                    <div className='mt-6 flex w-full items-center justify-between'>
                      <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={43}
                            height={44}
                            viewBox='0 0 43 44'
                            fill='none'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z'
                              fill='#667EEA'
                            />
                          </svg>
                          <p className='text-base md:text-2xl text-gray-800 ml-3'>
                            Ts Shp
                          </p>
                        </div>
                        <div
                          id='cross'
                          className='text-gray-800'
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-x'
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className='f-m-m'>
                      <a className='cursor-pointer'>
                        <li className='text-gray-800 pt-10'>
                          <div className='flex items-center'>
                            <div className='w-6 h-6 md:w-8 md:h-8 text-indigo-700'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='icon icon-tabler icon-tabler-grid'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect
                                  x={14}
                                  y={4}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={4}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                                <rect
                                  x={14}
                                  y={14}
                                  width={6}
                                  height={6}
                                  rx={1}
                                />
                              </svg>
                            </div>
                            <p className='text-indigo-700 xl:text-base text-base ml-3'>
                              Dashboard
                            </p>
                          </div>
                        </li>
                      </a>
                      <a className='cursor-pointer'>
                        <li className='text-gray-800 pt-8'>
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                              <div className='w-6 h-6 md:w-8 md:h-8 text-gray-800'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-puzzle'
                                  viewBox='0 0 24 24'
                                  strokeWidth='1.5'
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' />
                                  <path d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1' />
                                </svg>
                              </div>
                              <p className='text-gray-800 xl:text-base md:text-2xl text-base ml-3'>
                                Products
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <a className='cursor-pointer'>
                        <li className='text-gray-800 pt-8'>
                          <div className='flex items-center'>
                            <div className='w-6 h-6 md:w-8 md:h-8 text-gray-800'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='icon icon-tabler icon-tabler-compass'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <polyline points='8 16 10 10 16 8 14 14 8 16' />
                                <circle cx={12} cy={12} r={9} />
                              </svg>
                            </div>
                            <p className='text-gray-800 xl:text-base md:text-2xl text-base ml-3'>
                              Performance
                            </p>
                          </div>
                        </li>
                      </a>
                      <li className='text-gray-800 pt-8 cursor-pointer'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center'>
                            <div className='w-6 h-6 md:w-8 md:h-8 text-gray-800'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='icon icon-tabler icon-tabler-code'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              >
                                <path stroke='none' d='M0 0h24v24H0z' />
                                <polyline points='7 8 3 12 7 16' />
                                <polyline points='17 8 21 12 17 16' />
                                <line x1={14} y1={4} x2={10} y2={20} />
                              </svg>
                            </div>
                            <p className='text-gray-800 xl:text-base md:text-2xl text-base ml-3'>
                              Deliverables
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full pt-4'>
                    <div className='flex justify-center mb-4 w-full'>
                      <div className='relative w-full'>
                        <div className='text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-search'
                            width={16}
                            height={16}
                            viewBox='0 0 24 24'
                            strokeWidth={1}
                            stroke='#A0AEC0'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path stroke='none' d='M0 0h24v24H0z' />
                            <circle cx={10} cy={10} r={7} />
                            <line x1={21} y1={21} x2={15} y2={15} />
                          </svg>
                        </div>
                        <input
                          className='bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2'
                          type='text'
                          placeholder='Search'
                        />
                      </div>
                    </div>
                    {isAuthenticated ? (
                      <div className='border-t border-gray-300'>
                        <div className='w-full flex items-center justify-between pt-1'>
                          <div className='flex items-center'>
                            <img
                              alt='profile-pic'
                              src={user?.picture}
                              className='w-8 h-8 rounded-md'
                            />
                            <p className=' text-gray-800 text-base leading-4 ml-2'>
                              {user?.given_name}
                            </p>
                          </div>
                          <ul className='flex'>
                            <li className='cursor-pointer text-gray-800 pt-5 pb-3'>
                              <div className='w-6 h-6 md:w-8 md:h-8'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-messages'
                                  viewBox='0 0 24 24'
                                  strokeWidth={1}
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' />
                                  <path d='M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10' />
                                  <path d='M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2' />
                                </svg>
                              </div>
                            </li>
                            <li className='cursor-pointer text-gray-800 pt-5 pb-3 pl-3'>
                              <div className='w-6 h-6 md:w-8 md:h-8'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='icon icon-tabler icon-tabler-bell'
                                  viewBox='0 0 24 24'
                                  strokeWidth={1}
                                  stroke='currentColor'
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                >
                                  <path stroke='none' d='M0 0h24v24H0z' />
                                  <path d='M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6' />
                                  <path d='M9 17v1a3 3 0 0 0 6 0v-1' />
                                </svg>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className='relative mr-6 '>
                        <button
                          onClick={loginWithPopup}
                          className='focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs'
                        >
                          Login
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
