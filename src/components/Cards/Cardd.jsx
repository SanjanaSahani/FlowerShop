import React from 'react'

function Cardd({ imagesUrl, Heading }) {
  return (
    <div><div class="w-[300px] rounded-md ">
      <img
        class="h-[200px] w-full  object-cover "
        src={imagesUrl}
      />
      <div class="p-4 text-center">
        <h1 class="inline-flex items-center text-2xl text-pink-700 font-semibold">
          {Heading}

        </h1>
        <p class="mt-3 text-md text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>

      </div>
    </div>
    </div>
  )
}

export default Cardd