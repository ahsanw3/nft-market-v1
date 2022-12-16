import { VscChromeMinimize } from 'react-icons/vsc'
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { HiPlay } from 'react-icons/hi2'

import jaxImg from '../../images/jax.png'

const AudioPlayer = () => {
  return (
    <div className="hidden lg:block fixed bottom-8 left-0 px-8 z-70">
      <div class="relative duration-100">
        <button class="absolute duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center -top-5 -right-5 z-30 h-10 w-10 border-2 rounded-full overflow-hidden bg-slate-200 text-black border-slate-300 dark:bg-neutral-700 dark:border-neutral-600">
          <VscChromeMinimize
            size={20}
            strokeWidth={1}
            className="dark:text-white"
          />
        </button>
        <div
          title="Nuclear Lethargy by Lane 8"
          class="duration-300 bg-slate-200  h-14 shadow-md  flex  rounded-md relative dark:bg-neutral-700"
        >
          <img
            class=" transform duration-200  h-20 -translate-y-6"
            src={jaxImg}
            alt="jax"
          />
          <div class="icon  ml-4 mr-4 pausedicon">
            <span class="bg-opacity-80 bg-black"></span>
            <span class="bg-opacity-80 bg-black"></span>
            <span class="bg-opacity-80 bg-black"></span>
          </div>
          <audio src="https://azuki-songs.s3.amazonaws.com/f1/08 Nuclear Lethargy.m4a"></audio>
          <div class="flex">
            <div class=" text-left  w-40 pr-8 flex flex-col justify-center">
              <h3 class="font-bold uppercase text-md truncate">
                Nuclear Lethargy
              </h3>
              <h4 class="uppercase font-mono text-2xs 0 opacity-40 truncate">
                Lane 8
              </h4>
            </div>
            <div class="grid grid-cols-3 rounded-md w-36 mr-2">
              <div class="flex items-center justify-center">
                <button class="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95">
                  <AiFillStepBackward size={20} className="dark:text-white" />
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
                  <AiFillStepForward size={20} className="dark:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AudioPlayer
