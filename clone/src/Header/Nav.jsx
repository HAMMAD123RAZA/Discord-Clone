  // import React from "react";
  // import { Link } from "react-router-dom";
  // import Home from "../home/Home";
  // import MenuIcon from '@mui/icons-material/Menu';

  // const Nav = () => {
    
  //   return (
  //     <>
  //       <div className="bg2">
  //         <div className="logo flex justify-between items-center ">
  //         <img src="logo.svg" className="cursor-pointer" alt="" style={{ filter: 'invert(100%)' }} />
      
  //             <p className="hover:border-b border-black cursor-pointer text-white">
  //               Download
  //             </p>
  //             <p className="hover:border-b border-black cursor-pointer text-white">
  //               Nitro
  //             </p>
  //             <p className="hover:border-b border-black cursor-pointer text-white">
  //               Discover
  //             </p>
  //             <p className="hover:border-b border-black cursor-pointer text-white">
  //               Safety
  //             </p>
  //             <p className="hover:border-b border-black cursor-pointer text-white">
  //               Support
  //             </p>
  //             <button className="bg-white text-black h-12 rounded-full px-4">
  //               login
  //             </button>
  //           </div>


            
  //         <div className="home">
  //           <Home />
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  // export default Nav;


  import { Fragment, useState } from 'react';
  import { Disclosure } from '@headlessui/react';
  import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
  import Home from "../home/Home";


  const navigation = [
    { name: 'Download', href: '#', current: false },
    { name: 'Nitro', href: '#', current: false },
    { name: 'Discover', href: '#', current: false },
    { name: 'Safety', href: '#', current: false },
    { name: 'Support', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
  ];
  
  // const userNavigation = [
  //   { name: 'Your Profile', href: '#' },
  //   { name: 'Settings', href: '#' },
  //   { name: 'Sign out', href: '#' },
  // ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <>
        <div className=" bg2 min-h-full">
          <Disclosure as="nav" className="bg2">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          src="logo.svg"
                          className="cursor-pointer"
                          alt=""
                          style={{ filter: 'invert(100%)' }}
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10  flex items-center space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-white hover:border-b border-white ',
                                'rounded-md px-3 py-2 text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {!isLoggedIn && (
                          <a
                            href="#login"
                            className="text-black bg-white hover:text-blue-700  rounded px-3 py-2 text-sm font-medium"
                          >
                            Login
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
  
                <Disclosure.Panel className="md:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    {!isLoggedIn && (
                      <Disclosure.Button
                        key="Login"
                        as="a"
                        href="#login"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                      >
                        Login
                      </Disclosure.Button>
                    )}
                  </div>
                  {isLoggedIn && (
                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </div>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div className="home">
             <Home />
           </div>
        </div>
      </>
    );
  }
  