import { TbWorld } from 'react-icons/tb'
import { BsInfo, BsClockHistory } from 'react-icons/bs'
import { MdOutlineStackedLineChart } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'
import { FaWifi } from 'react-icons/fa'

const ProviderDetailsMobile = () => {
  return (
    <>
      <div className="space-y-4">
        <p className="text-3xl font-bold">Wizardium</p>
        <div className="flex text-sm">
          <a href="#" className="flex items-center space-x-2 mr-1">
            <FaWifi color="green" />
            <p className="underline">Mint</p>
          </a>
          <p className="text-gray-500">
            - Rarity rank will change as minting’s live
          </p>
        </div>
      </div>

      <div className="flex gap-4 py-5">
        <div className="rounded-md border-gray-500/50 border bg-white">
          <div className="flex h-[100%] items-center gap-2 px-2">
            <IoSearchSharp size={32}></IoSearchSharp>
            <input
              type="text"
              placeholder="Token ID"
              className="h-[100%] w-[100%] outline-none"
            />
          </div>
        </div>

        <button className="rounded-full bg-white p-1">
          <BsInfo size={30} />
        </button>
        <button className="rounded-full bg-white p-1">
          <BsClockHistory size={30} fontStyle={'bold'} />
        </button>
        <button className="rounded-full bg-white p-1">
          <MdOutlineStackedLineChart size={30} />
        </button>
        <button className="rounded-full bg-white p-1">
          <TbWorld size={30} />
        </button>
      </div>

      <div className=" flex justify-between rounded-lg bg-white px-10 py-1 space-x-10 text-center uppercase mb-5">
        <div>
          <p className="font-bold">3,160</p>
          <p className="text-[10px] font-light">Items</p>
        </div>
        <button>
          <p className="font-bold uppercase">0 bnb</p>
          <p className="text-[10px] font-light uppercase">volume traded</p>
        </button>
        <button>
          <p className="font-bold uppercase">1 bnb</p>
          <p className="text-[10px] font-light uppercase">floor</p>
        </button>
      </div>
    </>
  )
}
export default ProviderDetailsMobile
