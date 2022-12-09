import Navbar from './components/Navbar'
import ProviderDetails from './components/collection/ProviderDetails'
import Collection from './pages/Collection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="font-roboto bg-slate-100">
      <Navbar />
      <div className='flex justify-center px-5 sm:px-10 my-14'>
        <div className='max-w-[1400px] w-full'>
          <ProviderDetails />
          <Collection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
