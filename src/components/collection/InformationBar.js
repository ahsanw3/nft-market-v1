const InformationBar = () => {
  return (
    <div className=" flex justify-between rounded-lg bg-white px-10 py-1 space-x-10 text-center uppercase">
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
  )
}
export default InformationBar
