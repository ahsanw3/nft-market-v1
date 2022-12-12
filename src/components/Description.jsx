import React from 'react'

export default function Description(props) {
  return (
    <div classNameName=''>


<div className="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Description</h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{props.data[0].description}.</p>

</div>

    </div>
  )
}

