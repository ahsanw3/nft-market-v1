import { TbWorld } from 'react-icons/tb'
import { BsInfo, BsClockHistory } from 'react-icons/bs'
import { MdOutlineStackedLineChart } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'
import { FaWifi } from 'react-icons/fa'

const ProviderDetails = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-4xl font-bold">Wizardium</p>
        <div className="flex text-sm">
          <a
            href="#"
            className="flex items-center space-x-2 mr-1"
          >
            <FaWifi color="green" />
            <p className="underline">Mint</p>
          </a>
          <p className="text-gray-500">
            - Rarity rank will change as minting’s live
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-4 items-center">
        <button className="rounded-full bg-white p-1">
          <BsInfo size={40} />
        </button>
        <button className="rounded-full bg-white p-2">
          <BsClockHistory size={30} fontStyle={'bold'} />
        </button>
        <button className="rounded-full bg-white p-2">
          <MdOutlineStackedLineChart size={30} />
        </button>
        <button className="rounded-full bg-white p-2">
          <TbWorld size={30} />
        </button>
        <div className='hidden xl:block'>
          <div className=" flex gap-4 rounded-lg bg-white px-10 py-1 space-x-10 text-center uppercase">
            <div>
              <p className="font-bold">3,160</p>
              <p className="text-xs font-light">Items</p>
            </div>
            <div>
              <p className="font-bold">0 bnb</p>
              <p className="text-xs font-light">volume traded</p>
            </div>
            <div>
              <p className="font-bold">1 bnb</p>
              <p className="text-xs font-light">floor</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 rounded-lg border-gray-500/50 border bg-white h-[50px] w-[20%] items-center px-4">
          <IoSearchSharp size={30}></IoSearchSharp>
          <input
            type="text"
            placeholder="Token ID"
            className="h-full outline-none w-[100%]"
          />
        </div>
      </div>
    </div>
  )
}
export default ProviderDetails
