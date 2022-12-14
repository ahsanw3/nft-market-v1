import { ConfigProvider, Modal } from 'antd'

import { useState } from 'react'

import AddToCartButton from '../AddToCartButton'
import BuyNowButton from '../BuyNowButton'
import ModalComponent from './modal/ModalComponent'

const NftCard = ({ nft }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const { provider, name, token_id, price, img } = nft
  return (
    <div className="rounded-lg bg-white hover:-translate-y-4 hover:duration-500 shadow-lg">
      <button onClick={() => setModalOpen(true)} className="text-left">
        <img src={img} alt="profile" className="rounded-t-lg" />
        <div className="p-4 text-xs font-normal space-y-2">
          <p>{provider}</p>
          <p className="text-base font-bold">{name}</p>
          <p>Token ID {token_id}</p>
          <p>Price</p>
          <p className="text-base">{price}</p>
        </div>
      </button>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: '#E2E8F0',
          },
        }}
      >
        <Modal
          centered
          width={1100}
          destroyOnClose={true}
          footer={null}
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        >
          <ModalComponent nft={nft} />
        </Modal>
      </ConfigProvider>

      <div className="p-4 text-xs font-normal space-y-2">
        <AddToCartButton
          button_style="w-full sm:text-lg text-sm font-medium text-center bg-gray-300 rounded-md hover:font-extrabold"
          p_style="px-5 py-2"
        />

        <BuyNowButton
          button_style="w-full sm:text-lg text-sm font-medium text-center bg-green-500 rounded-md text-white hover:font-extrabold"
          p_style="px-5 py-2"
        />
      </div>
    </div>
  )
}
export default NftCard
