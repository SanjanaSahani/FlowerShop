import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({cartItems}) {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                       
                        <div className='flex mr-3'><h1 className='text-pink-700 font-bold text-4xl font-serif'>Flora <span className='text-pink-200 text-3xl'>.</span></h1></div>
                    </Link>
                    <div className="flex items-center font-serif lg:order-2">
                        <Link
                            to="/sign"
                            className="text-pink-800 bg-pink-200 hover:bg-pink-50 focus:ring-4 focus:ring-pink-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/cart"
                            className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <div className='flex '><img className='h-4 w-4 fill-white mix-blend-screen mr-1'
                             src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png" alt="logo" />
                              Cart
                               {/* Show item count in a badge */}
                               {cartItems.length > 0 && (
                                    <span className="absolute top-2 right-[8%] bg-pink-600 text-white font-bold rounded-full px-2 py-1 text-xs">
                                        {cartItems.length}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center font-serif w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium text-2xl lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/gallery"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    Gallery
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-pink-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-700 lg:p-0`
                                    }
                                >
                                    Contact 
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

