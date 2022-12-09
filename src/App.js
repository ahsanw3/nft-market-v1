import Navbar from './components/Navbar'
import Collection from './pages/Collection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="font-roboto bg-slate-500 min-h-screen flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="flex justify-center px-5 sm:px-10 my-14">
          <div className="max-w-[1400px] w-full">
            <Collection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
