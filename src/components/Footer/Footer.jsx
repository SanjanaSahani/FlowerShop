import React from 'react'
import { Link, NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white font-serif border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                        <div className='flex mr-3'><h1 className='text-pink-700 font-bold text-4xl'>Flora <span className='text-pink-200 text-3xl'>.</span></h1></div>
                   
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">    
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                            <ul className="text-gray-500 font-medium">
                            <li className='mb-2'>
                              <NavLink 
                              to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                            <li className='mb-2'>
                              <NavLink 
                              to="/about"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                  }
                              >
                                  About Us
                              </NavLink>
                          </li>

                          <li className="mb-2">
                              <NavLink 
                              to="/gallery"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                  }
                              >
                                Gallery
                              </NavLink>
                          </li>
                            <li className='mb-2'>
                              <NavLink 
                              to="/contact"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                  }
                              >
                                  Contact Us
                              </NavLink>
                          </li>
                           
                              
                               
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Social media</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <a
                                        href="/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">
                                        Instagram
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">
                                        Linkdin
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Pinterest
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Archive</h2>
                            <ul className="text-gray-500 font-medium">
                            <li className="mb-2">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>  <li className="mb-2">
                                    <Link to="#" className="hover:underline">
                                        Pricing
                                    </Link>
                                </li>  <li className="mb-2">
                                    <Link to="#" className="hover:underline">
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="#" className="hover:underline">
                            SanjanaSahani
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                          <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/footer-bottom-1.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
