import { IoIosArrowBack } from 'react-icons/io'

const DetailsCard = ({ data }) => {
  return (
    <div className="block px-6 py-10 w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex">
        <button type="button">
          <IoIosArrowBack />
        </button>
        <p>Back</p> <span className="ml-2"> | </span>{' '}
        <span className="ml-2"> Wingardium </span>
      </div>
      <div className="ml-1">
        <p className="text-3xl font-bold my-5">{data.name}</p>
        <p className=""> Token ID {data.token_id}</p>
        <div className=" flex flex-wrap py-3 gap-1 font-bold space-x-1">
          {data.property.map((single_property, index) => {
            return (
              <div
                className="bg-black text-white px-2 rounded-md font-medium"
                key={index}
              >
                <p>
                  <span>{single_property[0]}: </span>
                  <span>{single_property[1]}</span>
                </p>
              </div>
            )
          })}
        </div>
        <div>
          <p className="py-4"> Owned By {data.currentOwner}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm dark:text-white/75">
            {data.price ? 'Price' : 'Market status'}
          </p>
          <p className="text-2xl font-medium">
            {data.price ? data.price : 'Not for Sale'}
          </p>
        </div>
        <button className="mt-4 w-full sm:text-lg text-sm font-medium text-center bg-white border border-black rounded-md hover:font-extrabold dark:bg-neutral-800 dark:text-white dark:border-white">
          <p className=" px-5 py-3">Place a bid</p>
        </button>
      </div>
    </div>
  )
}

export default DetailsCard
