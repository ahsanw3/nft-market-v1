import apiData from '../../nft_api_data'
import Description from '../../components/Details/Description'
import DetailsCard from '../../components/Details/DetailsCard'
import TokenActivity from '../../components/Details/TokenActivity'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()
  const Object = apiData.find((obj) => obj.token_id === id)

  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-10 justify-center py-20 flex-col lg:flex-row w-[80%]">
          <div className="flex-1">
            <img src={Object.img} alt="" className="rounded-lg" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col items-center gap-10">
              <DetailsCard data={Object} />
              <Description data={Object} />
            </div>
          </div>
        </div>
      </div>
      <TokenActivity />
    </>
  )
}

export default Details
