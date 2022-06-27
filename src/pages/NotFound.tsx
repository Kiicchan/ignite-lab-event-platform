import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RocketIcon } from '../components/RocketIcon'
import { useCanvas } from '../hooks/useCanvas'

export function NotFound() {
  const canvasRef = useCanvas()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-2 relative">
      <canvas id="notfoundcanvas" ref={canvasRef} className="h-full w-full absolute" />

      <h2 className="text-xl md:text-3xl text-gray-200 z-10 cursor-default pointer-events-none text-center relative">
        Página não encontrada
        <span className="inline-flex absolute rigth-0 -bottom-1 animate-bounce m-2">
          <RocketIcon />
        </span>
      </h2>
      <p className="text-base md:text-lg text-gray-200 z-10 text-center cursor-default pointer-events-none">
        Perdido? Clique{' '}
        <Link to={'/event'} className="text-green-300 cursor-pointer pointer-events-auto">
          aqui
        </Link>{' '}
        e volte para onde você pode acelerar sua evolução!
      </p>
    </div>
  )
}
