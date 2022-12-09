import { useState } from 'react'
import AllNfts from '../components/collection/AllNfts'
import NftSelector from '../components/collection/NftSelector'
import ProviderDetails from '../components/collection/ProviderDetails'
import ProviderDetailsMobile from '../components/collection/ProviderDetailsMobile'
import nfts from '../nft_api_data'

const Collection = () => {
  const [selectorTab, setSelectorTab] = useState('all')

  return (
    <>
      <ProviderDetailsMobile />
      {/* <ProviderDetails /> */}
      <NftSelector 
        selectorTab={selectorTab}
        setSelectorTab={setSelectorTab}
      />
      {selectorTab === 'all' && <AllNfts nfts_data={nfts.nfts_data} />}
    </>
  )
}
export default Collection
