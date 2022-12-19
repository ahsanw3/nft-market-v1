import { ConfigProvider, Modal } from 'antd'

import { useState } from 'react'
import NftCard from '../NftCard'
import ModalComponent from './ModalComponent'

const NftCardWithModal = ({ nft }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <NftCard nft={nft} key={nft.token_id} />
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
    </>
  )
}
export default NftCardWithModal
