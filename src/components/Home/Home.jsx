import React, {useState} from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import Cards from '../Cards/Cards';
import Cardd from '../Cards/Cardd';

const initialCards = [
    { id: 1, category: 'CACTUSES', imageUrl: 'https://images.unsplash.com/photo-1592744536004-be419c811f4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhY3R1cyUyMHBsYW50fGVufDB8fDB8fHww', name: 'Golden Cactus Palm', price: '$99' },
    { id: 2, category: 'EXOTIC', imageUrl: 'https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Exotic Tiny Dahlia', price: '$149' },
    { id: 3, category: 'GREENS', imageUrl: 'https://wallmantra.com/wp-content/uploads/SmlaplpotTilkiliBlue2.png', name: 'Blue Tilkili', price: '$220' },
    { id: 4, category: 'POPULAR', imageUrl: 'https://wallmantra.com/wp-content/uploads/AVA-MJ-09c.jpg', name: 'White Majesty', price: '$180' },
    { id: 5, category: 'EXOTIC', imageUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-1.jpg', name: 'Pink Radiance', price: '$140' },
    { id: 6, category: 'EXOTIC', imageUrl: 'https://cdn.pixabay.com/photo/2018/04/22/11/27/flower-3340796_1280.jpg', name: 'White Blossom', price: '$200' },
    { id: 7, category: 'WINTER', imageUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-3.jpg', name: 'Winter Queen', price: '$160' },
    { id: 8, category: 'CACTUSES', imageUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-9.jpg', name: 'Spiky Majesty', price: '$110' },
    { id: 9, category: 'CACTUSES', imageUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-8.jpg', name: 'Royal Cactus', price: '$190' },
    { id: 10, category: 'GREENS', imageUrl: 'https://cdn.pixabay.com/photo/2017/02/16/13/38/flower-2071522_1280.jpg', name: 'Green Skytip', price: '$240' },
    { id: 11, category: 'POPULAR', imageUrl: 'https://wallmantra.com/wp-content/uploads/AVA-MJ-09a.jpg', name: 'Majestic Popular', price: '$150' },
    { id: 12, category: 'WINTER', imageUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-4.jpg', name: 'Frosted Lily', price: '$175' },
    { id: 13, category: 'WINTER', imageUrl: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/port-gallery-img-7.jpg', name: 'Snow Bloom', price: '$180' },
    { id: 14, category: 'WINTER', imageUrl: 'https://cdn.pixabay.com/photo/2016/04/19/11/30/blossom-1338454_1280.jpg', name: 'Blossom Frost', price: '$165' },
    { id: 15, category: 'POPULAR', imageUrl: 'https://cdn.pixabay.com/photo/2018/04/29/04/37/flower-3359072_1280.jpg', name: 'Popular Rose', price: '$145' },
    { id: 16, category: 'POPULAR', imageUrl: 'https://cdn.pixabay.com/photo/2016/06/05/22/20/plant-1438317_1280.jpg', name: 'Star Plant', price: '$130' },
];

export default function Home() {

    const { addToCart } = useOutletContext();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredCards = selectedCategory === 'All' ? initialCards : initialCards.filter((card) => card.category === selectedCategory);


    return (
        <div className="mx-auto w-full font-serif max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-[550px] space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl text-pink-800 font-bold sm:text-5xl sm:text-black">
                            Fresh Flower
                            <span className="hidden text-pink-400 sm:block text-4xl">Natural & Beautiful Flowers</span>
                            <p className='text-sm  font-light text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus ducimus repellendus excepturi rerum dolor officia velit distinctio numquam delectus et? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, vero blanditiis ab nesciunt nemo fugiat necessitatibus repellat vel tempora dolor.</p>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-pink-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <img src="main.png" alt="" />
                            &nbsp; Shop Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img src="./image/main.png" alt="" />
                </div>
            </aside>

                  {/* for category  */}

                  <div className='flex justify-center items-center flex-wrap gap-6 mt-32 py-4 mx-2'>
                {['All', 'CACTUSES', 'EXOTIC', 'GREENS', 'POPULAR', 'WINTER'].map((category) => (
                    <h4
                        key={category}
                        className={`cursor-pointer ${selectedCategory === category ? 'text-pink-500' : 'text-slate-500'
                            } font-semibold text-2xl hover:text-pink-700`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </h4>
                ))}
            </div>

            <div className='flex justify-center items-center flex-wrap gap-6 mt-24 mb-32'>
                {filteredCards.map((card) => (
                    <Cards key={card.id} {...card} onAddToCart={() => addToCart(card)} />
                ))}
            </div>

            <div className='bg-pink-100 py-28 flex justify-center items-center flex-wrap rounded-tl-3xl rounded-br-3xl'>
                <div className='w-[400px]  rounded-md border sm:m-2'><video src="./image/video (1080p).mp4" autoPlay loop muted></video></div>
                <div className='ml-14'>
                    <h2 className='text-4xl font-semibold text-slate-700 ' >Suprise Your <span className='text-pink-500'>Valentine!</span>
                        <br />  Let us arrange a smile.</h2>
                    <p className='text-lg text-slate-500 mt-4'>
                        Where flowers are our inspiration to create lasting <br /> memories. Whatever the occasion..</p>
                    <ul className='text-md text-slate-500 mt-4'>
                        <li className='flex'> <img className='h-6 mix-blend-multiply mr-2' src="https://i.pinimg.com/736x/a2/3d/61/a23d61559f9425a874f0f984d31ed970.jpg" alt="" /> Hand picked just for you.</li>
                        <li className='flex'> <img className='h-6 mix-blend-multiply mr-2' src="https://i.pinimg.com/736x/a2/3d/61/a23d61559f9425a874f0f984d31ed970.jpg" alt="" /> Unique flower arrangements</li>
                        <li className='flex'> <img className='h-6 mix-blend-multiply mr-2' src="https://i.pinimg.com/736x/a2/3d/61/a23d61559f9425a874f0f984d31ed970.jpg" alt="" /> Best way to say you care.</li>
                    </ul>
                </div>
            </div>

            <div className='my-32'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-pink-700 '>Flower Experts</h1>
                    <p className='text-lg text-slate-500 mt-4'>A perfect blend of creativity, energy, communication, happiness <br /> and love. Let us arrange a smile for you.</p>

                </div>
                <div className='flex justify-center items-center flex-wrap mt-16 gap-16 '>
                    <div className='text-center'>
                        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-1.png" alt="" />
                        <h4 className='mt-4 text-slate-500 font-semibold'>CRYSTAL BROOKS</h4>
                        <p className='text-slate-500 '>Florist</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-team-img-2.png" alt="" />
                        <h4 className='mt-4 text-slate-500 font-semibold'>SHIRLEY HARRIS</h4>
                        <p className='text-slate-500 ' >Manager</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-3.png" alt="" />
                        <h4 className='mt-4 text-slate-500 font-semibold'>BEVERLY CLARK</h4>
                        <p className='text-slate-500 '>Florist</p>
                    </div>
                    <div className='text-center'>
                        <img src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/h3-team-img-4.png " alt="" />
                        <h4 className='mt-4 text-slate-500 font-semibold'>AMANDA WATKINS</h4>
                        <p className='text-slate-500 '>Florist</p>
                    </div>
                </div>
            </div>


            <div className='my-28'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-slate-700 '>From our Blog</h1>
                    <p className='text-xl text-slate-400 my-10'>A perfect blend of creativity, energy, communication, happiness <br /> and love. Let us arrange a smile for you.</p>
                </div>
                <div className='flex justify-center items-center flex-wrap gap-16'>
                    <Cardd imagesUrl="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-feature-img-1.jpg" Heading="Flower Power" />

                    <Cardd imagesUrl="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-3.jpg" Heading="Local Florists" />
                    <Cardd imagesUrl="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-4.jpg" Heading="Flower Beauty" />
                </div>
            </div>

            <div className='h-[400px] bg-slate-50 pt-24 mb-16'>
                <div >
                    <h1 className='text-4xl text-center font-semibold text-slate-700 ' >Join The <span className='text-pink-700'>Colorful</span> Bunch!</h1>
                </div>
                <div className='flex justify-center items-center mt-12 '>
                    <div class="flex items-center w-full space-x-2 md:w-1/3">
                        <input
                            class="flex h-12 w-[650px] rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            placeholder="Email"
                        />
                        <button
                            type="button"
                            class="rounded-md h-12 bg-pink-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                        >
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
