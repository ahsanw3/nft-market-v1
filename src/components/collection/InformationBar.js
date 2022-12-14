const InformationBar = () => {
  return (
    <div className=" flex justify-evenly rounded-lg bg-white lg:px-10 py-1 gap-4 text-center uppercase lg:w-max">
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
