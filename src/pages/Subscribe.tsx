import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'
import CodeMockup from '../assets/code-mockup.png'
import { ReactLogo } from '../components/ReactLogo'
import { useCreateSubscriberMutation } from '../graphql/generated'

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: { name, email },
    })

    navigate('/event')
  }

  return (
    <>
      <div className="relative min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-4">
        <div className="min-w-[533px] w-full max-w-[654px] absolute top-0">
          <ReactLogo />
        </div>
        <div className="flex flex-1 flex-col gap-8 mt-10 md:flex-row md:mt-20 md:mx-auto md:w-full max-w-[1216px] md:justify-between md:items-center">
          <div className="max-w-[640px] px-6 md:px-0 ">
            <div className="w-[208px] mx-auto md:mx-0">
              <Logo />
            </div>
            <h1 className="mt-6 md:mt-8 text-[1.9rem] md:text-[2.5rem] leading-tight text-center md:text-left">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{' '}
              <strong className="text-blue-500">React</strong>
            </h1>
            <p className="mt-6 text-sm md:text-base text-gray-200 leading-relaxed text-center md:text-left">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda
              para acessar as melhores oportunidades do mercado.
            </p>
          </div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-base md:text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                placeholder="Seu melhor e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src={CodeMockup} className="mt-10" alt="Code Mockup" />
      </div>
      <Footer />
    </>
  )
}
