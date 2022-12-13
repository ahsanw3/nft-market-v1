const MyNftsToggler = ({ myNftsSelectorTab, setMyNftsSelectorTab }) => {
  const handleMyNftsTogglerClick = () => {
    myNftsSelectorTab === 'off'
      ? setMyNftsSelectorTab('on')
      : setMyNftsSelectorTab('off')
  }
  return (
    <div className="flex justify-between">
      <p>3160 items</p>
      <div className="flex items-center">
        <p>My NFTs</p>
        <button onClick={() => handleMyNftsTogglerClick()}>
          <div className="flex bg-slate-300 rounded-full ml-3 items-center text-xs text-slate-600 font-medium">
            <p
              className={`${
                myNftsSelectorTab === 'off'
                  ? 'bg-white text-black rounded-full px-3 py-1 flex-1'
                  : ' px-3 py-1 flex-1'
              }`}
            >
              OFF
            </p>
            <p
              className={`${
                myNftsSelectorTab === 'on'
                  ? 'bg-black text-white rounded-full px-3 py-1 flex-1'
                  : 'px-3 py-1 flex-1'
              }`}
            >
              ON
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}
export default MyNftsToggler
