import React from 'react'

function Cardd({ imagesUrl, Heading }) {
  return (
    <div><div className="w-[300px] rounded-md ">
      <img
        className="h-[200px] w-full  object-cover "
        src={imagesUrl}
      />
      <div className="p-4 text-center">
        <h1 className="inline-flex items-center text-2xl text-pink-700 font-semibold">
          {Heading}

        </h1>
        <p className="mt-3 text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

      </div>
    </div>
    </div>
  )
}

export default Cardd