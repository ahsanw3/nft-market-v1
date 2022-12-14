import GeneralButton from './GeneralButton'
import { IoSearchSharp } from 'react-icons/io5'
import { TbMoon } from 'react-icons/tb'

const Navbar = () => {
  return (
    <header className="bg-slate-200 flex justify-center px-4 sm:px-10">
      <div className="max-w-[1400px] w-full py-3">
        <div className="flex justify-between items-center">
          <div>
            <p>NFT</p>
          </div>
          <div className="flex gap-2 sm:gap-5">
            <button className="rounded-full bg-white p-2">
              <IoSearchSharp size={25}></IoSearchSharp>
            </button>
            <GeneralButton
              text="Connect Wallet"
              button_style="text-sm sm:text-lg font-medium rounded-full bg-white"
              div_style="px-3 py-1"
            />
            <button className="rounded-full bg-white p-2">
              <TbMoon size={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navbar
