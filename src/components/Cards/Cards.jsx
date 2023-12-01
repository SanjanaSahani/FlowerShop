import React from 'react'

function Cards({name,price,imageUrl}) {
  return (
    <>
    <div class="w-[300px] rounded-md border">
  <img  class="h-[250px] w-full rounded-md object-cover  hover: ease-in duration-300"
   src={imageUrl}
   
  />
  <div class="p-4 text-center">
    <h1 class="text-lg font-semibold">{name}</h1>
    <p class="mt-1 text-sm text-gray-600">
      {price}
    </p>
    <button
      type="button"
      class="mt-4 w-[266px] rounded-sm bg-pink-600 px-6 py-1 text-[14px] font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
    >
      Buy
    </button>
  </div>
</div>

    </>
  )
}

export default Cards