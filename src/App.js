
import './App.css';
import Details from './components/Details';


function App() {
  return (
    <div className="font-roboto min-h-screen flex flex-col justify-between">
    <div>
      {/* <Navbar /> */}
      <main className="flex justify-center px-5 sm:px-10 my-8">
        <div className="max-w-[1400px] w-full">
          <Details />
        </div>
      </main>
    </div>
    {/* <Footer /> */}
  </div>
  );
}

export default App;
