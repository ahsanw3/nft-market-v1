import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import Footer from './components/Footer'
import GoTopBtn from './components/GoTopBtn'
import AudioPlayer from './components/player/AudioPlayer'

const App = () => {
  return (
    <div className="font-roboto bg-slate-100 min-h-screen flex flex-col justify-between dark:bg-neutral-900 dark:text-white">
      <div>
        <Navbar />
        <main className="flex justify-center px-5 sm:px-10 my-8">
          <div className="max-w-[1400px] w-full">
            <Collection />
            <AudioPlayer />
            <GoTopBtn />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
