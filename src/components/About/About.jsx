import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white font-serif">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://media.istockphoto.com/id/1199417929/photo/cheerful-young-florist-cutting-flowers-for-bouquet-at-the-counter.jpg?s=612x612&w=0&k=20&c=cSKTu5uDoOgA4BrnKZdGLwKluLN5JkrE0k37JeOBUBQ="
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Where <span className='text-pink-700'>flowers</span> are our <span className='text-pink-700'>inspiration.</span>
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>

                {/* for second para  */}
                <div className=' mt-32 bg-pink-100 py-28 flex justify-center items-center flex-wrap rounded-tl-3xl rounded-br-3xl'>
                    <div className='w-[400px]  rounded-md border  hover:transform: translateY(-50%)'><video src="./image/video (1080p).mp4 " autoPlay loop muted></video></div>
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

            </div>
             {/* for third para  */}
            
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
        </div>
    );
}