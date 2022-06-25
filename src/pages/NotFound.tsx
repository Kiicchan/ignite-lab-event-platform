import { useEffect } from "react"
import { Link } from "react-router-dom"
import { RocketIcon } from "../components/RocketIcon"

export function NotFound() {
    useEffect(() => {
        function resizeCanvas() {
          let canvas = document.querySelector('#notfoundcanvas') as HTMLCanvasElement
          canvas.width = canvas.offsetWidth
          canvas.height = canvas.offsetHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)
    
        const canvas = document.querySelector('#notfoundcanvas') as HTMLCanvasElement
        const ctx = canvas.getContext('2d')
        class Wave {
          invisible: boolean
          draw: Function
          propagate: Function
    
          constructor(x: number, y: number) {
            let radius = 1
            let speed = 5
            let wavelenght = 5
            let amplitude = 0.5
    
            this.invisible = false
    
            this.draw = (ctx: CanvasRenderingContext2D) => {
              ctx.beginPath()
              ctx.strokeStyle = '#00B37E'
              ctx.globalAlpha = amplitude > 0 ? amplitude : 0
              ctx.lineWidth = wavelenght
              ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
              ctx.stroke()
            }
    
            this.propagate = () => {
              radius += speed
              wavelenght += 0.5
              amplitude -= 0.01
              if (amplitude < 0) {
                this.invisible = true
              }
            }
          }
        }
    
        function throttle(func: Function, interval: number) {
          var lastCall = 0
          return function (this: any) {
            var now = Date.now()
            if (lastCall + interval < now) {
              lastCall = now
              return func.apply(this, arguments)
            }
          }
        }
    
        const waves: Wave[] = []
        const handleMouseMove = throttle((ev: MouseEvent) => {
          waves.unshift(new Wave(ev.offsetX, ev.offsetY))
        }, 200)
        canvas.addEventListener('mousemove', handleMouseMove)
    
        let myReq: number
    
        function animate() {
          ctx?.clearRect(0, 0, canvas.width, canvas.height)
          waves.forEach((wave, _, array) => {
            wave.draw(ctx)
            wave.propagate()
            if (wave.invisible) {
              array.pop()
            }
          })
          myReq = window.requestAnimationFrame(animate)
        }
    
        animate()
    
        return () => {
          window.removeEventListener('resize', resizeCanvas)
          canvas.removeEventListener('mousemove', handleMouseMove)
          window.cancelAnimationFrame(myReq)
        }
      })
    
      return (
        <div className={`min-h-screen max-h-screen flex flex-1 flex-col items-center justify-center gap-6 p-2 relative`}>
          <canvas id="notfoundcanvas" className="h-full w-full absolute" />
          <h2 className="text-xl md:text-3xl text-gray-200 z-10 cursor-default pointer-events-none text-center relative">Página não encontrada<span className='inline-flex absolute rigth-0 -bottom-1 animate-bounce m-2'><RocketIcon /></span></h2>
          
          <p className="text-base md:text-lg text-gray-200 z-10 text-center">
            Perdido? Clique <Link to={'/event'} className="text-green-300">aqui</Link> e volte para onde você pode acelerar sua evolução!
          </p>
        </div>
      )
}