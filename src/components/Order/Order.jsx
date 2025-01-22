import React from 'react'
import { Link } from 'react-router-dom'

function Order() {
    return (
        <>
            <div className='bg-slate-50 h-[200px] my-20'>
                <h1 className='text-4xl font-bold text-pink-700 text-center pt-[80px] font-serif '>Order Placed</h1>
                <p className='text-lg font-serif text-center text-slate-500 mt-2 '>Thank you for your order! Your flowers will be on their way soon.</p>
            </div>

            <div className='flex justify-center items-center mb-10'>
                <Link to="/">
                    <button
                        type="button"
                        className="inline-flex items-center font-serif rounded-md bg-pink-700 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-500"
                    >
                        Return To Shop
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="ml-2 h-4 w-4"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Order;
