import AudioPlayer from './components/player/AudioPlayer'
import Collection from './pages/Collection'
import Details from './pages/Details'
import Footer from './components/shared/Footer'
import GoTopBtn from './components/shared/GoTopBtn'
import Navbar from './components/shared/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="font-roboto bg-slate-100 min-h-screen flex flex-col justify-between dark:bg-neutral-900 dark:text-white">
      <div>
        <Navbar />
        <main className="flex justify-center px-5 sm:px-10 my-8">
          <div className="max-w-[1400px] w-full">
            <Routes>
              <Route path="/" element={<Collection />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
            <GoTopBtn />
            <AudioPlayer />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
