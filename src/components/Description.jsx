import React from 'react'
const pic1 = require('../images/download (1).svg').default;
const pic2 = require('../images/download (2).svg').default;
const pic3 = require('../images/download (3).svg').default;
const pic4 = require('../images/download.svg').default;
export default function Description({data}) {
  return (
    <div>


<div className="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Description</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{data[0].description}.</p>
   <div className='flex flex-wrap gap-3 justify-center'>
    <img src={pic1} alt="/" />Contact
     <img src={pic2} alt="/" />MetaData
     <img src={pic3} alt="/" />Website
     <img src={pic4} alt="/" />BubbleMap
   </div>
</div>

    </div>
  )
}

