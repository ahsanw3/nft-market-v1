import { FaWifi } from 'react-icons/fa'

const ProviderNameAndDescription = () => {
  return (
    <div className="space-y-3">
      <p className="text-2xl font-bold">Wizardium</p>
      <div className="flex text-sm">
        <a className="flex items-center space-x-2 mr-1">
          <FaWifi color="green" />
          <p className="underline">Mint</p>
        </a>
        <p className="text-gray-500">
          - Rarity rank will change as minting’s live
        </p>
      </div>
    </div>
  )
}
export default ProviderNameAndDescription
