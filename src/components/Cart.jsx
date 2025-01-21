import React, {useEffect} from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function Cart() {
    const { cartItems, clearCart } = useOutletContext();

    // Clear cart when component mounts
    useEffect(() => {
        if (cartItems.length === 0) {
            clearCart(); 
        }
    }, [cartItems, clearCart]);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price;
    }, 0);

    const handleOrder = () => {
        // Clear the cart after the order
        clearCart();
    }

    return (
        <>
            <div className='bg-slate-50 h-[200px] my-20'>
                <h1 className='text-4xl font-bold text-pink-700 text-center pt-[80px] font-serif '>Cart</h1>
                <p className='text-lg font-serif text-center text-slate-500 mt-2 '>Where flowers are our inspiration</p>
            </div>


            {cartItems.length === 0 ? (
                <> <div className='border mx-24 my-10'>
                    <p className='text-md font-serif text-center text-slate-500 my-10'>Your cart is currently empty.</p>
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
                                    class="ml-2 h-4 w-4"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                        </Link>
                    </div>
                </>

            ) : (
                <> <div className='mx-24 my-10'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex justify-between border-b py-4'>
                            <img src={item.imageUrl} alt={item.name} className='h-16 w-16 rounded-md' />
                            <p className='text-md font-semibold'>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>

                    <div className='flex justify-between mx-24 my-6'>
                        <p className='text-lg font-semibold'>Total: ${totalPrice.toFixed(2)}</p>
                    </div>

                    <div className='flex justify-center items-center mb-10'>
                        <Link to="/order">
                            <button
                                type="button"
                                className="inline-flex items-center font-serif rounded-md bg-pink-700 px-3 py-2 text-sm font-semibold text-white hover:bg-pink-500"
                           onClick={handleOrder}
                           >
                                Order Now
                            </button>
                        </Link>
                    </div>
                </>
            )}



        </>
    );
}

export default Cart;