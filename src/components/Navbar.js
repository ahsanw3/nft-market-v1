import GeneralButton from './GeneralButton'
import { IoSearchSharp } from 'react-icons/io5'
import { TbMoon } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className="bg-slate-200 flex justify-center px-5 sm:px-10">
      <div className="max-w-[1400px] w-full py-5">
        <div className="flex justify-between items-center">
          <div>
            <p>NFT</p>
          </div>
          <div className="flex gap-2 sm:gap-5">
            <button className="rounded-full bg-white p-2">
              <IoSearchSharp size={30}></IoSearchSharp>
            </button>
            <GeneralButton
              text="Connect Wallet"
              button_style="text-base sm:text-lg font-medium rounded-full bg-white"
              div_style="px-5 py-2"
            />
            <button className="rounded-full bg-white p-2">
              <TbMoon size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
