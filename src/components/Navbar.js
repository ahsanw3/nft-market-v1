import GeneralButton from './GeneralButton'
import { IoSearchSharp } from 'react-icons/io5'
import { TbMoon } from 'react-icons/tb'

const Navbar = () => {
  return (
    <header className="bg-slate-200 flex justify-center px-4 sm:px-10 dark:bg-black dark:text-white">
      <div className="max-w-[1400px] w-full py-3 sm:py-5">
        <div className="flex justify-between items-center">
          <div>
            <p>NFT</p>
          </div>
          <div className="flex gap-2 sm:gap-5">
            <button className="rounded-full bg-white p-2 dark:bg-neutral-800">
              <IoSearchSharp size={25}></IoSearchSharp>
            </button>
            <GeneralButton
              text="Connect Wallet"
              button_style="text-sm sm:text-lg font-medium rounded-full bg-white dark:bg-neutral-800"
              p_style="px-3 py-1 sm:px-4"
            />
            <button className="rounded-full bg-white p-2 dark:bg-neutral-800">
              <TbMoon size={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navbar
