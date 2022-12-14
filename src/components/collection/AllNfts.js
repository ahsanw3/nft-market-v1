import NftCardWithModal from "./modal/NftCardWithModal"

const AllNfts = ({ nfts }) => {
  
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  grid-flow-row gap-4 md:gap-6">
        {nfts.map((nft) => {
          return (
            <NftCardWithModal nft={nft} key={nft.token_id} />
          )
        })}
      </div>
    </>
  )
}
export default AllNfts
