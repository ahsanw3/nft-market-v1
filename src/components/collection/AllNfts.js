import NftCard from '../collection/NftCard'

const AllNfts = ({ nfts_data }) => {
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  grid-flow-row gap-4 sm:gap-8'>
        {nfts_data.map((nft) => {
          return (
            <NftCard
              nft={nft}
              key={nft.token_id}
              className=''
            />
          )
        })}
      </div>
    </>
  )
}
export default AllNfts
