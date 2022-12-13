const BidsAndOffers = () => {
  return (
    <div className="flex gap-4 h-10 font-medium">
      <button className="rounded-full bg-white px-2">
        <p className="capitalize px-3">make global bid</p>
      </button>
      <button className="flex-1 rounded-full bg-white px-2">
        <p className="capitalize px-3">global offers<span className="rounded-full bg-black text-white px-3 py-[2px] ml-2 items-center">0</span></p>
      </button>
    </div>
  )
}
export default BidsAndOffers
