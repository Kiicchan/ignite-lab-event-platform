import { useEffect } from 'react'
import {RocketIcon} from "./RocketIcon";
import { useCanvas } from '../hooks/useCanvas'

export function Welcome() {
  const canvasRef = useCanvas()

  return (
    <div className={`flex flex-1 flex-col items-center justify-center gap-6 p-2 relative`}>
      <canvas id="welcomecanvas" ref={canvasRef} className="h-full w-full bg-blur bg-cover bg-no-repeat absolute" />
      <h2 className="text-xl md:text-3xl text-gray-200 z-10 cursor-default pointer-events-none text-center relative">
        Bem vindo ao Ignite Lab
        <span className="inline-flex absolute rigth-0 -bottom-1 animate-bounce m-2">
          <RocketIcon />
        </span>
      </h2>

      <p className="text-base md:text-lg text-gray-200 z-10 cursor-default pointer-events-none text-center">
        Para começar a evoluir sua carreira, escolha uma aula no menu ao lado e comece a codar agora mesmo!
      </p>
    </div>
  )
}
