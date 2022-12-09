import AllNfts from '../components/collection/AllNfts'

import nfts from '../nft_api_data'

const Collection = () => {
  return (
    <>
      <AllNfts nfts_data={nfts.nfts_data} />
    </>
  )
}
export default Collection
