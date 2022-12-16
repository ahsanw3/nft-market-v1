import { VscChromeMinimize } from 'react-icons/vsc'
import { TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb'
import { HiPlay } from 'react-icons/hi2'

import jaxImg from '../../images/jax.png'

const AudioPlayer = () => {
  return (
    <>
      <div className="hidden lg:block fixed bottom-8 left-0 px-8 z-70">
        <div class="relative duration-100 ">
          <button class="absolute duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center -top-5 -right-5 z-30 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black border-olive">
            <VscChromeMinimize size={20} strokeWidth={1}/>
          </button>
          <div
            title="Nuclear Lethargy by Lane 8"
            class="duration-300 bg-white  h-14 shadow-md  flex  rounded-md relative"
          >
            <img
              class=" transform duration-200  h-20 -translate-y-6"
              src={jaxImg}
              alt='jax'
            />
            <div class="icon  ml-4 mr-4 pausedicon">
              <span class="bg-opacity-80 bg-black"></span>
              <span class="bg-opacity-80 bg-black"></span>
              <span class="bg-opacity-80 bg-black"></span>
            </div>
            <audio src="https://azuki-songs.s3.amazonaws.com/f1/08 Nuclear Lethargy.m4a"></audio>
            <div class="flex block">
              <div class=" text-left  w-40 pr-8 flex flex-col justify-center">
                <h3 class="font-bold uppercase text-md truncate">
                  Nuclear Lethargy
                </h3>
                <h4 class="uppercase font-mono text-2xs 0 opacity-40 truncate ">
                  Lane 8
                </h4>
              </div>
              <div class="w-full grid grid-cols-3 rounded-md w-36 mr-2">
                <div class="flex items-center justify-center">
                  <button class="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95">
                    <TbPlayerSkipBack size={20} fill />
                  </button>
                </div>
                <form id="pause" class="flex items-center justify-center">
                  <button
                    class="h-10 w-10 rounded-full flex items-center justify-center transform hover:scale-110 active:scale-95"
                    form="pause"
                  >
                    <HiPlay size={25} />
                  </button>
                </form>
                <div class="flex items-center justify-center">
                  <button class="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95">
                    <TbPlayerSkipForward size={20} fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AudioPlayer
