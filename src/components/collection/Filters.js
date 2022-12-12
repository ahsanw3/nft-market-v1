import { SlEqualizer } from 'react-icons/sl'

const Filters = () => {
  return (
    <div className="flex gap-2 text-sm">
      <button className="bg-white rounded-lg px-4 h-12 flex-1">
        <p>Token ID Lowest</p>
      </button>
      <button className="bg-white rounded-lg px-4 h-12 flex-1">
        <p>Token ID Highest</p>
      </button>
      <button className="bg-white rounded-lg px-2 h-12">
        <SlEqualizer size={30} className="rotate-90" />
      </button>
    </div>
  )
}
export default Filters
